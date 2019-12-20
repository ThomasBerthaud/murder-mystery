import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faComment, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faComment, faEnvelope);

Vue.component("font-awesome-icon", FontAwesomeIcon);
