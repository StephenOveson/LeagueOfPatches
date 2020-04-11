import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import './Home.css'

const Home = () => {
    const [current, setCurrent] = useState([])
    const [patches, setPatches] = useState([[], []])
    const [changes, setChanges] = useState([])
    const [buffsNerfs, setBuffsNerfs] = useState([])


    useEffect(() => {
        $.ajax({
            method: 'GET',
            url: 'https://ddragon.leagueoflegends.com/api/versions.json'
        }).then((data) => {
            Promise.all([...Array(6).keys()].map(i =>
                $.ajax({
                    method: 'GET',
                    url: 'https://ddragon.leagueoflegends.com/cdn/' + data[i] + '/data/en_US/champion.json'
                }))).then(responses => {
                    let patchData = responses.map(r => Object.values(r.data));
                    setPatches(patchData);
                    setCurrent(patchData[0]);
                });
        });
    }, [])

    useEffect(() => comparePatches(), [patches])

    useEffect(() => {
        setBuffsNerfs(changes.filter(champ =>
            champ[1].hp > 0 || champ[1].hp < 0 ||
            champ[1].hpperlevel > 0 || champ[1].hpperlevel < 0 ||
            champ[1].mp > 0 || champ[1].mp < 0 ||
            champ[1].mpperlevel > 0 || champ[1].mpperlevel < 0 ||
            champ[1].movespeed > 0 || champ[1].movespeed < 0 ||
            champ[1].armor > 0 || champ[1].armor < 0 ||
            champ[1].armorperlevel > 0 || champ[1].armorperlevel < 0 ||
            champ[1].spellblock > 0 || champ[1].spellblock < 0 ||
            champ[1].spellblockperlevel > 0 || champ[1].spellblockperlevel < 0 ||
            champ[1].attackrange > 0 || champ[1].attackrange < 0 ||
            champ[1].hpregen > 0 || champ[1].hpregen < 0 ||
            champ[1].hpregenperlevel > 0 || champ[1].hpregenperlevel < 0 ||
            champ[1].mpregen > 0 || champ[1].mpregen < 0 ||
            champ[1].mpregenperlevel > 0 || champ[1].mpregenperlevel < 0 ||
            champ[1].crit > 0 || champ[1].crit < 0 ||
            champ[1].critperlevel > 0 || champ[1].critperlevel < 0 ||
            champ[1].attackdamage > 0 || champ[1].attackdamage < 0 ||
            champ[1].attackdamageperlevel > 0 || champ[1].attackdamageperlevel < 0 ||
            champ[1].attackspeedperlevel > 0 || champ[1].attackspeedperlevel < 0 ||
            champ[1].attackspeed > 0 || champ[1].attackspeed < 0))
    }, [changes])

    const comparePatches = () => {
        const currentPatch = {}
        patches[0].forEach(champ => {
            if (!currentPatch[champ.name]) currentPatch[champ.name] = champ.stats
        })
        const patchOneNotes = {}
        patches[1].forEach(champ => {
            if (!patchOneNotes[champ.name]) patchOneNotes[champ.name] = champ.stats
        })

        const changeObj = {}

        const attrArr = ['hp', 'hpperlevel', 'mp', 'mpperlevel', 'movespeed', 'armor', 'armorperlevel', 'spellblock', 'spellblockperlevel', 'attackrange', 'hpregen',
            'hpregenperlevel', 'mpregen', 'mpregenperlevel', 'crit', 'critperlevel', 'attackdamage', 'attackdamageperlevel', 'attackspeedperlevel', 'attackspeed']
        if (currentPatch !== patchOneNotes) {
            for (let [key, value] of Object.entries(currentPatch)) {
                for (let [oldKey, oldValue] of Object.entries(patchOneNotes)) {
                    for (let attr of attrArr) {
                        if (key === oldKey) {
                            if (value[attr] !== oldValue[attr]) {
                                changeObj[key] = { ...changeObj[key], [attr]: value[attr] - oldValue[attr] }
                            }
                        }
                    }
                }
            }
        }
        setChanges(Object.entries(changeObj))
    }

    return (
        <>
            <nav className="navbar navbar-dark mb-3 navNeu">
                <a className="navbar-brand" href="/">League of Patches</a>
            </nav>

            <div className="container m-auto">
                <div className="input-group mb-3 neu">
                    <input type="text" className="form-control" placeholder="Search A Champion" aria-label="Example text with button addon" aria-describedby="button-addon1"
                        onChange={({ target: { value } }) => setCurrent(patches[0].filter((champ) => champ.name.toLowerCase().includes(value.toLowerCase())))} />
                </div>
                <div className="row m-auto">
                    {current && current.map(champ =>
                            <div className="card col-md-6 col-sm-12 background" key={champ.key}>
                                <div className="row no-gutters">
                                    <div className="col-md-12">
                                        <div className="card-body">
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <img
                                                        src={'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/' + champ.key + '.png'}
                                                        className="card-img radius m-auto" alt={champ.name} />
                                                </div>
                                                <div className="col-md-6">
                                                    <h4 className="card-title">{champ.name}</h4>
                                                    <h5 className="card-subtitle mb-2 text-muted">{champ.title}</h5>
                                                    <p className="card-text"><small className="" value={champ.tags.join(' ')}>{champ.tags.join(', ')}</small></p>
                                                    <div className="row">
                                                        <div className="progress mb-1 col-md-12">
                                                            <div className="progress-bar bg-danger" style={{ width: champ.info.attack * 10 + '%' }} role="progressbar" aria-valuenow={champ.info.attack} aria-valuemin="0" aria-valuemax="10">Attack</div>
                                                        </div>
                                                        <div className="progress mb-1 col-md-12">
                                                            <div className="progress-bar bg-success" style={{ width: champ.info.defense * 10 + '%' }} role="progressbar" aria-valuenow={champ.info.attack} aria-valuemin="0" aria-valuemax="10">Defense</div>
                                                        </div>
                                                        <div className="progress mb-1 col-md-12">
                                                            <div className="progress-bar bg-primary" style={{ width: champ.info.magic * 10 + '%' }} role="progressbar" aria-valuenow={champ.info.attack} aria-valuemin="0" aria-valuemax="10">Magic</div>
                                                        </div>
                                                        <div className="progress mb-1 col-md-12">
                                                            <div className="progress-bar bg-secondary" style={{ width: champ.info.difficulty * 10 + '%' }} role="progressbar" aria-valuenow={champ.info.attack} aria-valuemin="0" aria-valuemax="10">Difficulty</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <p className="card-text">{champ.blurb}</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="row">

                                                <div className="container col-md-5">

                                                </div>
                                                <div className="col-md-5 mb-3">
                                                    <button className="btn btn-lg btn-block button-neu"
                                                        onClick={() => $('#' + champ.key).hasClass('hidden') ? $('#' + champ.key).removeClass('hidden') : $('#' + champ.key).addClass('hidden')}>Stats</button>
                                                </div>
                                                <div className="col-md-12 hidden" id={champ.key}>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <ul className="list-group ">
                                                                <li className="list-group-item neuLess">{`HP: ${champ.stats.hp}`}</li>
                                                                <li className="list-group-item neuLess">{`HP/Level: ${champ.stats.hpperlevel}`}</li>
                                                                <li className="list-group-item neuLess">{`MP: ${champ.stats.mp}`}</li>
                                                                <li className="list-group-item neuLess">{`MP/Level: ${champ.stats.mpperlevel}`}</li>
                                                                <li className="list-group-item neuLess">{`MP Regen: ${champ.stats.mpregen}`}</li>
                                                                <li className="list-group-item neuLess">{`MP Regen/Level: ${champ.stats.mpregenperlevel}`}</li>
                                                                <li className="list-group-item neuLess">{`Armor: ${champ.stats.armor}`}</li>
                                                                <li className="list-group-item neuLess">{`Armor/Level: ${champ.stats.armorperlevel}`}</li>
                                                                <li className="list-group-item neuLess">{`MR: ${champ.stats.spellblock}`}</li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <ul className="list-group ">
                                                                <li className="list-group-item neuLess">{`MR/Level: ${champ.stats.spellblockperlevel}`}</li>
                                                                <li className="list-group-item neuLess">{`MS: ${champ.stats.movespeed}`}</li>
                                                                <li className="list-group-item neuLess">{`Attack Range: ${champ.stats.attackrange}`}</li>
                                                                <li className="list-group-item neuLess">{`Crit: ${champ.stats.crit}`}</li>
                                                                <li className="list-group-item neuLess">{`Crit/Level: ${champ.stats.critperlevel}`}</li>
                                                                <li className="list-group-item neuLess">{`AD: ${champ.stats.attackdamage}`}</li>
                                                                <li className="list-group-item neuLess">{`AD/Level: ${champ.stats.attackdamageperlevel}`}</li>
                                                                <li className="list-group-item neuLess">{`AS: ${champ.stats.attackspeed}`}</li>
                                                                <li className="list-group-item neuLess">{`AS/Level: ${champ.stats.attackspeedperlevel}`}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {buffsNerfs && buffsNerfs.map(change =>
                                            champ.name === change[0] ?
                                                <div className="row" key={change[0]}>
                                                    <h3>Changes from previous patch</h3>
                                                    <div className="col-md-12 alert-success">
                                                        <ul>
                                                            {change[1].hp && <li>HP: {change[1].hp}</li>}
                                                            {change[1].hpperlevel && <li>HP Per Level: {change[1].hpperlevel}</li>}
                                                            {change[1].mp && <li>MP: {change[1].mp}</li>}
                                                            {change[1].mpperlevel && <li>MP Per Level: {change[1].mpperlevel}</li>}
                                                            {change[1].mpregen && <li>MP Regen: {change[1].mpregen}</li>}
                                                            {change[1].mpregenperlevel && <li>MP Regen Per Level: {change[1].mpregenperlevel}</li>}
                                                            {change[1].armor && <li>Armor: {change[1].armor}</li>}
                                                            {change[1].armorperlevel && <li>Armor Per Level: {change[1].armorperlevel}</li>}
                                                            {change[1].spellblock && <li>Spell Block: {change[1].spellblock}</li>}
                                                            {change[1].spellblockperlevel && <li>Spell Block Per Level: {change[1].spellblockperlevel}</li>}
                                                            {change[1].movespeed && <li>Move Speed: {change[1].movespeed}</li>}
                                                            {change[1].attackrange && <li>Attack Range {change[1].attackrange}</li>}
                                                            {change[1].attackdamage && <li>Attack Damage: {change[1].attackdamage}</li>}
                                                            {change[1].attackdamageperlevel && <li>Attack Damage Per Level: {change[1].attackdamageperlevel}</li>}
                                                            {change[1].attackspeed && <li>Attack Speed: {change[1].attackspeed}</li>}
                                                            {change[1].attackspeedperlevel && <li>Attack Speed Per Level: {change[1].attackspeedperlevel}</li>}
                                                        </ul>
                                                    </div>
                                                </div> : null
                                        )}
                                    </div>
                                </div>
                            </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Home