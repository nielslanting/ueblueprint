import Blueprint from "./Blueprint.js"
import Configuration from "@ueblueprint/parser/Configuration.js"
import defineElements from "./element/defineElements.js"
import initializeSerializerFactory from "@ueblueprint/parser/serialization/initializeSerializerFactory.js"
import LinkElement from "./element/LinkElement.js"
import NodeElement from "./element/NodeElement.js"
import Utility from "@ueblueprint/parser/Utility.js"
import { registerPresentationHooks } from "@ueblueprint/parser/presentation.js"
import nodeColor from "./decoding/nodeColor.js"
import nodeIcon from "./decoding/nodeIcon.js"
import nodeVariadic from "./decoding/nodeVariadic.js"
import pinColor from "./decoding/pinColor.js"
import pinTitle from "./decoding/pinTitle.js"

initializeSerializerFactory()
registerPresentationHooks({
    nodeColor,
    nodeIcon,
    additionalPinInserter: nodeVariadic,
    pinTitle,
    pinColor,
})
defineElements()

export { Blueprint as Blueprint, NodeElement as NodeElement, LinkElement as LinkElement, Configuration as Configuration, Utility as Utility }
