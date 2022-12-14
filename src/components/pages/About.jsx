// This file is part of WebDarts.
// WebDarts is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
// WebDarts is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
// You should have received a copy of the GNU Affero General Public License along with WebDarts. If not, see <https://www.gnu.org/licenses/>. 

import { useState } from 'preact/hooks'

import logo from '../../assets/logo.svg'
import agplLogo from '../../assets/agplv3-with-text-162x68.png'

import useTranslation from '\.\./\.\./hooks/i18n'
import Modal from '../common/Modal'
import Button from '../common/Button'

const About = () => {

    const [modalOpen, setModalOpen] = useState(false)

    const { t } = useTranslation()

    return <div className="p-4">

        <div className="mb-8 text-center flex flex-col justify-center items-center space-y-8">

            <img
                className="w-1/2"
                src={logo} alt="Web Darts logo"
            />

            <h1 className="text-5xl">
                {t`about`}
            </h1>

            <p>{t`made-with-heart`}</p>

            <p>
                {t`free-oss`} <a className="text-blue-400" href="https://github.com/napkid/web-darts">
                    {t`check-code-link`}
                </a>
            </p>
            
            <h2 className="text-4xl">
                {t`licensing`}
            </h2>


            <div className>
                <p className="mb-2">{t`gnu-agpl`}</p>
                <a href="https://www.gnu.org/licenses/agpl-3.0.html" className="inline-block bg-white rounded-lg p-2 shadow-lg text-center" target="_blank" rel="license noopener noreferrer">
                    <img className="inline-block" src={agplLogo} alt="AGPL v3 logo" />
                </a>
            </div>

            <p xmlnsCc="http://creativecommons.org/ns#" xmlnsDct="http://purl.org/dc/terms/">
                <a className="text-blue-400" property="dct:title" rel="cc:attributionURL" href="https://darts.napkid.dev">
                    {t`web-darts-logo-graphics`}
                </a> {t`by`} <a className="text-blue-400" rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://www.napkid.dev">
                    Clément Dandrieux
                </a> {t`is-licensed-under`} <a href="http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" className="block text-blue-400">
                        CC BY-SA 4.0
                        <div className="flex items-center justify-center mt-4">

                            <img
                                style={{
                                    height: '22px!important',
                                    marginLeft: '3px',
                                    verticalAlign:'text-bottom'
                                }}
                                src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
                            />
                            <img 
                                style={{
                                    height: '22px!important',
                                    marginLeft: '3px',
                                    verticalAlign:'text-bottom'
                                }}
                                src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"
                            />
                        </div>

                </a>
                <br />© Copyright Clément Dandrieux 2022
            </p>

            <p>
            </p>
        </div>

        {modalOpen && <Modal onExit={() => setModalOpen(false)}>
            <h3 className="text-3xl mb-4">
                {t`for-my-friends`} :
            </h3>
            <ul className="space-y-2 text-xl">
                <li>Jo</li>
                <li>Baba</li>
                <li>Alex</li>
                <li>Clem</li>
                <li>Gaylor</li>
                <li>Axou</li>
                <li>Bouky</li>
                <li>Anto</li>
                <li>Quentinus</li>
            </ul>
        </Modal>}

        <Button
            color="blue"
            full
            rounded
            size="small"
            onClick={() => setModalOpen(!modalOpen)}
        >
            {t`for-my-friends`}
        </Button>
    </div>
}

export default About