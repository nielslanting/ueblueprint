/**
 * @template {typeof import("./packages/parser/src/entity/IEntity.js").default} T
 * @typedef {import("./packages/parser/src/entity/MirroredEntity.js").default<T>} MirroredEntity
 */
/**
 * @typedef {[Number, Number]} Coordinates
 */
/**
 * @typedef {CustomEvent<{ value: Coordinates }>} UEBDragEvent
 * @typedef {CustomEvent} UEBNodeUpdateEvent
 */
/** @typedef {typeof import("./packages/parser/src/entity/IEntity.js").default} IEntityConstructor */
/**
 * @template T
 * @typedef {T extends [infer A] ? InstanceType<A>
 *     : T extends [infer A, ...infer B] ? InstanceType<A> | UnionFromArray<B>
 *     : never
 * } UnionFromArray
 */
/**
 * @template T
 * @typedef {T extends import("./packages/parser/src/entity/AlternativesEntity.js").default<infer R extends any[]> ? Boolean
 *     : T extends import("./packages/parser/src/entity/ArrayEntity.js").default<infer R extends IEntityConstructor> ? ExtractType<R>
 *     : InstanceType<T>
 * } ExtractType
 */
/**
 * @typedef {typeof import("./packages/lit/src/Blueprint.js").default} BlueprintConstructor
 * @typedef {typeof import("./packages/lit/src/element/IElement.js").default} IElementConstructor
 * @typedef {typeof import("./packages/lit/src/element/LinkElement.js").default} LinkElementConstructor
 * @typedef {typeof import("./packages/lit/src/element/NodeElement.js").default} NodeElementConstructor
 * @typedef {typeof import("./packages/lit/src/element/PinElement.js").default} PinElementConstructor
 * @typedef {typeof import("./packages/lit/src/element/WindowElement.js").default} WindowElementConstructor
 * @typedef {typeof import("./packages/parser/src/entity/AlternativesEntity.js").default} AlternativesEntityConstructor
 * @typedef {typeof import("./packages/parser/src/entity/IEntity.js").default} EntityConstructor
 * @typedef {typeof import("./packages/parser/src/entity/ObjectEntity.js").default} ObjectEntityConstructor
 */
/**
 * @template {IEntity} T
 * @typedef {import("./packages/parser/src/entity/PinEntity.js").default<T>} PinEntity<T>
 */
