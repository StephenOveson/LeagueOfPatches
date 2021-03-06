import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import './Home.css'
import Loading from '../components/Loading'

const Home = () => {
    const [tags, setTags] = useState(new Set())
    const [current, setCurrent] = useState([])
    const [patches, setPatches] = useState([[], []])
    const [changes, setChanges] = useState([])
    const [buffsNerfs, setBuffsNerfs] = useState([])

    const attrArr = ['hp', 'hpperlevel', 'mp', 'mpperlevel', 'movespeed', 'armor', 'armorperlevel', 'spellblock', 'spellblockperlevel', 'attackrange', 'hpregen',
        'hpregenperlevel', 'mpregen', 'mpregenperlevel', 'crit', 'critperlevel', 'attackdamage', 'attackdamageperlevel', 'attackspeedperlevel', 'attackspeed']

    useEffect(() => {
        $.ajax({
            method: 'GET',
            url: 'https://ddragon.leagueoflegends.com/api/versions.json'
        }).then((data) => {
            Promise.all([...Array(6).keys()].map(i =>
                $.ajax({
                    method: 'GET',
                    url: 'https://ddragon.leagueoflegends.com/cdn/' + data[i] + '/data/en_US/championFull.json'
                }))).then(responses => {
                    let patchData = responses.map(r => Object.values(r.data));
                    setPatches(patchData);
                    setCurrent(patchData[0])
                });
        });
    }, [])

    useEffect(() => comparePatches(), [patches])
    useEffect(() => console.log(patches[0]), [patches])

    useEffect(() => {
        setBuffsNerfs(changes.filter(champ => Object.values(champ[1]).some(x => x)))
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

    useEffect(() => {
        let tagSet = new Set()
        patches[0].forEach(champ => {
            champ.tags.forEach(tag => {
                tagSet.add(tag)
            })
        })
        setTags(tagSet)
    }, [patches])

    return (
        <Loading ready={current.length > 0}>
            <nav className="navbar navbar-dark mb-3 navNeu">
                <a className="navbar-brand" href="/">League of Patches</a>
            </nav>

            <div className="container m-auto">
                <div className="input-group mb-3 neu">
                    <input type="text" className="form-control" placeholder="Search A Champion" aria-label="Example text with button addon" aria-describedby="button-addon1"
                        onChange={({ target: { value } }) => setCurrent(patches[0].filter((champ) => champ.name.toLowerCase().includes(value.toLowerCase())))} />
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                        <button className="btn button-neu m-3" onClick={() => setCurrent(patches[0])}>All</button>
                        {tags && [...tags].map(tag => <button className="btn button-neu m-3" key={tag} value={tag} onClick={({ target: { value } }) => setCurrent(patches[0].filter((champ) => champ.tags.includes(value)))}>{tag}</button>)}
                    </div>
                </div>
                <div className="row m-auto">
                    {current && current.map(champ =>
                        <div className="card col-md-6 col-sm-12 background" key={champ.key}>
                            <div className="row no-gutters">
                                <div className="col-md-12">
                                    <div className="card-body">
                                        <div className="row mb-3">
                                            <div className="col-md-5">
                                                <img
                                                    src={'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/' + champ.key + '.png'}
                                                    className="card-img radius m-auto" alt={champ.name} />
                                            </div>
                                            <div className="col-md-7">
                                                <h4 className="card-title">{champ.name}</h4>
                                                <h5 className="card-subtitle mb-2 text-muted">{champ.title}</h5>
                                                <p className="card-text"><small className="" value={champ.tags.join(' ')}>{champ.tags.join(', ')}</small></p>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="progress mb-1">
                                                            <div className="progress-bar bg-danger" style={{ width: champ.info.attack * 10 + '%' }} role="progressbar" aria-valuenow={champ.info.attack} aria-valuemin="0" aria-valuemax="10">Attack</div>
                                                        </div>
                                                        <div className="progress mb-1">
                                                            <div className="progress-bar bg-success" style={{ width: champ.info.defense * 10 + '%' }} role="progressbar" aria-valuenow={champ.info.defense} aria-valuemin="0" aria-valuemax="10">Defense</div>
                                                        </div>
                                                        <div className="progress mb-1">
                                                            <div className="progress-bar bg-primary" style={{ width: champ.info.magic * 10 + '%' }} role="progressbar" aria-valuenow={champ.info.magic} aria-valuemin="0" aria-valuemax="10">Magic</div>
                                                        </div>
                                                        <div className="progress mb-1">
                                                            <div className="progress-bar bg-secondary" style={{ width: champ.info.difficulty * 10 + '%' }} role="progressbar" aria-valuenow={champ.info.difficulty} aria-valuemin="0" aria-valuemax="10">Difficulty</div>
                                                        </div>
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

                                            <div className="container col-md-6">
                                                <button className="btn btn-lg btn-block button-neu"
                                                    onClick={() => $('#' + champ.name).hasClass('hidden') ? $('#' + champ.name).removeClass('hidden') : $('#' + champ.name).addClass('hidden')}>Spells</button>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <button className="btn btn-lg btn-block button-neu"
                                                    onClick={() => $('#' + champ.key).hasClass('hidden') ? $('#' + champ.key).removeClass('hidden') : $('#' + champ.key).addClass('hidden')}>Stats</button>
                                            </div>
                                            <div className="col-md-12 hidden" id={champ.name}>
                                                <ul className="list-unstyled">
                                                    <li className="media">
                                                        <img src={'https://ddragon.leagueoflegends.com/cdn/10.8.1/img/passive/' + champ.passive.image.full} className="mr-3" alt="..." />
                                                        <div className="media-body">
                                                            <h5 className="mt-0 mb-1">{champ.passive.name}</h5>
                                                            <p className="mt-0 mb-1">{champ.passive.description}</p>
                                                        </div>
                                                    </li>
                                                    {champ.spells.map(spell => <li className="media my-4" key={spell.id}>
                                                        <img src={'https://ddragon.leagueoflegends.com/cdn/10.8.1/img/spell/' + spell.id + '.png'} className="mr-3" alt="..." />
                                                        <div className="media-body">
                                                            <h5 className="mt-0 mb-1">{spell.name}</h5>
                                                            <p className="mt-0 mb-1">{spell.description}</p>
                                                            {spell.cooldownBurn && <p className="mt-0 mb-1"><span className="h6">Cooldown: </span>{spell.cooldownBurn}</p>}
                                                            {spell.costBurn && <p className="mt-0 mb-1"><span className="h6">Cost: </span>{spell.costBurn}</p>}
                                                            {spell.rangeBurn && <p className="mt-0 mb-1"><span className="h6">Range: </span>{spell.rangeBurn}</p>}
                                                        </div>
                                                    </li>
                                                    )}
                                                </ul>
                                            </div>
                                            <div className="col-md-12 hidden" id={champ.key}>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <ul className="list-group">
                                                            {Object.entries(champ.stats).map(([name, stat]) => 
                                                                stat ? <li className="list-group-item neuLess">{`${name}: ${stat}`}</li>:null
                                                            )}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {buffsNerfs && buffsNerfs.map(change =>
                                        champ.name === change[0] ?
                                            <div className="row" key={change[0]}>
                                                <div className="col-md-12"><h3>Recent Changes</h3>
                                                    <ul style={{ listStyle: 'none' }}>
                                                        {attrArr.map(attr => change[1][attr] > 0 &&
                                                            <div key={attr}>
                                                                <div className="col-md-12 neu">
                                                                    {change[1][attr] && <li><span><i className="far fa-plus-square"></i></span> {attr}: {change[1][attr]}</li>}
                                                                </div>
                                                            </div>)}
                                                    </ul>
                                                    <ul style={{ listStyle: 'none' }}>
                                                        {attrArr.map(attr => change[1][attr] < 0 &&
                                                            <div key={attr}>
                                                                <div className="col-md-12 neu">
                                                                    {change[1][attr] && <li><span><i className="far fa-minus-square"></i></span> {attr}: {change[1][attr]}</li>}
                                                                </div>
                                                            </div>)}
                                                    </ul>
                                                </div>
                                            </div> : null)}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Loading>
    )
}

export default Home