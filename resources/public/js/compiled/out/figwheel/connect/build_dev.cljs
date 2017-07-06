(ns figwheel.connect.build-dev (:require [figwheel.client] [tabber.core] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/tabber.core.on-js-reload (apply js/tabber.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'tabber.core/on-js-reload' is missing"))), :open-urls ["http://localhost:3449/index.html"], :build-id "dev", :websocket-url "ws://localhost:3451/figwheel-ws"})