/**
 * @typedef {import ("./packages/lit/tests/fixtures/BlueprintFixture.js").default} BlueprintFixture
 * @typedef {import("./packages/lit/src/Blueprint.js").default} Blueprint
 * @typedef {import("./packages/lit/src/element/ColorHandlerElement.js").default} ColorHandlerElement
 * @typedef {import("./packages/lit/src/element/ColorSliderElement.js").default} ColorSliderElement
 * @typedef {import("./packages/lit/src/element/DropdownElement.js").default} DropdownElement
 * @typedef {import("./packages/lit/src/element/ElementFactory.js").default} ElementFactory
 * @typedef {import("./packages/lit/src/element/IDraggableControlElement.js").default} IDraggableControlElement
 * @typedef {import("./packages/lit/src/element/IDraggableElement.js").default} IDraggableElement
 * @typedef {import("./packages/lit/src/element/IElement.js").default} IElement
 * @typedef {import("./packages/lit/src/element/IFromToPositionedElement.js").default} IFromToPositionedElement
 * @typedef {import("./packages/lit/src/element/InputElement.js").default} InputElement
 * @typedef {import("./packages/lit/src/element/ISelectableDraggableElement.js").default} ISelectableDraggableElement
 * @typedef {import("./packages/lit/src/element/LinkElement.js").default} LinkElement
 * @typedef {import("./packages/lit/src/element/NodeElement.js").default} NodeElement
 * @typedef {import("./packages/lit/src/element/PinElement.js").default} PinElement
 * @typedef {import("./packages/lit/src/element/SelectorElement.js").default} SelectorElement
 * @typedef {import("./packages/lit/src/element/WindowElement.js").default} WindowElement
 * @typedef {import("./packages/parser/src/entity/ByteEntity.js").default} ByteEntity
 * @typedef {import("./packages/parser/src/entity/BlueprintEntity.js").default} BlueprintEntity
 * @typedef {import("./packages/parser/src/entity/ColorChannelEntity.js").default} ColorChannelEntity
 * @typedef {import("./packages/parser/src/entity/ComputedTypeEntity.js").default} ComputedTypeEntity
 * @typedef {import("./packages/parser/src/entity/EnumDisplayValueEntity.js").default} EnumDisplayValueEntity
 * @typedef {import("./packages/parser/src/entity/EnumEntity.js").default} EnumEntity
 * @typedef {import("./packages/parser/src/entity/FormatTextEntity.js").default} FormatTextEntity
 * @typedef {import("./packages/parser/src/entity/FunctionReferenceEntity.js").default} FunctionReferenceEntity
 * @typedef {import("./packages/parser/src/entity/GuidEntity.js").default} GuidEntity
 * @typedef {import("./packages/parser/src/entity/IEntity.js").default} IEntity
 * @typedef {import("./packages/parser/src/entity/Integer64Entity.js").default} Integer64Entity
 * @typedef {import("./packages/parser/src/entity/IntegerEntity.js").default} IntegerEntity
 * @typedef {import("./packages/parser/src/entity/InvariantTextEntity.js").default} InvariantTextEntity
 * @typedef {import("./packages/parser/src/entity/KeyBindingEntity.js").default} KeyBindingEntity
 * @typedef {import("./packages/parser/src/entity/LinearColorEntity.js").default} LinearColorEntity
 * @typedef {import("./packages/parser/src/entity/LocalizedTextEntity.js").default} LocalizedTextEntity
 * @typedef {import("./packages/parser/src/entity/MacroGraphReferenceEntity.js").default} MacroGraphReferenceEntity
 * @typedef {import("./packages/parser/src/entity/NaturalNumberEntity.js").default} NaturalNumberEntity
 * @typedef {import("./packages/parser/src/entity/NullEntity.js").default} NullEntity
 * @typedef {import("./packages/parser/src/entity/NumberEntity.js").default} NumberEntity
 * @typedef {import("./packages/parser/src/entity/ObjectEntity.js").default} ObjectEntity
 * @typedef {import("./packages/parser/src/entity/ObjectReferenceEntity.js").default} ObjectReferenceEntity
 * @typedef {import("./packages/parser/src/entity/objects/KnotEntity.js").default} KnotEntity
 * @typedef {import("./packages/parser/src/entity/PinReferenceEntity.js").default} PinReferenceEntity
 * @typedef {import("./packages/parser/src/entity/PinTypeEntity.js").default} PinTypeEntity
 * @typedef {import("./packages/parser/src/entity/RBSerializationVector2DEntity.js").default} RBSerializationVector2DEntity
 * @typedef {import("./packages/parser/src/entity/RotatorEntity.js").default} RotatorEntity
 * @typedef {import("./packages/parser/src/entity/SimpleSerializationRotatorEntity.js").default} SimpleSerializationRotatorEntity
 * @typedef {import("./packages/parser/src/entity/SimpleSerializationVector2DEntity.js").default} SimpleSerializationVector2DEntity
 * @typedef {import("./packages/parser/src/entity/SimpleSerializationVectorEntity.js").default} SimpleSerializationVectorEntity
 * @typedef {import("./packages/parser/src/entity/StringEntity.js").default} StringEntity
 * @typedef {import("./packages/parser/src/entity/SymbolEntity.js").default} SymbolEntity
 * @typedef {import("./packages/parser/src/entity/TerminalTypeEntity.js").default} TerminalTypeEntity
 * @typedef {import("./packages/parser/src/entity/UnknownKeysEntity.js").default} UnknownKeysEntity
 * @typedef {import("./packages/parser/src/entity/UnknownPinEntity.js").default} UnknownPinEntity
 * @typedef {import("./packages/parser/src/entity/VariableReferenceEntity.js").default} VariableReferenceEntity
 * @typedef {import("./packages/parser/src/entity/Vector2DEntity.js").default} Vector2DEntity
 * @typedef {import("./packages/parser/src/entity/Vector4DEntity.js").default} Vector4DEntity
 * @typedef {import("./packages/parser/src/entity/VectorEntity.js").default} VectorEntity
 * @typedef {import("./packages/lit/src/input/IInput.js").default} IInput
 * @typedef {import("./packages/lit/src/input/keyboard/KeyboardShortcut.js").default} KeyboardShortcut
 * @typedef {import("./packages/lit/src/input/mouse/MouseMoveDraggable.js").default} MouseMoveDraggable
 * @typedef {import("./packages/lit/src/template/BlueprintTemplate.js").default} BlueprintTemplate
 * @typedef {import("./packages/lit/src/template/ColorHandlerTemplate.js").default} ColorHandlerTemplate
 * @typedef {import("./packages/lit/src/template/ColorSliderTemplate.js").default} ColorSliderTemplate
 * @typedef {import("./packages/lit/src/template/IDraggableControlTemplate.js").default} IDraggableControlTemplate
 * @typedef {import("./packages/lit/src/template/IDraggablePositionedTemplate.js").default} IDraggablePositionedTemplate
 * @typedef {import("./packages/lit/src/template/IDraggableTemplate.js").default} IDraggableTemplate
 * @typedef {import("./packages/lit/src/template/IFromToPositionedTemplate.js").default} IFromToPositionedTemplate
 * @typedef {import("./packages/lit/src/template/IResizeableTemplate.js").default} IResizeableTemplate
 * @typedef {import("./packages/lit/src/template/ISelectableDraggableTemplate.js").default} ISelectableDraggableTemplate
 * @typedef {import("./packages/lit/src/template/ITemplate.js").default} ITemplate
 * @typedef {import("./packages/lit/src/template/LinkTemplate.js").default} LinkTemplate
 * @typedef {import("./packages/lit/src/template/node/CommentNodeTemplate.js").default} CommentNodeTemplate
 * @typedef {import("./packages/lit/src/template/node/EventNodeTemplate.js").default} EventNodeTemplate
 * @typedef {import("./packages/lit/src/template/node/KnotNodeTemplate.js").default} KnotNodeTemplate
 * @typedef {import("./packages/lit/src/template/node/NodeTemplate.js").default} NodeTemplate
 * @typedef {import("./packages/lit/src/template/node/VariableAccessNodeTemplate.js").default} VariableAccessNodeTemplate
 * @typedef {import("./packages/lit/src/template/node/VariableConversionNodeTemplate.js").default} VariableConversionNodeTemplate
 * @typedef {import("./packages/lit/src/template/node/VariableMangementNodeTemplate.js").default} VariableMangementNodeTemplate
 * @typedef {import("./packages/lit/src/template/node/VariableOperationNodeTemplate.js").default} VariableOperationNodeTemplate
 * @typedef {import("./packages/lit/src/template/pin/BoolPinTemplate.js").default} BoolPinTemplate
 * @typedef {import("./packages/lit/src/template/pin/DropdownTemplate.js").default} DropdownTemplate
 * @typedef {import("./packages/lit/src/template/pin/EnumPinTemplate.js").default} EnumPinTemplate
 * @typedef {import("./packages/lit/src/template/pin/ExecPinTemplate.js").default} ExecPinTemplate
 * @typedef {import("./packages/lit/src/template/pin/IInputPinTemplate.js").default} IInputPinTemplate
 * @typedef {import("./packages/lit/src/template/pin/InputTemplate.js").default} InputTemplate
 * @typedef {import("./packages/lit/src/template/pin/Int64PinTemplate.js").default} Int64PinTemplate
 * @typedef {import("./packages/lit/src/template/pin/IntPinTemplate.js").default} IntPinTemplate
 * @typedef {import("./packages/lit/src/template/pin/INumericPinTemplate.js").default} INumericPinTemplate
 * @typedef {import("./packages/lit/src/template/pin/KnotPinTemplate.js").default} KnotPinTemplate
 * @typedef {import("./packages/lit/src/template/pin/LinearColorPinTemplate.js").default} LinearColorPinTemplate
 * @typedef {import("./packages/lit/src/template/pin/MinimalPinTemplate.js").default} MinimalPinTemplate
 * @typedef {import("./packages/lit/src/template/pin/NamePinTemplate.js").default} NamePinTemplate
 * @typedef {import("./packages/lit/src/template/pin/RealPinTemplate.js").default} RealPinTemplate
 * @typedef {import("./packages/lit/src/template/pin/ReferencePinTemplate.js").default} ReferencePinTemplate
 * @typedef {import("./packages/lit/src/template/pin/RotatorPinTemplate.js").default} RotatorPinTemplate
 * @typedef {import("./packages/lit/src/template/pin/StringPinTemplate.js").default} StringPinTemplate
 * @typedef {import("./packages/lit/src/template/pin/Vector2DPinTemplate.js").default} Vector2DPinTemplate
 * @typedef {import("./packages/lit/src/template/pin/VectorPinTemplate.js").default} VectorPinTemplate
 * @typedef {import("./packages/lit/src/template/SelectorTemplate.js").default} SelectorTemplate
 * @typedef {import("./packages/lit/src/template/window/ColorPickerWindowTemplate.js").default} ColorPickerWindowTemplate
 * @typedef {import("./packages/lit/src/template/window/WindowTemplate.js").default} WindowTemplate
 * @typedef {import("lit").CSSResult} CSSResult
 * @typedef {import("lit").PropertyValues} PropertyValues
 * @typedef {import("lit").TemplateResult} TemplateResult
 * @typedef {typeof import("./packages/parser/src/entity/ComputedTypeEntity.js").default} ComputedTypeEntityConstructor
 */
/**
 * @template T
 * @typedef {{
 *     evaluate<R, Arg>(pageFunction: (node: T, arg: Arg) => R, arg: Arg, options?: { timeout?: number }): Promise<R>
 *     evaluate<R>(pageFunction: (node: T) => R, options?: { timeout?: number }): Promise<R>
 * } & import("@playwright/test").Locator} Locator
 */
