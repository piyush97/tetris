'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">tetris documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-215f693b609e79bc94c3e9aca4d4fa338aedbd5791bfe1d4273eba93cbffa14f972d99a8834e7efbad34a39d29131f467a33d127aaddcaa843ca0deee843bd0f"' : 'data-target="#xs-controllers-links-module-AppModule-215f693b609e79bc94c3e9aca4d4fa338aedbd5791bfe1d4273eba93cbffa14f972d99a8834e7efbad34a39d29131f467a33d127aaddcaa843ca0deee843bd0f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-215f693b609e79bc94c3e9aca4d4fa338aedbd5791bfe1d4273eba93cbffa14f972d99a8834e7efbad34a39d29131f467a33d127aaddcaa843ca0deee843bd0f"' :
                                            'id="xs-controllers-links-module-AppModule-215f693b609e79bc94c3e9aca4d4fa338aedbd5791bfe1d4273eba93cbffa14f972d99a8834e7efbad34a39d29131f467a33d127aaddcaa843ca0deee843bd0f"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-215f693b609e79bc94c3e9aca4d4fa338aedbd5791bfe1d4273eba93cbffa14f972d99a8834e7efbad34a39d29131f467a33d127aaddcaa843ca0deee843bd0f"' : 'data-target="#xs-injectables-links-module-AppModule-215f693b609e79bc94c3e9aca4d4fa338aedbd5791bfe1d4273eba93cbffa14f972d99a8834e7efbad34a39d29131f467a33d127aaddcaa843ca0deee843bd0f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-215f693b609e79bc94c3e9aca4d4fa338aedbd5791bfe1d4273eba93cbffa14f972d99a8834e7efbad34a39d29131f467a33d127aaddcaa843ca0deee843bd0f"' :
                                        'id="xs-injectables-links-module-AppModule-215f693b609e79bc94c3e9aca4d4fa338aedbd5791bfe1d4273eba93cbffa14f972d99a8834e7efbad34a39d29131f467a33d127aaddcaa843ca0deee843bd0f"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BlockGeneratorModule.html" data-type="entity-link" >BlockGeneratorModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-BlockGeneratorModule-f2783d0c8fd3a334496e28397bd5507ecf1e48af977c65062c542d6e11bb0d8324c4e82eb3a627ceaba703dfee78241c0e8d5c6cda31278245af84f69879fb4d"' : 'data-target="#xs-injectables-links-module-BlockGeneratorModule-f2783d0c8fd3a334496e28397bd5507ecf1e48af977c65062c542d6e11bb0d8324c4e82eb3a627ceaba703dfee78241c0e8d5c6cda31278245af84f69879fb4d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BlockGeneratorModule-f2783d0c8fd3a334496e28397bd5507ecf1e48af977c65062c542d6e11bb0d8324c4e82eb3a627ceaba703dfee78241c0e8d5c6cda31278245af84f69879fb4d"' :
                                        'id="xs-injectables-links-module-BlockGeneratorModule-f2783d0c8fd3a334496e28397bd5507ecf1e48af977c65062c542d6e11bb0d8324c4e82eb3a627ceaba703dfee78241c0e8d5c6cda31278245af84f69879fb4d"' }>
                                        <li class="link">
                                            <a href="injectables/BlockGeneratorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlockGeneratorService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GameModule.html" data-type="entity-link" >GameModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GameModule-7ec0e1b1cf6b791c8dc55562e76cdfedb3880c93a04a22a8edc19dd52d26f39f5b6784efdd5610030ec9e281c65ff75eb0f5bd75f6b9d0204a91e7f08e13c2f0"' : 'data-target="#xs-injectables-links-module-GameModule-7ec0e1b1cf6b791c8dc55562e76cdfedb3880c93a04a22a8edc19dd52d26f39f5b6784efdd5610030ec9e281c65ff75eb0f5bd75f6b9d0204a91e7f08e13c2f0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GameModule-7ec0e1b1cf6b791c8dc55562e76cdfedb3880c93a04a22a8edc19dd52d26f39f5b6784efdd5610030ec9e281c65ff75eb0f5bd75f6b9d0204a91e7f08e13c2f0"' :
                                        'id="xs-injectables-links-module-GameModule-7ec0e1b1cf6b791c8dc55562e76cdfedb3880c93a04a22a8edc19dd52d26f39f5b6784efdd5610030ec9e281c65ff75eb0f5bd75f6b9d0204a91e7f08e13c2f0"' }>
                                        <li class="link">
                                            <a href="injectables/GameService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GameService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GameZone.html" data-type="entity-link" >GameZone</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GameZone-c3cd8d6d4201c434c6012d70274ace9b6195a48f86c22473f932d82611e253a234c2a2db3b285ceec2b6e254c1ec49cff220d136d3d38cd11777b9c9ed26112d"' : 'data-target="#xs-injectables-links-module-GameZone-c3cd8d6d4201c434c6012d70274ace9b6195a48f86c22473f932d82611e253a234c2a2db3b285ceec2b6e254c1ec49cff220d136d3d38cd11777b9c9ed26112d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GameZone-c3cd8d6d4201c434c6012d70274ace9b6195a48f86c22473f932d82611e253a234c2a2db3b285ceec2b6e254c1ec49cff220d136d3d38cd11777b9c9ed26112d"' :
                                        'id="xs-injectables-links-module-GameZone-c3cd8d6d4201c434c6012d70274ace9b6195a48f86c22473f932d82611e253a234c2a2db3b285ceec2b6e254c1ec49cff220d136d3d38cd11777b9c9ed26112d"' }>
                                        <li class="link">
                                            <a href="injectables/ZoneFactoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ZoneFactoryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HoldZoneModule.html" data-type="entity-link" >HoldZoneModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-HoldZoneModule-8d82d85c6722aafbf9f103c12fbcfe053d5571e6684cdd561931072f21ae9894208ee3dfc416de8c50e44c3c29e576984cb55f4ba0a1d447558978b196e09430"' : 'data-target="#xs-injectables-links-module-HoldZoneModule-8d82d85c6722aafbf9f103c12fbcfe053d5571e6684cdd561931072f21ae9894208ee3dfc416de8c50e44c3c29e576984cb55f4ba0a1d447558978b196e09430"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HoldZoneModule-8d82d85c6722aafbf9f103c12fbcfe053d5571e6684cdd561931072f21ae9894208ee3dfc416de8c50e44c3c29e576984cb55f4ba0a1d447558978b196e09430"' :
                                        'id="xs-injectables-links-module-HoldZoneModule-8d82d85c6722aafbf9f103c12fbcfe053d5571e6684cdd561931072f21ae9894208ee3dfc416de8c50e44c3c29e576984cb55f4ba0a1d447558978b196e09430"' }>
                                        <li class="link">
                                            <a href="injectables/HoldZone.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HoldZone</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NextBlockGeneratorModule.html" data-type="entity-link" >NextBlockGeneratorModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-NextBlockGeneratorModule-73fa08fa742f0a2ef24f0f7834f76f296565c75b58de1f6bdc4b933e3550c696c8747123ecaa68289e7000f9b9efdadfd96493d8771dc691242a677e327ff967"' : 'data-target="#xs-injectables-links-module-NextBlockGeneratorModule-73fa08fa742f0a2ef24f0f7834f76f296565c75b58de1f6bdc4b933e3550c696c8747123ecaa68289e7000f9b9efdadfd96493d8771dc691242a677e327ff967"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NextBlockGeneratorModule-73fa08fa742f0a2ef24f0f7834f76f296565c75b58de1f6bdc4b933e3550c696c8747123ecaa68289e7000f9b9efdadfd96493d8771dc691242a677e327ff967"' :
                                        'id="xs-injectables-links-module-NextBlockGeneratorModule-73fa08fa742f0a2ef24f0f7834f76f296565c75b58de1f6bdc4b933e3550c696c8747123ecaa68289e7000f9b9efdadfd96493d8771dc691242a677e327ff967"' }>
                                        <li class="link">
                                            <a href="injectables/NextBlockGeneratorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NextBlockGeneratorService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PlayerModule.html" data-type="entity-link" >PlayerModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PlayerModule-c2ac463252bcdc8a69e2b7e46e33f86ca54b8071b97de6d3328f0c70bb172acebd6fd40791d7e4579305a5fe701bb21815ed405cd4a32adfbe48d486f40da646"' : 'data-target="#xs-injectables-links-module-PlayerModule-c2ac463252bcdc8a69e2b7e46e33f86ca54b8071b97de6d3328f0c70bb172acebd6fd40791d7e4579305a5fe701bb21815ed405cd4a32adfbe48d486f40da646"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PlayerModule-c2ac463252bcdc8a69e2b7e46e33f86ca54b8071b97de6d3328f0c70bb172acebd6fd40791d7e4579305a5fe701bb21815ed405cd4a32adfbe48d486f40da646"' :
                                        'id="xs-injectables-links-module-PlayerModule-c2ac463252bcdc8a69e2b7e46e33f86ca54b8071b97de6d3328f0c70bb172acebd6fd40791d7e4579305a5fe701bb21815ed405cd4a32adfbe48d486f40da646"' }>
                                        <li class="link">
                                            <a href="injectables/PlayerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlayerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PlayerModule.html" data-type="entity-link" >PlayerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PlayerModule-242e81796a06283409d5e40b86b2194aa465c1a08359d6f0714c279124899a14ca4c1c7eb6358dd6278bde421d1bdf9aba90bbdc943cfac2e48c75b71a3cd6bc-1"' : 'data-target="#xs-controllers-links-module-PlayerModule-242e81796a06283409d5e40b86b2194aa465c1a08359d6f0714c279124899a14ca4c1c7eb6358dd6278bde421d1bdf9aba90bbdc943cfac2e48c75b71a3cd6bc-1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PlayerModule-242e81796a06283409d5e40b86b2194aa465c1a08359d6f0714c279124899a14ca4c1c7eb6358dd6278bde421d1bdf9aba90bbdc943cfac2e48c75b71a3cd6bc-1"' :
                                            'id="xs-controllers-links-module-PlayerModule-242e81796a06283409d5e40b86b2194aa465c1a08359d6f0714c279124899a14ca4c1c7eb6358dd6278bde421d1bdf9aba90bbdc943cfac2e48c75b71a3cd6bc-1"' }>
                                            <li class="link">
                                                <a href="controllers/StartScreenController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StartScreenController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PlayerModule-242e81796a06283409d5e40b86b2194aa465c1a08359d6f0714c279124899a14ca4c1c7eb6358dd6278bde421d1bdf9aba90bbdc943cfac2e48c75b71a3cd6bc-1"' : 'data-target="#xs-injectables-links-module-PlayerModule-242e81796a06283409d5e40b86b2194aa465c1a08359d6f0714c279124899a14ca4c1c7eb6358dd6278bde421d1bdf9aba90bbdc943cfac2e48c75b71a3cd6bc-1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PlayerModule-242e81796a06283409d5e40b86b2194aa465c1a08359d6f0714c279124899a14ca4c1c7eb6358dd6278bde421d1bdf9aba90bbdc943cfac2e48c75b71a3cd6bc-1"' :
                                        'id="xs-injectables-links-module-PlayerModule-242e81796a06283409d5e40b86b2194aa465c1a08359d6f0714c279124899a14ca4c1c7eb6358dd6278bde421d1bdf9aba90bbdc943cfac2e48c75b71a3cd6bc-1"' }>
                                        <li class="link">
                                            <a href="injectables/StartScreenService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StartScreenService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ScoreZoneModule.html" data-type="entity-link" >ScoreZoneModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ScoreZoneModule-44ecdc65b19835e49a6a4616b0219b9c2662c23c8199884e1d0c705892b1cce91dd99ba9f18657db41ccf542735ba20934f4787174bf7f24ea90ff2ca651152f"' : 'data-target="#xs-injectables-links-module-ScoreZoneModule-44ecdc65b19835e49a6a4616b0219b9c2662c23c8199884e1d0c705892b1cce91dd99ba9f18657db41ccf542735ba20934f4787174bf7f24ea90ff2ca651152f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ScoreZoneModule-44ecdc65b19835e49a6a4616b0219b9c2662c23c8199884e1d0c705892b1cce91dd99ba9f18657db41ccf542735ba20934f4787174bf7f24ea90ff2ca651152f"' :
                                        'id="xs-injectables-links-module-ScoreZoneModule-44ecdc65b19835e49a6a4616b0219b9c2662c23c8199884e1d0c705892b1cce91dd99ba9f18657db41ccf542735ba20934f4787174bf7f24ea90ff2ca651152f"' }>
                                        <li class="link">
                                            <a href="injectables/ScoreZone.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScoreZone</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ZonefactoryModule.html" data-type="entity-link" >ZonefactoryModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ZonefactoryModule-9bd533f4520a5b18b7f00ab1c16e88f253ee8d4b1a67603f6dda7662276699fce81ba04fc8bfff73b34a55c6a0c96b43622725fe75f51570691b91663ea99604"' : 'data-target="#xs-injectables-links-module-ZonefactoryModule-9bd533f4520a5b18b7f00ab1c16e88f253ee8d4b1a67603f6dda7662276699fce81ba04fc8bfff73b34a55c6a0c96b43622725fe75f51570691b91663ea99604"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ZonefactoryModule-9bd533f4520a5b18b7f00ab1c16e88f253ee8d4b1a67603f6dda7662276699fce81ba04fc8bfff73b34a55c6a0c96b43622725fe75f51570691b91663ea99604"' :
                                        'id="xs-injectables-links-module-ZonefactoryModule-9bd533f4520a5b18b7f00ab1c16e88f253ee8d4b1a67603f6dda7662276699fce81ba04fc8bfff73b34a55c6a0c96b43622725fe75f51570691b91663ea99604"' }>
                                        <li class="link">
                                            <a href="injectables/ZoneFactoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ZoneFactoryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Level.html" data-type="entity-link" >Level</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Music.html" data-type="entity-link" >Music</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Player.html" data-type="entity-link" >Player</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Score.html" data-type="entity-link" >Score</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Shape.html" data-type="entity-link" >Shape</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Zone.html" data-type="entity-link" >Zone</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/GameConstants.html" data-type="entity-link" >GameConstants</a>
                            </li>
                            <li class="link">
                                <a href="classes/PlayerConstants.html" data-type="entity-link" >PlayerConstants</a>
                            </li>
                            <li class="link">
                                <a href="classes/ShapeConstants.html" data-type="entity-link" >ShapeConstants</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/GameZone.html" data-type="entity-link" >GameZone</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HoldZone.html" data-type="entity-link" >HoldZone</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NextBlockGeneratorService.html" data-type="entity-link" >NextBlockGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ScoreZone.html" data-type="entity-link" >ScoreZone</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ZoneFactoryService.html" data-type="entity-link" >ZoneFactoryService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IScreen.html" data-type="entity-link" >IScreen</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IShape.html" data-type="entity-link" >IShape</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});