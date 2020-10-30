/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'sprite_nani2',
                            symbolName: 'sprite_nani',
                            type: 'rect',
                            rect: ['5', '9', '397', '534', 'auto', 'auto'],
                            overflow: 'hidden'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '410px', '550px'],
                            overflow: 'visible',
                            fill: ["rgba(128,224,163,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "sprite_nani": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '397px', '534px', 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(144,144,144,0.00)']
                        },
                        {
                            id: 'sprite-nani52',
                            type: 'image',
                            rect: ['127px', '78px', '4070px', '377px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sprite-nani5.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '397px', '534px']
                        }
                    }
                },
                timeline: {
                    duration: 5500,
                    autoPlay: true,
                    data: [
                        [
                            "eid179",
                            "top",
                            0,
                            0,
                            "linear",
                            "${sprite-nani52}",
                            '78px',
                            '78px'
                        ],
                        [
                            "eid181",
                            "top",
                            500,
                            0,
                            "linear",
                            "${sprite-nani52}",
                            '78px',
                            '78px'
                        ],
                        [
                            "eid183",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${sprite-nani52}",
                            '78px',
                            '78px'
                        ],
                        [
                            "eid185",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${sprite-nani52}",
                            '78px',
                            '78px'
                        ],
                        [
                            "eid190",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${sprite-nani52}",
                            '78px',
                            '78px'
                        ],
                        [
                            "eid192",
                            "top",
                            2500,
                            0,
                            "linear",
                            "${sprite-nani52}",
                            '78px',
                            '78px'
                        ],
                        [
                            "eid178",
                            "left",
                            0,
                            0,
                            "linear",
                            "${sprite-nani52}",
                            '127px',
                            '127px'
                        ],
                        [
                            "eid180",
                            "left",
                            500,
                            0,
                            "linear",
                            "${sprite-nani52}",
                            '127px',
                            '-196px'
                        ],
                        [
                            "eid182",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${sprite-nani52}",
                            '-196px',
                            '-560px'
                        ],
                        [
                            "eid184",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${sprite-nani52}",
                            '-560px',
                            '-917px'
                        ],
                        [
                            "eid189",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${sprite-nani52}",
                            '-917px',
                            '-1277px'
                        ],
                        [
                            "eid191",
                            "left",
                            2500,
                            0,
                            "linear",
                            "${sprite-nani52}",
                            '-1277px',
                            '-1648px'
                        ],
                        [
                            "eid193",
                            "left",
                            3000,
                            0,
                            "linear",
                            "${sprite-nani52}",
                            '-1648px',
                            '-2021px'
                        ],
                        [
                            "eid194",
                            "left",
                            3500,
                            0,
                            "linear",
                            "${sprite-nani52}",
                            '-2021px',
                            '-2401px'
                        ],
                        [
                            "eid195",
                            "left",
                            4000,
                            0,
                            "linear",
                            "${sprite-nani52}",
                            '-2401px',
                            '-2750px'
                        ],
                        [
                            "eid196",
                            "left",
                            4500,
                            0,
                            "linear",
                            "${sprite-nani52}",
                            '-2750px',
                            '-3078px'
                        ],
                        [
                            "eid197",
                            "left",
                            5000,
                            0,
                            "linear",
                            "${sprite-nani52}",
                            '-3078px',
                            '-3441px'
                        ],
                        [
                            "eid198",
                            "left",
                            5500,
                            0,
                            "linear",
                            "${sprite-nani52}",
                            '-3441px',
                            '-3793px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("animacion-nani_edgeActions.js");
})("EDGE-322325805");
