import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faComment, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faInbox, faPaperPlane, faTrash, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faComment, faEnvelope, faInbox, faPaperPlane, faTrash, faExclamationCircle);

Vue.component("font-awesome-icon", FontAwesomeIcon);
