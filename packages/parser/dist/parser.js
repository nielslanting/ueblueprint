var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __reflectGet = Reflect.get;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __superGet = (cls, obj, key) => __reflectGet(__getProtoOf(cls), key, obj);
import P from "parsernostrum";
class CSSValue {
  /** @param {String} cssText */
  constructor(cssText = "") {
    this.cssText = cssText;
  }
  toString() {
    return this.cssText;
  }
}
const cssValue = (strings, ...values) => new CSSValue(strings.reduce((acc, cur, index) => acc + cur + (values[index] ?? ""), ""));
class Configuration {
  static VERSION = "2.0.0";
  static nodeColors = {
    black: cssValue`20, 20, 20`,
    blue: cssValue`84, 122, 156`,
    darkBlue: cssValue`32, 80, 128`,
    darkerBlue: cssValue`18, 18, 130`,
    darkTurquoise: cssValue`19, 100, 137`,
    gray: cssValue`150,150,150`,
    green: cssValue`95, 129, 90`,
    intenseGreen: cssValue`42, 140, 42`,
    lime: cssValue`150, 160, 30`,
    red: cssValue`151, 33, 32`,
    turquoise: cssValue`46, 104, 106`,
    violet: cssValue`126, 28, 150`,
    yellow: cssValue`148, 116, 24`
  };
  static alphaPattern = "repeating-conic-gradient(#7c8184 0% 25%, #c2c3c4 0% 50%) 50% / 10px 10px";
  static colorDragEventName = "ueb-color-drag";
  static colorPickEventName = "ueb-color-pick";
  static colorWindowEventName = "ueb-color-window";
  static colorWindowName = "Color Picker";
  static defaultCommentHeight = 96;
  static defaultCommentWidth = 400;
  static distanceThreshold = 20;
  // px
  static dragEventName = "ueb-drag";
  static dragGeneralEventName = "ueb-drag-general";
  static edgeScrollThreshold = 50;
  static editTextEventName = {
    begin: "ueb-edit-text-begin",
    end: "ueb-edit-text-end"
  };
  static expandGridSize = 400;
  static focusEventName = {
    begin: "blueprint-focus",
    end: "blueprint-unfocus"
  };
  static fontSize = cssValue`13px`;
  static gridExpandThreshold = 0.25;
  // remaining size factor threshold to cause an expansion event
  static gridLineWidth = 1;
  // px
  static gridSet = 8;
  static gridShrinkThreshold = 4;
  // exceding size factor threshold to cause a shrink event
  static gridSize = 16;
  // px
  static hexColorRegex = /^\s*#(?<r>[0-9a-fA-F]{2})(?<g>[0-9a-fA-F]{2})(?<b>[0-9a-fA-F]{2})([0-9a-fA-F]{2})?|#(?<rs>[0-9a-fA-F])(?<gs>[0-9a-fA-F])(?<bs>[0-9a-fA-F])\s*$/;
  static indentation = "   ";
  static keysSeparator = /[\.\(\)]/;
  static knotOffset = [-Configuration.gridSize, -0.5 * Configuration.gridSize];
  static lineTracePattern = /LineTrace(Single|Multi)(\w*)/;
  static linkCurveHeight = 15;
  // px
  static linkCurveWidth = 80;
  // px
  static linkMinWidth = 100;
  // px
  static nameRegexSpaceReplacement = new RegExp(
    // Leading K2_ or K2Node_ is removed
    "^K2(?:[Nn]ode)?_|(?<=[a-z])(?=[A-Z0-9])|(?<=[A-Z])(?<!U(?=Vs(?![a-z])))(?<!V(?=[23](?![0-9])))(?<!T(?=2d(?![a-z])))(?<!BT)(?=[A-Z][a-z]|[0-9])|(?<=[0-9])(?<![23](?=[dD](?![a-z])))(?=[a-zA-Z])|\\s*_+\\s*|\\s{2,}",
    "g"
  );
  /**
   * @param {Number} start
   * @param {Number} c1
   * @param {Number} c2
   */
  static linkRightSVGPath = (start, c1, c2, arc = false) => {
    const end = 100 - start;
    const mid = arc ? 50 + (c2 - start) : 50;
    const fin = arc ? end + c1 - start : end - c1 + start;
    return `M ${start} 0 C ${c1.toFixed(2)} 0, ${c2.toFixed(2)} 0, ${mid.toFixed(2)} 50 S ${fin.toFixed(2)} 100, ${end.toFixed(3)} 100`;
  };
  static maxZoom = 7;
  static minZoom = -12;
  static mouseClickButton = 0;
  static mouseRightClickButton = 2;
  static mouseWheelZoomThreshold = 80;
  static nodeDragEventName = "ueb-node-drag";
  static nodeDragGeneralEventName = "ueb-node-drag-general";
  static nodeRadius = 8;
  // px
  static nodeTitle = (name, counter) => `${name}_${counter}`;
  static nodeUpdateEventName = "ueb-node-update";
  static paths = {
    actorBoundEvent: "/Script/BlueprintGraph.K2Node_ActorBoundEvent",
    addDelegate: "/Script/BlueprintGraph.K2Node_AddDelegate",
    ambientSound: "/Script/Engine.AmbientSound",
    asyncAction: "/Script/BlueprintGraph.K2Node_AsyncAction",
    blueprint: "/Script/Engine.Blueprint",
    blueprintGameplayTagLibrary: "/Script/GameplayTags.BlueprintGameplayTagLibrary",
    blueprintMapLibrary: "/Script/Engine.BlueprintMapLibrary",
    blueprintSetLibrary: "/Script/Engine.BlueprintSetLibrary",
    callArrayFunction: "/Script/BlueprintGraph.K2Node_CallArrayFunction",
    callDelegate: "/Script/BlueprintGraph.K2Node_CallDelegate",
    callFunction: "/Script/BlueprintGraph.K2Node_CallFunction",
    clearDelegate: "/Script/BlueprintGraph.K2Node_ClearDelegate",
    comment: "/Script/UnrealEd.EdGraphNode_Comment",
    commutativeAssociativeBinaryOperator: "/Script/BlueprintGraph.K2Node_CommutativeAssociativeBinaryOperator",
    componentBoundEvent: "/Script/BlueprintGraph.K2Node_ComponentBoundEvent",
    createDelegate: "/Script/BlueprintGraph.K2Node_CreateDelegate",
    customEvent: "/Script/BlueprintGraph.K2Node_CustomEvent",
    doN: "/Engine/EditorBlueprintResources/StandardMacros.StandardMacros:Do N",
    doOnce: "/Engine/EditorBlueprintResources/StandardMacros.StandardMacros:DoOnce",
    dynamicCast: "/Script/BlueprintGraph.K2Node_DynamicCast",
    eAttachmentRule: "/Script/Engine.EAttachmentRule",
    edGraph: "/Script/Engine.EdGraph",
    eDrawDebugTrace: "/Script/Engine.EDrawDebugTrace",
    eMaterialSamplerType: "/Script/Engine.EMaterialSamplerType",
    eNiagara_Float4Channel: "/Niagara/Enums/ENiagara_Float4Channel.ENiagara_Float4Channel",
    enum: "/Script/CoreUObject.Enum",
    enumLiteral: "/Script/BlueprintGraph.K2Node_EnumLiteral",
    eSamplerSourceMode: "/Script/Engine.ESamplerSourceMode",
    eSearchCase: "/Script/CoreUObject.ESearchCase",
    eSearchDir: "/Script/CoreUObject.ESearchDir",
    eSpawnActorCollisionHandlingMethod: "/Script/Engine.ESpawnActorCollisionHandlingMethod",
    eTextureMipValueMode: "/Script/Engine.ETextureMipValueMode",
    eTraceTypeQuery: "/Script/Engine.ETraceTypeQuery",
    event: "/Script/BlueprintGraph.K2Node_Event",
    eWorldPositionIncludedOffsets: "/Script/Engine.EWorldPositionIncludedOffsets",
    executionSequence: "/Script/BlueprintGraph.K2Node_ExecutionSequence",
    flipflop: "/Engine/EditorBlueprintResources/StandardMacros.StandardMacros:FlipFlop",
    forEachElementInEnum: "/Script/BlueprintGraph.K2Node_ForEachElementInEnum",
    forEachLoop: "/Engine/EditorBlueprintResources/StandardMacros.StandardMacros:ForEachLoop",
    forEachLoopWithBreak: "/Engine/EditorBlueprintResources/StandardMacros.StandardMacros:ForEachLoopWithBreak",
    forLoop: "/Engine/EditorBlueprintResources/StandardMacros.StandardMacros:ForLoop",
    forLoopWithBreak: "/Engine/EditorBlueprintResources/StandardMacros.StandardMacros:ForLoopWithBreak",
    functionEntry: "/Script/BlueprintGraph.K2Node_FunctionEntry",
    functionResult: "/Script/BlueprintGraph.K2Node_FunctionResult",
    gameplayTag: "/Script/GameplayTags.GameplayTag",
    getInputAxisKeyValue: "/Script/BlueprintGraph.K2Node_GetInputAxisKeyValue",
    ifThenElse: "/Script/BlueprintGraph.K2Node_IfThenElse",
    inputAxisKeyEvent: "/Script/BlueprintGraph.K2Node_InputAxisKeyEvent",
    inputDebugKey: "/Script/InputBlueprintNodes.K2Node_InputDebugKey",
    inputKey: "/Script/BlueprintGraph.K2Node_InputKey",
    inputVectorAxisEvent: "/Script/BlueprintGraph.K2Node_InputVectorAxisEvent",
    isValid: "/Engine/EditorBlueprintResources/StandardMacros.StandardMacros:IsValid",
    kismetArrayLibrary: "/Script/Engine.KismetArrayLibrary",
    kismetMathLibrary: "/Script/Engine.KismetMathLibrary",
    kismetStringLibrary: "/Script/Engine.KismetStringLibrary",
    knot: "/Script/BlueprintGraph.K2Node_Knot",
    linearColor: "/Script/CoreUObject.LinearColor",
    literal: "/Script/BlueprintGraph.K2Node_Literal",
    macro: "/Script/BlueprintGraph.K2Node_MacroInstance",
    makeArray: "/Script/BlueprintGraph.K2Node_MakeArray",
    makeMap: "/Script/BlueprintGraph.K2Node_MakeMap",
    makeSet: "/Script/BlueprintGraph.K2Node_MakeSet",
    makeStruct: "/Script/BlueprintGraph.K2Node_MakeStruct",
    materialExpressionComponentMask: "/Script/Engine.MaterialExpressionComponentMask",
    materialExpressionConstant: "/Script/Engine.MaterialExpressionConstant",
    materialExpressionConstant2Vector: "/Script/Engine.MaterialExpressionConstant2Vector",
    materialExpressionConstant3Vector: "/Script/Engine.MaterialExpressionConstant3Vector",
    materialExpressionConstant4Vector: "/Script/Engine.MaterialExpressionConstant4Vector",
    materialExpressionFunctionInput: "/Script/Engine.MaterialExpressionFunctionInput",
    materialExpressionLogarithm: "/Script/InterchangeImport.MaterialExpressionLogarithm",
    materialExpressionLogarithm10: "/Script/Engine.MaterialExpressionLogarithm10",
    materialExpressionLogarithm2: "/Script/Engine.MaterialExpressionLogarithm2",
    materialExpressionMaterialFunctionCall: "/Script/Engine.MaterialExpressionMaterialFunctionCall",
    materialExpressionSquareRoot: "/Script/Engine.MaterialExpressionSquareRoot",
    materialExpressionSubtract: "/Script/Engine.MaterialExpressionSubtract",
    materialExpressionTextureCoordinate: "/Script/Engine.MaterialExpressionTextureCoordinate",
    materialExpressionTextureSample: "/Script/Engine.MaterialExpressionTextureSample",
    materialExpressionWorldPosition: "/Script/Engine.MaterialExpressionWorldPosition",
    materialGraphNode: "/Script/UnrealEd.MaterialGraphNode",
    materialGraphNodeComment: "/Script/UnrealEd.MaterialGraphNode_Comment",
    metasoundEditorGraphExternalNode: "/Script/MetasoundEditor.MetasoundEditorGraphExternalNode",
    multiGate: "/Script/BlueprintGraph.K2Node_MultiGate",
    niagaraBool: "/Script/Niagara.NiagaraBool",
    niagaraClipboardContent: "/Script/NiagaraEditor.NiagaraClipboardContent",
    niagaraDataInterfaceCollisionQuery: "/Script/Niagara.NiagaraDataInterfaceCollisionQuery",
    niagaraDataInterfaceCurlNoise: "/Script/Niagara.NiagaraDataInterfaceCurlNoise",
    niagaraDataInterfaceVolumeTexture: "/Script/Niagara.NiagaraDataInterfaceVolumeTexture",
    niagaraFloat: "/Script/Niagara.NiagaraFloat",
    niagaraInt32: "/Script/Niagara.NiagaraInt32",
    niagaraNodeConvert: "/Script/NiagaraEditor.NiagaraNodeConvert",
    niagaraNodeFunctionCall: "/Script/NiagaraEditor.NiagaraNodeFunctionCall",
    niagaraNodeInput: "/Script/NiagaraEditor.NiagaraNodeInput",
    niagaraNodeOp: "/Script/NiagaraEditor.NiagaraNodeOp",
    niagaraParameterMap: "/Script/Niagara.NiagaraParameterMap",
    niagaraPosition: "/Script/Niagara.NiagaraPosition",
    pawn: "/Script/Engine.Pawn",
    pcgEditorGraphNode: "/Script/PCGEditor.PCGEditorGraphNode",
    pcgEditorGraphNodeInput: "/Script/PCGEditor.PCGEditorGraphNodeInput",
    pcgEditorGraphNodeOutput: "/Script/PCGEditor.PCGEditorGraphNodeOutput",
    pcgHiGenGridSizeSettings: "/Script/PCG.PCGHiGenGridSizeSettings",
    pcgSubgraphSettings: "/Script/PCG.PCGSubgraphSettings",
    promotableOperator: "/Script/BlueprintGraph.K2Node_PromotableOperator",
    quat4f: "/Script/CoreUObject.Quat4f",
    removeDelegate: "/Script/BlueprintGraph.K2Node_RemoveDelegate",
    reverseForEachLoop: "/Engine/EditorBlueprintResources/StandardMacros.StandardMacros:ReverseForEachLoop",
    rotator: "/Script/CoreUObject.Rotator",
    select: "/Script/BlueprintGraph.K2Node_Select",
    self: "/Script/BlueprintGraph.K2Node_Self",
    slateBlueprintLibrary: "/Script/UMG.SlateBlueprintLibrary",
    soundCueGraphNode: "/Script/AudioEditor.SoundCueGraphNode",
    soundNodeWavePlayer: "/Script/Engine.SoundNodeWavePlayer",
    spawnActorFromClass: "/Script/BlueprintGraph.K2Node_SpawnActorFromClass",
    switchEnum: "/Script/BlueprintGraph.K2Node_SwitchEnum",
    switchGameplayTag: "/Script/GameplayTagsEditor.GameplayTagsK2Node_SwitchGameplayTag",
    switchInteger: "/Script/BlueprintGraph.K2Node_SwitchInteger",
    switchName: "/Script/BlueprintGraph.K2Node_SwitchName",
    switchString: "/Script/BlueprintGraph.K2Node_SwitchString",
    timeline: "/Script/BlueprintGraph.K2Node_Timeline",
    timeManagementBlueprintLibrary: "/Script/TimeManagement.TimeManagementBlueprintLibrary",
    transform: "/Script/CoreUObject.Transform",
    typedElementHandleLibrary: "/Script/TypedElementFramework.TypedElementHandleLibrary",
    userDefinedEnum: "/Script/Engine.UserDefinedEnum",
    variableGet: "/Script/BlueprintGraph.K2Node_VariableGet",
    variableSet: "/Script/BlueprintGraph.K2Node_VariableSet",
    vector: "/Script/CoreUObject.Vector",
    vector2D: "/Script/CoreUObject.Vector2D",
    vector2f: "/Script/CoreUObject.Vector2f",
    vector3f: "/Script/CoreUObject.Vector3f",
    vector4f: "/Script/CoreUObject.Vector4f",
    whileLoop: "/Engine/EditorBlueprintResources/StandardMacros.StandardMacros:WhileLoop"
  };
  static pinInputWrapWidth = 145;
  // px
  static pinUpdateEventName = "ueb-pin-update";
  static removeEventName = "ueb-element-delete";
  static scale = {
    [-12]: 0.133333,
    [-11]: 0.166666,
    [-10]: 0.2,
    [-9]: 0.233333,
    [-8]: 0.266666,
    [-7]: 0.3,
    [-6]: 0.333333,
    [-5]: 0.375,
    [-4]: 0.5,
    [-3]: 0.675,
    [-2]: 0.75,
    [-1]: 0.875,
    0: 1,
    1: 1.25,
    2: 1.375,
    3: 1.5,
    4: 1.675,
    5: 1.75,
    6: 1.875,
    7: 2
  };
  static smoothScrollTime = 1e3;
  // ms
  static stringEscapedCharacters = /["\\]/g;
  // Try to remove
  static subObjectAttributeNamePrefix = "#SubObject";
  /** @param {ObjectEntity} objectEntity */
  static subObjectAttributeNameFromEntity = (objectEntity, nameOnly = false) => this.subObjectAttributeNamePrefix + (!nameOnly && objectEntity.Class ? `_${objectEntity.Class.type}` : "") + "_" + objectEntity.Name;
  /** @param {ObjectReferenceEntity} objectReferenceEntity */
  static subObjectAttributeNameFromReference = (objectReferenceEntity, nameOnly = false) => this.subObjectAttributeNamePrefix + (!nameOnly ? "_" + objectReferenceEntity.type : "") + "_" + objectReferenceEntity.path;
  static subObjectAttributeNameFromName = (name) => this.subObjectAttributeNamePrefix + "_" + name;
  static switchTargetPattern = /\/Script\/[\w\.\/\:]+K2Node_Switch([A-Z]\w+)+/;
  static trackingMouseEventName = {
    begin: "ueb-tracking-mouse-begin",
    end: "ueb-tracking-mouse-end"
  };
  static unescapedBackslash = new RegExp("(?<=(?:[^\\\\]|^)(?:\\\\\\\\)*)\\\\(?!\\\\)");
  // Try to remove
  static windowApplyEventName = "ueb-window-apply";
  static windowApplyButtonText = "OK";
  static windowCancelEventName = "ueb-window-cancel";
  static windowCancelButtonText = "Cancel";
  static windowCloseEventName = "ueb-window-close";
  static CommonEnums = {
    [this.paths.eAttachmentRule]: [
      "KeepRelative",
      "KeepWorld",
      "SnapToTarget"
    ],
    [this.paths.eDrawDebugTrace]: ["None", "ForOneFrame", "ForDuration", "Persistent"],
    [this.paths.eMaterialSamplerType]: [
      "Color",
      "Grayscale",
      "Alpha",
      "Normal",
      "Masks",
      "Distance Field Font",
      "Linear Color",
      "Linear Grayscale",
      "Data",
      "External",
      "Virtual Color",
      "Virtual Grayscale",
      "Virtual Alpha",
      "Virtual Normal",
      "Virtual Mask",
      "Virtual Linear Color",
      "Virtual Linear Grayscal"
    ],
    [this.paths.eNiagara_Float4Channel]: [
      ["NewEnumerator0", "R"],
      ["NewEnumerator1", "G"],
      ["NewEnumerator2", "B"],
      ["NewEnumerator3", "A"]
    ],
    [this.paths.eSamplerSourceMode]: ["From texture asset", "Shared: Wrap", "Shared: Clamp", "Hidden"],
    [this.paths.eSearchCase]: ["CaseSensitive", "IgnoreCase"],
    [this.paths.eWorldPositionIncludedOffsets]: [
      "Absolute World Position (Including Material Shader Offsets)",
      "Absolute World Position (Excluding Material Shader Offsets)",
      "Camera Relative World Position (Including Material Shader Offsets)",
      "Camera Relative World Position (Excluding Material Shader Offsets)"
    ],
    [this.paths.eSearchDir]: ["FromStart", "FromEnd"],
    [this.paths.eSpawnActorCollisionHandlingMethod]: [
      ["Undefined", "Default"],
      ["AlwaysSpawn", "Always Spawn, Ignore Collisions"],
      ["AdjustIfPossibleButAlwaysSpawn", "Try To Adjust Location, But Always Spawn"],
      ["AdjustIfPossibleButDontSpawnIfColliding", "Try To Adjust Location, Don't Spawn If Still Colliding"],
      ["DontSpawnIfColliding", "Do Not Spawn"]
    ],
    [this.paths.eTextureMipValueMode]: [
      "None (use computed mip level)",
      "MipLevel (absolute, 0 is full resolution)",
      "MipBias (relative to the computed mip level)",
      "Derivative (explicit derivative to compute mip level)"
    ],
    [this.paths.eTraceTypeQuery]: [["TraceTypeQuery1", "Visibility"], ["TraceTypeQuery2", "Camera"]]
  };
  static ModifierKeys = [
    "Ctrl",
    "Shift",
    "Alt",
    "Meta"
  ];
  static rgba = ["R", "G", "B", "A"];
  static Keys = {
    /* UE name: JS name */
    "Backspace": "Backspace",
    "Tab": "Tab",
    "LeftControl": "ControlLeft",
    "RightControl": "ControlRight",
    "LeftShift": "ShiftLeft",
    "RightShift": "ShiftRight",
    "LeftAlt": "AltLeft",
    "RightAlt": "AltRight",
    "Enter": "Enter",
    "Pause": "Pause",
    "CapsLock": "CapsLock",
    "Escape": "Escape",
    "Space": "Space",
    "PageUp": "PageUp",
    "PageDown": "PageDown",
    "End": "End",
    "Home": "Home",
    "ArrowLeft": "ArrowLeft",
    "ArrowUp": "ArrowUp",
    "ArrowRight": "ArrowRight",
    "ArrowDown": "ArrowDown",
    "PrintScreen": "PrintScreen",
    "Insert": "Insert",
    "Delete": "Delete",
    "Zero": "Digit0",
    "One": "Digit1",
    "Two": "Digit2",
    "Three": "Digit3",
    "Four": "Digit4",
    "Five": "Digit5",
    "Six": "Digit6",
    "Seven": "Digit7",
    "Eight": "Digit8",
    "Nine": "Digit9",
    "A": "KeyA",
    "B": "KeyB",
    "C": "KeyC",
    "D": "KeyD",
    "E": "KeyE",
    "F": "KeyF",
    "G": "KeyG",
    "H": "KeyH",
    "I": "KeyI",
    "K": "KeyK",
    "L": "KeyL",
    "M": "KeyM",
    "N": "KeyN",
    "O": "KeyO",
    "P": "KeyP",
    "Q": "KeyQ",
    "R": "KeyR",
    "S": "KeyS",
    "T": "KeyT",
    "U": "KeyU",
    "V": "KeyV",
    "W": "KeyW",
    "X": "KeyX",
    "Y": "KeyY",
    "Z": "KeyZ",
    "NumPadZero": "Numpad0",
    "NumPadOne": "Numpad1",
    "NumPadTwo": "Numpad2",
    "NumPadThree": "Numpad3",
    "NumPadFour": "Numpad4",
    "NumPadFive": "Numpad5",
    "NumPadSix": "Numpad6",
    "NumPadSeven": "Numpad7",
    "NumPadEight": "Numpad8",
    "NumPadNine": "Numpad9",
    "Multiply": "NumpadMultiply",
    "Add": "NumpadAdd",
    "Subtract": "NumpadSubtract",
    "Decimal": "NumpadDecimal",
    "Divide": "NumpadDivide",
    "F1": "F1",
    "F2": "F2",
    "F3": "F3",
    "F4": "F4",
    "F5": "F5",
    "F6": "F6",
    "F7": "F7",
    "F8": "F8",
    "F9": "F9",
    "F10": "F10",
    "F11": "F11",
    "F12": "F12",
    "NumLock": "NumLock",
    "ScrollLock": "ScrollLock"
  };
}
class Utility {
  /** @param {Number} value */
  static clamp(value, min = -Infinity, max = Infinity) {
    return Math.min(Math.max(value, min), max);
  }
  /** @param {HTMLElement} element */
  static getScale(element) {
    const scale = element.blueprint?.getScale() ?? getComputedStyle(element).getPropertyValue("--ueb-scale");
    return scale != "" ? parseFloat(scale) : 1;
  }
  /**
   * @param {Number} num
   * @param {Number} decimals
   */
  static minDecimals(num, decimals = 1, epsilon = 1e-8) {
    const powered = num * 10 ** decimals;
    if (Math.abs(powered % 1) > epsilon) {
      return num.toString();
    }
    return num.toFixed(decimals);
  }
  /**
   * @param {Number} num
   * @param {Number} decimals
   */
  static roundDecimals(num, decimals = 1) {
    const power = 10 ** decimals;
    return Math.round(num * power) / power;
  }
  /** @param {Number} num */
  static printExponential(num) {
    if (num == Number.POSITIVE_INFINITY) {
      return "inf";
    } else if (num == Number.NEGATIVE_INFINITY) {
      return "-inf";
    }
    const int = Math.round(num);
    if (int >= 1e3) {
      const exp = Math.floor(Math.log10(int));
      const dec = Math.round(num / 10 ** (exp - 2)) / 100;
      return `${dec}e+${exp < 10 ? "0" : ""}${exp}`;
    }
    const intPart = Math.floor(num);
    if (intPart == 0) {
      return num.toString();
    }
    return this.roundDecimals(num, Math.max(0, 3 - Math.floor(num).toString().length)).toString();
  }
  /**
   * @param {Number} a
   * @param {Number} b
   */
  static approximatelyEqual(a, b, epsilon = 1e-8) {
    return !(Math.abs(a - b) > epsilon);
  }
  /**
   * @param {Coordinates} viewportLocation
   * @param {HTMLElement} movementElement
   */
  static convertLocation(viewportLocation, movementElement, ignoreScale = false) {
    const scaleCorrection = ignoreScale ? 1 : 1 / Utility.getScale(movementElement);
    const bounding = movementElement.getBoundingClientRect();
    const location = (
      /** @type {Coordinates} */
      [
        Math.round((viewportLocation[0] - bounding.x) * scaleCorrection),
        Math.round((viewportLocation[1] - bounding.y) * scaleCorrection)
      ]
    );
    return location;
  }
  /**
   * @param {IEntity} entity
   * @param {String} key
   * @returns {Boolean}
   */
  static isSerialized(entity, key) {
    return entity["attributes"]?.[key]?.serialized ?? entity.constructor["attributes"]?.[key]?.serialized ?? false;
  }
  /** @param {String[]} keys */
  static objectGet(target, keys, defaultValue = void 0) {
    if (target === void 0) {
      return void 0;
    }
    if (!(keys instanceof Array)) {
      throw new TypeError("UEBlueprint: Expected keys to be an array");
    }
    if (keys.length == 0 || !(keys[0] in target) || target[keys[0]] === void 0) {
      return defaultValue;
    }
    if (keys.length == 1) {
      return target[keys[0]];
    }
    return Utility.objectGet(target[keys[0]], keys.slice(1), defaultValue);
  }
  /**
   * @param {String[]} keys
   * @returns {Boolean}
   */
  static objectSet(target, keys, value, defaultDictType = Object) {
    if (!(keys instanceof Array)) {
      throw new TypeError("Expected keys to be an array.");
    }
    if (keys.length == 1) {
      if (keys[0] in target || target[keys[0]] === void 0) {
        target[keys[0]] = value;
        return true;
      }
    } else if (keys.length > 0) {
      if (!(target[keys[0]] instanceof Object)) {
        target[keys[0]] = new defaultDictType();
      }
      return Utility.objectSet(target[keys[0]], keys.slice(1), value, defaultDictType);
    }
    return false;
  }
  /**
   * @param {Number} x
   * @param {Number} y
   * @param {Number} gridSize
   * @returns {Coordinates}
   */
  static snapToGrid(x, y, gridSize) {
    if (gridSize === 1) {
      return [x, y];
    }
    return [
      gridSize * Math.floor(x / gridSize),
      gridSize * Math.floor(y / gridSize)
    ];
  }
  /**
   * @template T
   * @param {T[]} reference
   * @param {T[]} additional
   * @param {(v: T) => void} adding - Process added element
   * @param {(l: T, r: T) => Boolean} predicate
   * @returns {T[]}
   */
  static mergeArrays(reference = [], additional = [], predicate = (l, r) => l == r, adding = (v) => {
  }) {
    let result = [];
    reference = [...reference];
    additional = [...additional];
    restart:
      while (true) {
        for (let j = 0; j < additional.length; ++j) {
          for (let i = 0; i < reference.length; ++i) {
            if (predicate(reference[i], additional[j])) {
              result.push(
                ...reference.splice(0, i),
                ...additional.splice(0, j).map((v) => (adding(v), v)),
                ...reference.splice(0, 1)
              );
              additional.shift();
              continue restart;
            }
          }
        }
        break restart;
      }
    result.push(...reference);
    result.push(
      ...additional.filter((vb) => !result.some((vr) => predicate(vr, vb))).map((v, k) => (adding(v), v))
    );
    return result;
  }
  /** @param {String} value */
  static escapeNewlines(value) {
    return value.replaceAll("\n", "\\n").replaceAll("	", "\\t");
  }
  /** @param {String} value */
  static escapeString(value, inline = true) {
    let result = value.replaceAll(new RegExp(`(${Configuration.stringEscapedCharacters.source})`, "g"), "\\$1");
    if (inline) {
      result = result.replaceAll("\n", "\\n").replaceAll("	", "\\t");
    }
    return result;
  }
  /** @param {String} value */
  static unescapeString(value) {
    return value.replaceAll(new RegExp(Configuration.unescapedBackslash.source + "t", "g"), "	").replaceAll(new RegExp(Configuration.unescapedBackslash.source + "n", "g"), "\n").replaceAll(new RegExp(`\\\\(${Configuration.stringEscapedCharacters.source})`, "g"), "$1");
  }
  /** @param {String} value */
  static clearHTMLWhitespace(value) {
    return value.replaceAll("&nbsp;", " ").replaceAll(/<br\s*\/>|<br>/g, "\n").replaceAll(/(\<!--.*?\-->)/g, "");
  }
  /** @param {String} value */
  static encodeHTMLWhitespace(value) {
    return value.replaceAll(" ", " ");
  }
  /** @param {String} value */
  static capitalFirstLetter(value) {
    if (value.length === 0) {
      return value;
    }
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  /** @param {String} value */
  static formatStringName(value = "") {
    return value.replace(/^\s*b(?=[A-Z])/, "").replaceAll(Configuration.nameRegexSpaceReplacement, " ").trim().split(" ").map((v) => Utility.capitalFirstLetter(v)).join(" ");
  }
  /** @param {String} value */
  static getIdFromReference(value) {
    return value.replace(/(?:.+\.)?([^\.]+)$/, "$1").replaceAll(new RegExp("(?<=[a-z\\d])(?=[A-Z])|(?<=[a-zA-Z])(?=\\d)|(?<=[A-Z]{2})(?=[A-Z][a-z])", "g"), "-").toLowerCase();
  }
  /** @param {String} pathValue */
  static getNameFromPath(pathValue, dropCounter = false) {
    const regex = dropCounter ? /([^\.\/]+?)(?:_\d+)$/ : /([^\.\/]+)$/;
    return pathValue.match(regex)?.[1] ?? "";
  }
  /**
   * @param {Number} x
   * @param {Number} y
   * @returns {Coordinates}
   */
  static getPolarCoordinates(x, y, positiveTheta = false) {
    let theta = Math.atan2(y, x);
    if (positiveTheta && theta < 0) {
      theta = 2 * Math.PI + theta;
    }
    return [
      Math.sqrt(x * x + y * y),
      theta
    ];
  }
  /**
   * @param {Number} r
   * @param {Number} theta
   * @returns {Coordinates}
   */
  static getCartesianCoordinates(r, theta) {
    return [
      r * Math.cos(theta),
      r * Math.sin(theta)
    ];
  }
  /**
   * @param {Number} begin
   * @param {Number} end
   */
  static range(begin = 0, end = 0, step = end >= begin ? 1 : -1) {
    return Array.from({ length: Math.ceil((end - begin) / step) }, (_, i) => begin + i * step);
  }
  /** @param {String[]} words */
  static getFirstWordOrder(words) {
    return new RegExp(/\s*/.source + words.join(/[^\n]+\n\s*/.source) + /\s*/.source);
  }
  /**
   * @param {HTMLElement} element
   * @param {String} value
   */
  static paste(element, value) {
    const event = new ClipboardEvent("paste", {
      bubbles: true,
      cancelable: true,
      clipboardData: new DataTransfer()
    });
    event.clipboardData.setData("text", value);
    element.dispatchEvent(event);
  }
  /** @param {Blueprint} blueprint */
  static async copy(blueprint) {
    const event = new ClipboardEvent("copy", {
      bubbles: true,
      cancelable: true,
      clipboardData: new DataTransfer()
    });
    blueprint.dispatchEvent(event);
  }
  static animate(from, to, intervalSeconds, callback, acknowledgeRequestAnimationId = (id) => {
  }, timingFunction = (x) => {
    const v = x ** 3.5;
    return v / (v + (1 - x) ** 3.5);
  }) {
    let startTimestamp;
    const doAnimation = (currentTimestamp) => {
      if (startTimestamp === void 0) {
        startTimestamp = currentTimestamp;
      }
      let delta = (currentTimestamp - startTimestamp) / intervalSeconds;
      if (Utility.approximatelyEqual(delta, 1) || delta > 1) {
        delta = 1;
      } else {
        acknowledgeRequestAnimationId(requestAnimationFrame(doAnimation));
      }
      const currentValue = from + (to - from) * timingFunction(delta);
      callback(currentValue);
    };
    acknowledgeRequestAnimationId(requestAnimationFrame(doAnimation));
  }
}
class IEntity {
  /** @type {(v: String) => String} */
  static same = (v) => v;
  /** @type {(entity: IEntity, serialized: String) => String} */
  static notWrapped = (entity, serialized) => serialized;
  /** @type {(entity: IEntity, serialized: String) => String} */
  static defaultWrapped = (entity, serialized) => `${entity.#lookbehind}(${serialized})`;
  static wrap = this.defaultWrapped;
  static attributeSeparator = ",";
  static keySeparator = "=";
  /** @type {(k: String) => String} */
  static printKey = (k) => k;
  static grammar = P.lazy(() => this.createGrammar());
  /** @type {P<IEntity>} */
  static unknownEntityGrammar;
  static unknownEntity;
  /** @type {{ [key: String]: typeof IEntity }} */
  static attributes = {};
  /** @type {String | String[]} */
  static lookbehind = "";
  /** @type {(type: typeof IEntity) => InstanceType<typeof IEntity>} */
  static default;
  static nullable = false;
  static ignored = false;
  // Never serialize or deserialize
  static serialized = false;
  // Value is written and read as string
  static expected = false;
  // Must be there
  static inlined = false;
  // The key is a subobject or array and printed as inlined (A.B=123, A(0)=123)
  /** @type {Boolean} */
  static quoted;
  // Key is serialized with quotes
  static silent = false;
  // Do not serialize if default
  static trailing = false;
  // Add attribute separator after the last attribute when serializing
  /** @type {String[]} */
  #keys;
  get keys() {
    return this.#keys ?? Object.keys(this);
  }
  set keys(value) {
    this.#keys = [...new Set(value)];
  }
  // @ts-expect-error
  #lookbehind = (
    /** @type {String} */
    this.constructor.lookbehind
  );
  get lookbehind() {
    return this.#lookbehind.trim();
  }
  set lookbehind(value) {
    this.#lookbehind = value;
  }
  #ignored = (
    /** @type {typeof IEntity} */
    this.constructor.ignored
  );
  get ignored() {
    return this.#ignored;
  }
  set ignored(value) {
    this.#ignored = value;
  }
  #inlined = (
    /** @type {typeof IEntity} */
    this.constructor.inlined
  );
  get inlined() {
    return this.#inlined;
  }
  set inlined(value) {
    this.#inlined = value;
  }
  #quoted;
  get quoted() {
    return this.#quoted ?? /** @type {typeof IEntity} */
    this.constructor.quoted ?? false;
  }
  set quoted(value) {
    this.#quoted = value;
  }
  /** @type {Boolean} */
  #trailing;
  get trailing() {
    return this.#trailing ?? /** @type {typeof IEntity} */
    this.constructor.trailing ?? false;
  }
  set trailing(value) {
    this.#trailing = value;
  }
  constructor(values = {}) {
    const attributes = (
      /** @type {typeof IEntity} */
      this.constructor.attributes
    );
    const keys = Utility.mergeArrays(
      Object.keys(values),
      Object.entries(attributes).filter(([k, v]) => v.default !== void 0).map(([k, v]) => k)
    );
    for (const key of keys) {
      if (values[key] !== void 0) {
        if (values[key].constructor === Object) {
          values[key] = new (attributes[key] !== void 0 ? attributes[key] : IEntity.unknownEntity)(values[key]);
        }
        const computedEntity = (
          /** @type {ComputedTypeEntityConstructor} */
          attributes[key]
        );
        this[key] = values[key];
        if (computedEntity?.compute) {
          const actualEntity = computedEntity.compute(this);
          const parsed = actualEntity.grammar.run(values[key].toString());
          if (parsed.status) {
            this[key] = parsed.value;
          }
        }
        continue;
      }
      const attribute = attributes[key];
      if (attribute.default !== void 0) {
        this[key] = attribute.default(attribute);
        continue;
      }
    }
  }
  /**
   * @protected
   * @returns {P<IEntity>}
   */
  static createGrammar() {
    return this.unknownEntityGrammar;
  }
  static actualClass() {
    let self = this;
    while (!self.name) {
      self = Object.getPrototypeOf(self);
    }
    return self;
  }
  static className() {
    return this.actualClass().name;
  }
  /**
   * @protected
   * @template {typeof IEntity} T
   * @this {T}
   * @returns {T}
   */
  static asUniqueClass(alwaysCreate = false) {
    let result = this;
    if (this.name.length || alwaysCreate) {
      result = /* @__PURE__ */ (() => class extends this {
      })();
      result.grammar = result.createGrammar();
    }
    return result;
  }
  /**
   * @template {typeof IEntity} T
   * @this {T}
   * @param {String} value
   */
  static withLookbehind(value) {
    const result = this.asUniqueClass();
    result.lookbehind = value;
    return result;
  }
  /**
   * @template {typeof IEntity} T
   * @this {T}
   * @param {(type: T) => (InstanceType<T> | NullEntity)} value
   * @returns {T}
   */
  static withDefault(value = (type) => new type()) {
    const result = this.asUniqueClass();
    result.default = value;
    return result;
  }
  /**
   * @template {typeof IEntity} T
   * @this {T}
   */
  static flagNullable(value = true) {
    const result = this.asUniqueClass();
    result.nullable = value;
    return result;
  }
  /**
   * @template {typeof IEntity} T
   * @this {T}
   */
  static flagIgnored(value = true) {
    const result = this.asUniqueClass();
    result.ignored = value;
    return result;
  }
  /**
   * @template {typeof IEntity} T
   * @this {T}
   */
  static flagSerialized(value = true) {
    const result = this.asUniqueClass();
    result.serialized = value;
    return result;
  }
  /**
   * @template {typeof IEntity} T
   * @this {T}
   */
  static flagInlined(value = true) {
    const result = this.asUniqueClass();
    result.inlined = value;
    return result;
  }
  /**
   * @template {typeof IEntity} T
   * @this {T}
   */
  static flagQuoted(value = true) {
    const result = this.asUniqueClass();
    result.quoted = value;
    return result;
  }
  /**
   * @template {typeof IEntity} T
   * @this {T}
   */
  static flagSilent(value = true) {
    const result = this.asUniqueClass();
    result.silent = value;
    return result;
  }
  /**
   * @template {typeof IEntity} T
   * @this {T}
   */
  static flagTrailing(value = true) {
    const result = this.asUniqueClass();
    result.trailing = value;
    return result;
  }
  /**
   * @protected
   * @param {String} string
   */
  static asSerializedString(string) {
    return `"${string.replaceAll(new RegExp('(?<=(?:[^\\\\]|^)(?:\\\\\\\\)*?)"', "g"), '\\"')}"`;
  }
  /** @param {String} key */
  showProperty(key) {
    let value = this[key];
    const valueType = (
      /** @type {typeof IEntity} */
      value.constructor
    );
    if (valueType.silent && valueType.default !== void 0) {
      if (valueType["#default"] === void 0) {
        valueType["#default"] = valueType.default(valueType);
      }
      const defaultValue = valueType["#default"];
      return !value.equals(defaultValue);
    }
    return true;
  }
  /**
   * 
   * @param {String} attributeName
   * @param {(v: any) => void} callback
   */
  listenAttribute(attributeName, callback) {
    const descriptor = Object.getOwnPropertyDescriptor(this, attributeName);
    const setter = descriptor.set;
    if (setter) {
      descriptor.set = (v) => {
        setter(v);
        callback(v);
      };
      Object.defineProperties(this, { [attributeName]: descriptor });
    } else if (descriptor.value) {
      Object.defineProperties(this, {
        ["#" + attributeName]: {
          value: descriptor.value,
          writable: true,
          enumerable: false
        },
        [attributeName]: {
          enumerable: true,
          get() {
            return this["#" + attributeName];
          },
          set(v) {
            callback(v);
            this["#" + attributeName] = v;
          }
        }
      });
    }
  }
  /** @this {IEntity | Array} */
  doSerialize(insideString = false, indentation = "", Self = (
    /** @type {typeof IEntity} */
    this.constructor
  ), printKey = Self.printKey, keySeparator = Self.keySeparator, attributeSeparator = Self.attributeSeparator, wrap = Self.wrap) {
    const isSelfOverriden = Self !== this.constructor;
    let result = "";
    let first = true;
    const keys = this instanceof IEntity ? this.keys : Object.keys(this);
    for (const key of keys) {
      const value = this[key];
      const valueType = (
        /** @type {typeof IEntity} */
        value?.constructor
      );
      if (value === void 0 || this instanceof IEntity && !this.showProperty(key)) {
        continue;
      }
      if (first) {
        first = false;
      } else {
        result += attributeSeparator;
      }
      let keyValue = this instanceof Array ? `(${key})` : key;
      if (keyValue.length && (Self.attributes[key]?.quoted || value.quoted)) {
        keyValue = `"${keyValue}"`;
      }
      if (value.inlined) {
        const inlinedPrintKey = valueType.className() === "ArrayEntity" ? (k) => printKey(`${keyValue}${k}`) : (k) => printKey(`${keyValue}.${k}`);
        result += value.serialize(
          insideString,
          indentation,
          void 0,
          inlinedPrintKey,
          keySeparator,
          attributeSeparator,
          Self.notWrapped
        );
        continue;
      }
      keyValue = printKey(keyValue);
      if (keyValue.length) {
        result += (attributeSeparator.includes("\n") ? indentation : "") + keyValue + keySeparator;
      }
      let serialization = value?.serialize(insideString, indentation);
      result += serialization;
    }
    if (this instanceof IEntity && (isSelfOverriden && Self.trailing || this.trailing) && result.length) {
      result += attributeSeparator;
    }
    return wrap(
      /** @type {IEntity} */
      this,
      result
    );
  }
  /** @this {IEntity | Array} */
  serialize(insideString = false, indentation = "", Self = (
    /** @type {typeof IEntity} */
    this.constructor
  ), printKey = Self.printKey, keySeparator = Self.keySeparator, attributeSeparator = Self.attributeSeparator, wrap = Self.wrap) {
    Self !== this.constructor;
    let result = this instanceof Array ? IEntity.prototype.doSerialize.bind(this)(insideString, indentation, Self, printKey, keySeparator, attributeSeparator, wrap) : this.doSerialize(insideString, indentation, Self, printKey, keySeparator, attributeSeparator, wrap);
    if (Self.serialized) {
      result = IEntity.asSerializedString(result);
    }
    return result;
  }
  equals(other) {
    if (!(other instanceof IEntity)) {
      return false;
    }
    const thisKeys = Object.keys(this);
    const otherKeys = Object.keys(other);
    const thisType = (
      /** @type {typeof IEntity} */
      this.constructor.actualClass()
    );
    const otherType = (
      /** @type {typeof IEntity} */
      other.constructor.actualClass()
    );
    if (thisKeys.length !== otherKeys.length || this.lookbehind != other.lookbehind || !(other instanceof thisType) && !(this instanceof otherType)) {
      return false;
    }
    for (let i = 0; i < thisKeys.length; ++i) {
      const k = thisKeys[i];
      if (!otherKeys.includes(k)) {
        return false;
      }
      const a = this[k];
      const b = other[k];
      if (a instanceof IEntity) {
        if (!a.equals(b)) {
          return false;
        }
      } else if (a instanceof Array && b instanceof Array) {
        if (a.length !== b.length) {
          return false;
        }
        for (let j = 0; j < a.length; ++j) {
          if (!(a[j] instanceof IEntity && a[j].equals(b[j])) && a[j] !== b[j]) {
            return false;
          }
        }
      } else {
        if (a !== b) {
          return false;
        }
      }
    }
    return true;
  }
  /** @returns {IEntity | Boolean | Number | String | BigInt | (IEntity | Boolean | Number | String | BigInt)[]} */
  valueOf() {
    return this;
  }
}
class AlternativesEntity extends IEntity {
  /** @type {(typeof IEntity)[]} */
  static alternatives = [];
  static className() {
    let result = super.className();
    if (this.alternatives.length) {
      result += ".accepting(" + this.alternatives.map((v) => v.className()).join(", ") + ")";
    }
    return result;
  }
  static createGrammar() {
    const grammars = this.alternatives.map((entity) => entity.grammar);
    if (this.alternatives.length == 0 || grammars.includes(this.unknownEntityGrammar)) {
      return this.unknownEntityGrammar;
    }
    return P.alt(...grammars);
  }
  /**
   * @template {(typeof IEntity)[]} Types
   * @param {Types} types
   */
  static accepting(...types) {
    const result = (
      /** @type {typeof AlternativesEntity<Types> & { alternatives: Types }} */
      this.asUniqueClass()
    );
    result.alternatives = types;
    result.grammar = result.createGrammar();
    return result;
  }
}
class Grammar {
  /** @type {String} */
  // @ts-expect-error
  static numberRegexSource = P.number.getParser().parser.regexp.source;
  static separatedBy = (source, separator, min = 1) => new RegExp(
    source + "(?:" + separator + source + ")" + (min === 1 ? "*" : min === 2 ? "+" : `{${min},}`)
  );
  static Regex = class {
    static HexDigit = /[0-9a-fA-F]/;
    static InsideString = /(?:[^"\\]|\\.)*/;
    static InsideSingleQuotedString = /(?:[^'\\]|\\.)*/;
    static Integer = /[\-\+]?\d+(?!\d|\.)/;
    static Number = /[-\+]?(?:\d*\.)?\d+(?!\d|\.)/;
    static RealUnit = /\+?(?:0(?:\.\d+)?|1(?:\.0+)?)(?![\.\d])/;
    // A number between 0 and 1 included
    static Word = Grammar.separatedBy("[a-zA-Z]", "_");
    static Symbol = /[a-zA-Z_]\w*/;
    static DotSeparatedSymbols = Grammar.separatedBy(this.Symbol.source, "\\.");
    static MultipleWordsSymbols = Grammar.separatedBy(this.Symbol.source, "(?:\\.|\\ +)");
    static PathFragment = Grammar.separatedBy(this.Symbol.source, "[\\.:]");
    static PathSpaceFragment = Grammar.separatedBy(this.Symbol.source, "[\\.:\\ ]");
    static Path = new RegExp(`(?:\\/${this.PathFragment.source}){2,}`);
    // Multiple (2+) /PathFragment
  };
  /*   ---   Primitive   ---   */
  static null = P.reg(/\(\s*\)/).map(() => null);
  static true = P.reg(/true/i).map(() => true);
  static false = P.reg(/false/i).map(() => false);
  static number = P.regArray(
    // @ts-expect-error
    new RegExp(`(${P.number.getParser().parser.regexp.source})|(\\+?inf)|(-inf)`)
  ).map(([_0, n, plusInf, minusInf]) => n ? Number(n) : plusInf ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY);
  // @ts-expect-error
  static bigInt = P.reg(new RegExp(P.number.getParser().parser.regexp.source)).map(BigInt).map(
    (result) => result[2] !== void 0 ? Number.POSITIVE_INFINITY : result[3] !== void 0 ? Number.NEGATIVE_INFINITY : Number(result[1])
  );
  static naturalNumber = P.lazy(() => P.reg(/\d+/).map(Number));
  static string = P.doubleQuotedString.map((insideString) => Utility.unescapeString(insideString));
  /*   ---   Fragment   ---   */
  static colorValue = P.numberByte;
  static word = P.reg(Grammar.Regex.Word);
  static symbol = P.reg(Grammar.Regex.Symbol);
  static symbolQuoted = P.reg(new RegExp('"(' + Grammar.Regex.Symbol.source + ')"'), 1);
  static attributeName = P.reg(Grammar.Regex.DotSeparatedSymbols);
  static attributeNameQuoted = P.reg(new RegExp('"(' + Grammar.Regex.InsideString.source + ')"'), 1);
  static guid = P.reg(new RegExp(`${Grammar.Regex.HexDigit.source}{32}`));
  static commaSeparation = P.reg(/\s*,\s*(?!\))/);
  static commaOrSpaceSeparation = P.reg(/\s*,\s*(?!\))|\s+/);
  static equalSeparation = P.reg(/\s*=\s*/);
  static hexColorChannel = P.reg(new RegExp(Grammar.Regex.HexDigit.source + "{2}"));
  /*   ---   Factory   ---   */
  /**
   * @param {typeof IEntity} entityType
   * @param {String[]} key
   * @returns {typeof IEntity}
   */
  static getAttribute(entityType, [key, ...keys]) {
    const attribute = entityType?.attributes?.[key];
    if (!attribute) {
      return;
    }
    if (attribute.prototype instanceof AlternativesEntity) {
      for (
        const alternative of
        /** @type {typeof AlternativesEntity} */
        attribute.alternatives
      ) {
        const candidate = this.getAttribute(alternative, keys);
        if (candidate) {
          return candidate;
        }
      }
    }
    if (keys.length > 0) {
      return this.getAttribute(attribute, keys);
    }
    return attribute;
  }
  /** @param {typeof IEntity} entityType */
  static createAttributeGrammar(entityType, attributeNameGrammar = this.attributeName, valueSeparator = this.equalSeparation, handleObjectSet = (values, attributeKey, attributeValue) => {
  }) {
    return P.seq(
      attributeNameGrammar,
      valueSeparator
    ).chain(([attributeName, _1]) => {
      const attributeKey = attributeName.split(Configuration.keysSeparator);
      const attributeValue = this.getAttribute(entityType, attributeKey);
      const grammar = attributeValue ? attributeValue.grammar : IEntity.unknownEntityGrammar;
      const inlined = attributeKey.length > 1;
      return grammar.map(
        (attributeValue2) => (values) => {
          Utility.objectSet(values, attributeKey, attributeValue2);
          attributeKey.reduce(
            (acc, cur, i) => {
              acc[cur]["inlined"] = inlined && i < attributeKey.length - 1;
              return acc[cur];
            },
            values
          );
          handleObjectSet(values, attributeKey, attributeValue2);
        }
      );
    });
  }
  /**
   * @template {typeof IEntity & (new (...values: any) => InstanceType<T>)} T
   * @param {T} entityType
   * @param {Number} completeness
   * @return {Parsernostrum<InstanceType<T>>}
   */
  static createEntityGrammar(entityType, entriesSeparator = this.commaSeparation, completeness = null, minKeys = 1) {
    const lookbehind = entityType.lookbehind instanceof Array ? entityType.lookbehind.join("|") : entityType.lookbehind;
    return P.seq(
      P.reg(new RegExp(String.raw`(${lookbehind}\s*)\(\s*`), 1),
      this.createAttributeGrammar(entityType).sepBy(entriesSeparator, minKeys),
      P.reg(/\s*(,\s*)?\)/, 1)
      // optional trailing comma
    ).map(([lookbehind2, attributes, trailing]) => {
      let values = {};
      if (lookbehind2.length) {
        values["lookbehind"] = lookbehind2;
      }
      attributes.forEach((attributeSetter) => attributeSetter(values));
      values["trailing"] = trailing !== void 0;
      return values;
    }).chain((values) => {
      if (entityType.lookbehind instanceof Array || entityType.lookbehind !== lookbehind) {
        entityType = entityType.withLookbehind(lookbehind);
      }
      const keys = Object.keys(values);
      const expectedKeys = Object.keys(entityType.attributes);
      return completeness != null ? P.success().assert(
        (v) => keys.filter((k) => expectedKeys.includes(k)).length / expectedKeys.length >= completeness
      ).map(() => new entityType(values)) : P.success().map(() => new entityType(values));
    });
  }
}
class ArrayEntity extends IEntity {
  /** @type {typeof IEntity} */
  static type;
  static grammar = this.createGrammar();
  get length() {
    return this.values.length;
  }
  /** @param {(ExtractType<T>)[]} values */
  constructor(values = []) {
    super();
    this.values = values;
  }
  /** @returns {P<ArrayEntity<typeof IEntity>>} */
  static createGrammar(elementGrammar = this.type?.grammar ?? P.lazy(() => this.unknownEntityGrammar)) {
    return this.inlined ? elementGrammar : P.seq(
      P.reg(/\(\s*/),
      elementGrammar.sepBy(Grammar.commaSeparation).opt(),
      P.reg(/\s*(,\s*)?\)/, 1)
    ).map(([_0, values, trailing]) => {
      values = values instanceof Array ? values : [];
      let Self = this;
      if (trailing !== void 0 !== Self.trailing) {
        Self = Self.flagTrailing(trailing !== void 0);
      }
      return new Self(values);
    }).label(`ArrayEntity of ${this.type?.className() ?? "unknown values"}`);
  }
  /**
   * @template {typeof IEntity} T
   * @this {T}
   */
  static flagInlined(value = true) {
    const result = this.asUniqueClass();
    result.inlined = value;
    result.grammar = /** @type {P<ArrayEntity>} */
    result.createGrammar();
    return result;
  }
  /**
   * @template {typeof IEntity} T
   * @param {T} type
   */
  static of(type) {
    const result = (
      /** @type {{type: T, grammar: P<ArrayEntity<T>> } & typeof ArrayEntity<T>} */
      this.asUniqueClass()
    );
    result.type = type;
    result.grammar = /** @type {P<ArrayEntity>} */
    result.createGrammar();
    return result;
  }
  doSerialize(insideString = false, indentation = "", Self = (
    /** @type {typeof ArrayEntity<T>} */
    this.constructor
  ), printKey = Self.printKey, keySeparator = Self.keySeparator, attributeSeparator = Self.attributeSeparator, wrap = Self.wrap) {
    if (Self.inlined) {
      return super.serialize.bind(
        this.values,
        insideString,
        indentation,
        Self,
        printKey,
        keySeparator,
        attributeSeparator,
        wrap
      )();
    }
    let result = this.values.map((v) => v?.serialize(insideString)).join(Self.attributeSeparator);
    if (this.trailing) {
      result += Self.attributeSeparator;
    }
    return `(${result})`;
  }
  valueOf() {
    return this.values;
  }
  /** @param {IEntity} other */
  equals(other) {
    if (!(other instanceof ArrayEntity) || this.values.length !== other.values.length) {
      return false;
    }
    for (let i = 0; i < this.values.length; ++i) {
      if (!this.values[i].equals(other.values[i])) {
        return false;
      }
    }
    return true;
  }
}
class BooleanEntity extends IEntity {
  static grammar = this.createGrammar();
  static booleanConverter = {
    fromAttribute: (value, type) => {
    },
    toAttribute: (value, type) => {
      if (value === true) {
        return "true";
      }
      if (value === false) {
        return "false";
      }
      return "";
    }
  };
  #uppercase = true;
  get uppercase() {
    return this.#uppercase;
  }
  set uppercase(value) {
    this.#uppercase = value;
  }
  /** @returns {P<BooleanEntity>} */
  static createGrammar() {
    return P.regArray(/(true)|(True)|(false)|(False)/).map((v) => {
      const result = v[1] ?? v[2] ? new this(true) : new this(false);
      result.uppercase = (v[2] ?? v[4]) !== void 0;
      return result;
    }).label("BooleanEntity");
  }
  constructor(value = false) {
    super();
    this.value = value;
  }
  serialize(insideString = false, indentation = "", Self = (
    /** @type {typeof IEntity} */
    this.constructor
  )) {
    let result = this.value ? this.#uppercase ? "True" : "true" : this.#uppercase ? "False" : "false";
    if (Self.serialized) {
      result = `"${result}"`;
    }
    return result;
  }
  valueOf() {
    return this.value;
  }
}
class InvariantTextEntity extends IEntity {
  static lookbehind = "INVTEXT";
  static grammar = this.createGrammar();
  constructor(value = "") {
    super();
    this.value = value;
  }
  /** @returns {P<InvariantTextEntity>} */
  static createGrammar() {
    return P.alt(
      P.seq(
        P.reg(new RegExp(`${this.lookbehind}\\s*\\(`)),
        P.doubleQuotedString,
        P.reg(/\s*\)/)
      ).map(([_0, value, _2]) => value),
      P.reg(new RegExp(this.lookbehind)).map(() => "")
      // InvariantTextEntity can have no arguments
    ).map((value) => new this(value)).label("InvariantTextEntity");
  }
  doSerialize() {
    return this.lookbehind + '("' + this.value + '")';
  }
  valueOf() {
    return this.value;
  }
  toString() {
    return this.value;
  }
}
class StringEntity extends IEntity {
  static grammar = this.createGrammar();
  static escapedCharacters = /['"\\]/g;
  static unescapedBackslash = new RegExp("(?<=(?:[^\\\\]|^)(?:\\\\\\\\)*)\\\\(?!\\\\)");
  constructor(value = "") {
    super();
    this.value = value;
  }
  /** @returns {P<StringEntity>} */
  static createGrammar() {
    return P.doubleQuotedString.map((insideString) => new this(StringEntity.unescape(insideString))).label("StringEntity");
  }
  /** @param {String} value */
  static escape(value, inline = true) {
    let result = value.replaceAll(new RegExp(`(${StringEntity.escapedCharacters.source})`, "g"), "\\$1");
    if (inline) {
      result = result.replaceAll("\n", "\\n").replaceAll("	", "\\t");
    }
    return result;
  }
  /** @param {String} value */
  static unescape(value) {
    return value.replaceAll(new RegExp(StringEntity.unescapedBackslash.source + "t", "g"), "	").replaceAll(new RegExp(StringEntity.unescapedBackslash.source + "n", "g"), "\n").replaceAll(new RegExp(`\\\\(${StringEntity.escapedCharacters.source})`, "g"), "$1");
  }
  doSerialize(insideString = false) {
    let result = `"${StringEntity.escape(this.value)}"`;
    if (insideString) {
      result = StringEntity.escape(result, false);
    }
    return result;
  }
  valueOf() {
    return this.value;
  }
  toString() {
    return this.value;
  }
}
class LocalizedTextEntity extends IEntity {
  static attributeSeparator = ", ";
  static printKey = (k) => "";
  static lookbehind = "NSLOCTEXT";
  static attributes = {
    ...super.attributes,
    namespace: StringEntity.withDefault(),
    key: StringEntity.withDefault(),
    value: StringEntity.withDefault()
  };
  static grammar = this.createGrammar();
  constructor(values = {}) {
    super(values);
    this.namespace;
    this.key;
    this.value;
  }
  /** @returns {P<LocalizedTextEntity>} */
  static createGrammar() {
    return P.regArray(new RegExp(
      String.raw`${LocalizedTextEntity.lookbehind}\s*\(` + String.raw`\s*"(?<namespace>${Grammar.Regex.InsideString.source})"\s*,` + String.raw`\s*"(?<key>${Grammar.Regex.InsideString.source})"\s*,` + String.raw`\s*"(?<value>${Grammar.Regex.InsideString.source})"\s*` + String.raw`(?<trailing>,\s+)?` + String.raw`\)`,
      "m"
    )).map(({ groups: { namespace, key, value, trailing } }) => {
      return new this({
        namespace: new this.attributes.namespace(Utility.unescapeString(namespace)),
        key: new this.attributes.namespace(Utility.unescapeString(key)),
        value: new this.attributes.namespace(Utility.unescapeString(value)),
        trailing: trailing !== void 0
      });
    }).label("LocalizedTextEntity");
  }
  toString() {
    return Utility.capitalFirstLetter(this.value.valueOf());
  }
}
class FormatTextEntity extends IEntity {
  static attributeSeparator = ", ";
  static lookbehind = ["LOCGEN_FORMAT_NAMED", "LOCGEN_FORMAT_ORDERED"];
  static grammar = this.createGrammar();
  /** @param {(StringEntity | LocalizedTextEntity | InvariantTextEntity | FormatTextEntity)[]} values */
  constructor(values) {
    super();
    this.values = values;
  }
  /** @returns {P<FormatTextEntity>} */
  static createGrammar() {
    return P.lazy(() => P.seq(
      // Resulting regex: /(LOCGEN_FORMAT_NAMED|LOCGEN_FORMAT_ORDERED)\s*/
      P.reg(new RegExp(String.raw`(${this.lookbehind.join("|")})\s*\(\s*`), 1),
      P.alt(
        ...[StringEntity, LocalizedTextEntity, InvariantTextEntity, FormatTextEntity].map((type) => type.grammar)
      ).sepBy(P.reg(/\s*\,\s*/)),
      P.reg(/\s*\)/)
    ).map(([lookbehind, values]) => {
      const result = new this(values);
      result.lookbehind = lookbehind;
      return result;
    })).label("FormatTextEntity");
  }
  doSerialize(insideString = false, indentation = "", Self = (
    /** @type {typeof FormatTextEntity} */
    this.constructor
  ), printKey = Self.printKey, keySeparator = Self.keySeparator, attributeSeparator = Self.attributeSeparator, wrap = Self.wrap) {
    const separator = Self.attributeSeparator;
    return this.lookbehind + "(" + this.values.map((v) => v.serialize(insideString)).join(separator) + (Self.trailing ? separator : "") + ")";
  }
  toString() {
    const pattern = this.values?.[0]?.toString();
    if (!pattern) {
      return "";
    }
    const values = this.values.slice(1).map((v) => v?.valueOf());
    let result = this.lookbehind == "LOCGEN_FORMAT_NAMED" ? pattern.replaceAll(/\{([a-zA-Z]\w*)\}/g, (substring, arg) => {
      const argLocation = values.indexOf(arg) + 1;
      return argLocation > 0 && argLocation < values.length ? values[argLocation] : substring;
    }) : this.lookbehind == "LOCGEN_FORMAT_ORDERED" ? pattern.replaceAll(/\{(\d+)\}/g, (substring, arg) => {
      const argValue = Number(arg);
      return argValue < values.length ? values[argValue] : substring;
    }) : "";
    return result;
  }
}
class GuidEntity extends IEntity {
  static grammar = this.createGrammar();
  static generateGuid() {
    let values = new Uint32Array(4);
    globalThis.crypto.getRandomValues(values);
    let guid = "";
    values.forEach((n) => {
      guid += ("0".repeat(8) + n.toString(16).toUpperCase()).slice(-8);
    });
    return guid;
  }
  constructor(value = GuidEntity.generateGuid()) {
    super();
    this.value = value;
  }
  /** @returns {P<GuidEntity>} */
  static createGrammar() {
    return P.reg(/[0-9A-F]{32}/i).map((v) => new this(v)).label("GuidEntity");
  }
  serialize(insideString = false, indentation = "", Self = (
    /** @type {typeof IEntity} */
    this.constructor
  )) {
    let result = this.value;
    if (Self.serialized) {
      result = `"${result}"`;
    }
    return result;
  }
  toString() {
    return this.value;
  }
}
class ColorChannelEntity extends IEntity {
  static grammar = this.createGrammar();
  constructor(value = 0) {
    super();
    this.value = value;
  }
  /** @returns {P<ColorChannelEntity>} */
  static createGrammar() {
    return P.number.map((v) => new this(v));
  }
  serialize(insideString = false, indentation = "", Self = (
    /** @type {typeof IEntity} */
    this.constructor
  )) {
    let result = this.value.toFixed(6);
    if (Self.serialized) {
      result = `"${result}"`;
    }
    return result;
  }
  valueOf() {
    return this.value;
  }
  toString() {
    return this.value.toString();
  }
}
class LinearColorEntity extends IEntity {
  static attributes = {
    ...super.attributes,
    R: ColorChannelEntity.withDefault(),
    G: ColorChannelEntity.withDefault(),
    B: ColorChannelEntity.withDefault(),
    A: ColorChannelEntity.withDefault((type) => new type(1))
  };
  static grammar = this.createGrammar();
  #H = new ColorChannelEntity();
  get H() {
    return this.#H;
  }
  set H(value) {
    this.#H = value;
  }
  #S = new ColorChannelEntity();
  get S() {
    return this.#S;
  }
  set S(value) {
    this.#S = value;
  }
  #V = new ColorChannelEntity();
  get V() {
    return this.#V;
  }
  set V(value) {
    this.#V = value;
  }
  constructor(values) {
    super(values);
    if (values instanceof Array) {
      values = {
        R: values[0] ?? 0,
        G: values[1] ?? 0,
        B: values[2] ?? 0,
        A: values[3] ?? 1
      };
    }
    this.R;
    this.G;
    this.B;
    this.A;
    this.#updateHSV();
  }
  /** @returns {P<LinearColorEntity>} */
  static createGrammar() {
    return Grammar.createEntityGrammar(this, Grammar.commaSeparation, 0.5).label("LinearColorEntity");
  }
  /** @param {LinearColorEntity} value */
  static printLinearColor(value) {
    return `${Math.round(value.R.valueOf() * 255)}, ${Math.round(value.G.valueOf() * 255)}, ${Math.round(value.B.valueOf() * 255)}`;
  }
  /** @param {Number} x */
  static linearToSRGB(x) {
    if (x <= 0) {
      return 0;
    } else if (x >= 1) {
      return 1;
    } else if (x < 31308e-7) {
      return x * 12.92;
    } else {
      return Math.pow(x, 1 / 2.4) * 1.055 - 0.055;
    }
  }
  /** @param {Number} x */
  static sRGBtoLinear(x) {
    if (x <= 0) {
      return 0;
    } else if (x >= 1) {
      return 1;
    } else if (x < 0.04045) {
      return x / 12.92;
    } else {
      return Math.pow((x + 0.055) / 1.055, 2.4);
    }
  }
  static getWhite() {
    return new LinearColorEntity({
      R: new ColorChannelEntity(1),
      G: new ColorChannelEntity(1),
      B: new ColorChannelEntity(1)
    });
  }
  static getLinearColorFromHexGrammar() {
    const hexDigit = /[0-9a-fA-F]/;
    return P.regArray(new RegExp(
      "#(" + hexDigit.source + "{2})(" + hexDigit.source + "{2})(" + hexDigit.source + "{2})(" + hexDigit.source + "{2})?"
    )).map(([m, R, G, B, A]) => new this({
      R: parseInt(R, 16) / 255,
      G: parseInt(G, 16) / 255,
      B: parseInt(B, 16) / 255,
      A: parseInt(A ?? "FF", 16) / 255
    }));
  }
  static getLinearColorRGBListGrammar() {
    return P.seq(
      P.numberByte,
      Grammar.commaSeparation,
      P.numberByte,
      Grammar.commaSeparation,
      P.numberByte
    ).map(([R, _1, G, _3, B]) => new this({
      R: R / 255,
      G: G / 255,
      B: B / 255,
      A: 1
    }));
  }
  static getLinearColorRGBGrammar() {
    return P.seq(
      P.reg(/rgb\s*\(\s*/),
      this.getLinearColorRGBListGrammar(),
      P.reg(/\s*\)/)
    ).map(([_0, linearColor, _2]) => linearColor);
  }
  static getLinearColorRGBAGrammar() {
    return P.seq(
      P.reg(/rgba\s*\(\s*/),
      this.getLinearColorRGBListGrammar(),
      P.reg(/\s*\)/)
    ).map(([_0, linearColor, _2]) => linearColor);
  }
  static getLinearColorFromAnyFormat() {
    return P.alt(
      this.getLinearColorFromHexGrammar(),
      this.getLinearColorRGBAGrammar(),
      this.getLinearColorRGBGrammar(),
      this.getLinearColorRGBListGrammar()
    );
  }
  #updateHSV() {
    const r = this.R.value;
    const g = this.G.value;
    const b = this.B.value;
    if (Utility.approximatelyEqual(r, g) && Utility.approximatelyEqual(r, b) && Utility.approximatelyEqual(g, b)) {
      this.S.value = 0;
      this.V.value = r;
      return;
    }
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const d = max - min;
    let h;
    switch (max) {
      case min:
        h = 0;
        break;
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
    this.H.value = h;
    this.S.value = max == 0 ? 0 : d / max;
    this.V.value = max;
  }
  /**
   * @param {Number} r
   * @param {Number} g
   * @param {Number} b
   * @param {Number} a
   */
  setFromRGBA(r, g, b, a = 1) {
    this.R.value = r;
    this.G.value = g;
    this.B.value = b;
    this.A.value = a;
    this.#updateHSV();
  }
  /**
   * @param {Number} h
   * @param {Number} s
   * @param {Number} v
   * @param {Number} a
   */
  setFromHSVA(h, s, v, a = 1) {
    const i = Math.floor(h * 6);
    const f = h * 6 - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);
    const values = [v, q, p, p, t, v];
    const [r, g, b] = [values[i % 6], values[(i + 4) % 6], values[(i + 2) % 6]];
    this.R.value = r;
    this.G.value = g;
    this.B.value = b;
    this.A.value = a;
    this.H.value = h;
    this.S.value = s;
    this.V.value = v;
  }
  /**
   * @param {Number} x
   * @param {Number} y
   * @param {Number} v
   * @param {Number} a
   */
  setFromWheelLocation(x, y, v, a) {
    const [r, theta] = Utility.getPolarCoordinates(x, y, true);
    this.setFromHSVA(1 - theta / (2 * Math.PI), r, v, a);
  }
  toDimmedColor(minV = 0) {
    const result = new LinearColorEntity();
    result.setFromRGBANumber(this.toNumber());
    result.setFromHSVA(
      result.H.value,
      result.S.value * 0.6,
      Math.pow(result.V.value + minV, 0.55) * 0.7
    );
    return result;
  }
  toCSSRGBValues() {
    const r = Math.round(this.R.value * 255);
    const g = Math.round(this.G.value * 255);
    const b = Math.round(this.B.value * 255);
    return cssValue`${r}, ${g}, ${b}`;
  }
  toRGBA() {
    return [
      Math.round(this.R.value * 255),
      Math.round(this.G.value * 255),
      Math.round(this.B.value * 255),
      Math.round(this.A.value * 255)
    ];
  }
  toSRGBA() {
    return [
      Math.round(LinearColorEntity.linearToSRGB(this.R.value) * 255),
      Math.round(LinearColorEntity.linearToSRGB(this.G.value) * 255),
      Math.round(LinearColorEntity.linearToSRGB(this.B.value) * 255),
      Math.round(this.A.value * 255)
    ];
  }
  toRGBAString() {
    return this.toRGBA().map((v) => v.toString(16).toUpperCase().padStart(2, "0")).join("");
  }
  toSRGBAString() {
    return this.toSRGBA().map((v) => v.toString(16).toUpperCase().padStart(2, "0")).join("");
  }
  toHSVA() {
    return [this.H.value, this.S.value, this.V.value, this.A.value];
  }
  toNumber() {
    return (Math.round(this.R.value * 255) << 24) + (Math.round(this.G.value * 255) << 16) + (Math.round(this.B.value * 255) << 8) + Math.round(this.A.value * 255);
  }
  /** @returns {[Number, Number, Number, Number]} */
  toArray() {
    return [this.R.value, this.G.value, this.B.value, this.A.value];
  }
  /** @param {Number} number */
  setFromRGBANumber(number) {
    this.A.value = (number & 255) / 255;
    this.B.value = (number >> 8 & 255) / 255;
    this.G.value = (number >> 16 & 255) / 255;
    this.R.value = (number >> 24 & 255) / 255;
    this.#updateHSV();
  }
  /** @param {Number} number */
  setFromSRGBANumber(number) {
    this.A.value = (number & 255) / 255;
    this.B.value = LinearColorEntity.sRGBtoLinear((number >> 8 & 255) / 255);
    this.G.value = LinearColorEntity.sRGBtoLinear((number >> 16 & 255) / 255);
    this.R.value = LinearColorEntity.sRGBtoLinear((number >> 24 & 255) / 255);
    this.#updateHSV();
  }
  toString() {
    return LinearColorEntity.printLinearColor(this);
  }
}
class NullEntity extends IEntity {
  static grammar = this.createGrammar();
  /** @returns {P<NullEntity>} */
  static createGrammar() {
    return P.reg(new RegExp(String.raw`\(${P.whitespaceInlineOpt.getParser().regexp.source}\)`)).map((v) => new this()).label("NullEntity");
  }
  serialize(insideString = false, indentation = "", Self = (
    /** @type {typeof IEntity} */
    this.constructor
  )) {
    let result = "()";
    if (Self.serialized) {
      result = `"${result}"`;
    }
    return result;
  }
}
class NumberEntity extends IEntity {
  static numberRegexSource = String.raw`${Grammar.numberRegexSource}(?<=(?:\.(\d*0+))?)`;
  static grammar = this.createGrammar();
  /** @type {Number} */
  static precision;
  // Can override this.precision
  #precision;
  get precision() {
    return (
      /** @type {typeof NumberEntity} */
      this.constructor.precision ?? this.#precision
    );
  }
  set precision(value) {
    this.#precision = value;
  }
  /**
   * @protected
   * @type {Number}
   */
  _value;
  get value() {
    return this._value;
  }
  set value(value) {
    if (value === -0) {
      value = 0;
    }
    this._value = value;
  }
  constructor(value = 0, precision = null) {
    super();
    this.value = Number(value);
    if (precision !== null) {
      this.#precision = Number(precision);
    }
  }
  /** @returns {P<NumberEntity>} */
  static createGrammar() {
    return P.regArray(
      new RegExp(`(?<n>${this.numberRegexSource})|(?<posInf>\\+?inf)|(?<negInf>-inf)`)
    ).map(
      ({ 2: precision, groups: { n, posInf, negInf } }) => new this(
        n ? Number(n) : posInf ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY,
        precision?.length
      )
    ).label("NumberEntity");
  }
  /**
   * @template {typeof NumberEntity} T
   * @this {T}
   * @returns {T}
   */
  static withPrecision(value = 0) {
    const result = this.asUniqueClass();
    result.precision = value;
    return result;
  }
  /** @param {Number} num */
  static printNumber(num) {
    if (num == Number.POSITIVE_INFINITY) {
      return "inf";
    } else if (num == Number.NEGATIVE_INFINITY) {
      return "-inf";
    }
    return Utility.minDecimals(num);
  }
  serialize(insideString = false, indentation = "", Self = (
    /** @type {typeof NumberEntity} */
    this.constructor
  )) {
    if (this.value === Number.POSITIVE_INFINITY) {
      return "+inf";
    }
    if (this.value === Number.NEGATIVE_INFINITY) {
      return "-inf";
    }
    const precision = Self.precision ?? this.precision;
    let result = precision !== void 0 ? this.value.toFixed(precision) : this.value.toString();
    if (Self.serialized) {
      result = `"${result}"`;
    }
    return result;
  }
  valueOf() {
    return this.value;
  }
  toString() {
    return this.value.toString();
  }
}
class ObjectReferenceEntity extends IEntity {
  static typeReference = P.reg(
    // @ts-expect-error
    new RegExp(Grammar.Regex.Path.source + "|" + Grammar.symbol.getParser().regexp.source)
  );
  static fullReferenceGrammar = this.createFullReferenceGrammar();
  static grammar = this.createGrammar();
  #type;
  get type() {
    return this.#type;
  }
  set type(value) {
    this.#type = value;
  }
  #path;
  get path() {
    return this.#path;
  }
  set path(value) {
    this.#name = "";
    this.#path = value;
  }
  #serializer;
  get full() {
    return this.#serializer;
  }
  set full(value) {
    this.#serializer = value;
  }
  #name = "";
  /** @param {(t: String, p: String) => String} serializer */
  constructor(type = "None", path = "", serializer = type.includes("/") || path ? (t, p) => `"${t + (p ? `'${p}'` : "")}"` : (t, p) => t) {
    super();
    this.#type = type;
    this.#path = path;
    this.#serializer = serializer;
  }
  /** @returns {P<ObjectReferenceEntity>} */
  static createGrammar() {
    return P.alt(
      this.createFullReferenceSerializedGrammar(),
      this.createFullReferenceGrammar(),
      this.createTypeReferenceGrammar()
    ).label("ObjectReferenceEntity");
  }
  /** @returns {P<ObjectReferenceEntity>} */
  static createFullReferenceGrammar() {
    return P.regArray(
      new RegExp(
        // @ts-expect-error
        "(" + this.typeReference.getParser().regexp.source + `)(?:'"(${Grammar.Regex.InsideString.source})"'|'(${Grammar.Regex.InsideSingleQuotedString.source})')`
      )
    ).map(([full, type, fullQuotedPath, simpleQuotedPath]) => {
      let fullQuoted = fullQuotedPath ? true : false;
      let quotes = fullQuoted ? [`'"`, `"'`] : ["'", "'"];
      return new this(
        type,
        fullQuoted ? fullQuotedPath : simpleQuotedPath,
        (t, p) => t + quotes[0] + p + quotes[1]
      );
    });
  }
  /** @returns {P<ObjectReferenceEntity>} */
  static createFullReferenceSerializedGrammar() {
    return P.regArray(
      new RegExp(
        '"(' + Grammar.Regex.InsideString.source + "?)(?:'(" + Grammar.Regex.InsideSingleQuotedString.source + `?)')?"`
      )
    ).map(([_0, type, path]) => new this(type, path, (t, p) => `"${t}${p ? `'${p}'` : ""}"`));
  }
  /** @returns {P<ObjectReferenceEntity>} */
  static createTypeReferenceGrammar() {
    return this.typeReference.map((v) => new this(v, "", (t, p) => t));
  }
  static createNoneInstance() {
    return new this("None");
  }
  getName(dropCounter = false) {
    if (!this.#name) {
      if (!dropCounter) {
        return this.#name = Utility.getNameFromPath(this.path.replace(/_C$/, ""), dropCounter);
      }
      return Utility.getNameFromPath(this.path.replace(/_C$/, ""), dropCounter);
    }
    return this.#name;
  }
  doSerialize(insideString = false) {
    let result = this.full(this.type, this.path);
    if (insideString) {
      result = Utility.escapeString(result, false);
    }
    return result;
  }
  /** @param {IEntity} other */
  equals(other) {
    if (!(other instanceof ObjectReferenceEntity)) {
      return false;
    }
    return this.type == other.type && this.path == other.path;
  }
  toString() {
    return this.full(this.type, this.path);
  }
}
class SymbolEntity extends IEntity {
  static attributeConverter = {
    fromAttribute: (value, type) => new this(value),
    toAttribute: (value, type) => value.toString()
  };
  static grammar = this.createGrammar();
  /** @returns {P<SymbolEntity>} */
  static createGrammar() {
    return Grammar.symbol.map((v) => new this(v)).label("SymbolEntity");
  }
  constructor(value = "") {
    super();
    this.value = value;
  }
  serialize(insideString = false, indentation = "", Self = (
    /** @type {typeof IEntity} */
    this.constructor
  )) {
    let result = this.value;
    if (Self.serialized) {
      result = `"${result}"`;
    }
    return result;
  }
  toString() {
    return this.value;
  }
}
class PinReferenceEntity extends IEntity {
  static grammar = this.createGrammar();
  /**
   * @param {SymbolEntity} objectName
   * @param {GuidEntity} pinGuid
   */
  constructor(objectName = null, pinGuid = null) {
    super();
    this.objectName = objectName;
    this.pinGuid = pinGuid;
  }
  /** @returns {P<PinReferenceEntity>} */
  static createGrammar() {
    return P.seq(
      SymbolEntity.grammar,
      P.whitespace,
      GuidEntity.grammar
    ).map(([objectName, _1, pinGuid]) => new this(objectName, pinGuid)).label("PinReferenceEntity");
  }
  doSerialize() {
    return this.objectName.serialize() + " " + this.pinGuid.serialize();
  }
}
class RotatorEntity extends IEntity {
  static attributes = {
    ...super.attributes,
    R: NumberEntity.withDefault(),
    P: NumberEntity.withDefault(),
    Y: NumberEntity.withDefault()
  };
  static grammar = this.createGrammar();
  constructor(values) {
    super(values);
    this.R;
    this.P;
    this.Y;
  }
  /** @returns {P<RotatorEntity>} */
  static createGrammar() {
    return Grammar.createEntityGrammar(this, Grammar.commaSeparation, 1).label("RotatorEntity");
  }
  getRoll() {
    return this.R;
  }
  getPitch() {
    return this.P;
  }
  getYaw() {
    return this.Y;
  }
}
const _UnknownKeysEntity = class _UnknownKeysEntity extends IEntity {
  /** @returns {P<UnknownKeysEntity>} */
  static createGrammar() {
    return P.seq(
      // Lookbehind
      P.reg(new RegExp(`(${Grammar.Regex.Path.source}|${Grammar.Regex.Symbol.source}\\s*)?\\(\\s*`), 1),
      P.seq(Grammar.attributeName, Grammar.equalSeparation).map(([attribute, equal]) => attribute).chain(
        (attributeName) => this.unknownEntityGrammar.map(
          (attributeValue) => (values) => values[attributeName] = attributeValue
        )
      ).sepBy(Grammar.commaSeparation),
      P.reg(/\s*(?:,\s*)?\)/)
    ).map(([lookbehind, attributes, _2]) => {
      lookbehind ??= "";
      let values = {};
      if (lookbehind.length) {
        values.lookbehind = lookbehind;
      }
      attributes.forEach((attributeSetter) => attributeSetter(values));
      return new this(values);
    }).label("UnknownKeysEntity");
  }
};
__publicField(_UnknownKeysEntity, "attributes", {
  ...__superGet(_UnknownKeysEntity, _UnknownKeysEntity, "attributes"),
  VariableGuid: GuidEntity
});
__publicField(_UnknownKeysEntity, "grammar", _UnknownKeysEntity.createGrammar());
IEntity.unknownEntity = _UnknownKeysEntity;
let UnknownKeysEntity = _UnknownKeysEntity;
class Vector2DEntity extends IEntity {
  static attributes = {
    ...super.attributes,
    X: NumberEntity.withDefault(),
    Y: NumberEntity.withDefault()
  };
  static grammar = this.createGrammar();
  constructor(values) {
    super(values);
    this.X;
    this.Y;
  }
  /** @returns {P<Vector2DEntity>} */
  static createGrammar() {
    return Grammar.createEntityGrammar(this, Grammar.commaSeparation, 1).label("Vector2DEntity");
  }
  /** @returns {[Number, Number]} */
  toArray() {
    return [this.X.valueOf(), this.Y.valueOf()];
  }
}
class Vector4DEntity extends IEntity {
  static attributes = {
    ...super.attributes,
    X: NumberEntity.withDefault(),
    Y: NumberEntity.withDefault(),
    Z: NumberEntity.withDefault(),
    W: NumberEntity.withDefault()
  };
  static grammar = this.createGrammar();
  constructor(values) {
    super(values);
    this.X;
    this.Y;
    this.Z;
    this.W;
  }
  /** @returns {P<Vector4DEntity>} */
  static createGrammar() {
    return Grammar.createEntityGrammar(this, Grammar.commaSeparation, 1).label("Vector4DEntity");
  }
  /** @returns {[Number, Number, Number, Number]} */
  toArray() {
    return [this.X.valueOf(), this.Y.valueOf(), this.Z.valueOf(), this.W.valueOf()];
  }
}
class VectorEntity extends IEntity {
  static attributes = {
    ...super.attributes,
    X: NumberEntity.withDefault(),
    Y: NumberEntity.withDefault(),
    Z: NumberEntity.withDefault()
  };
  static grammar = this.createGrammar();
  constructor(values) {
    super(values);
    this.X;
    this.Y;
    this.Z;
  }
  /** @returns {P<VectorEntity>} */
  static createGrammar() {
    return Grammar.createEntityGrammar(this, Grammar.commaSeparation, 1).label("VectorEntity");
  }
  /** @returns {[Number, Number, Number]} */
  toArray() {
    return [this.X.valueOf(), this.Y.valueOf(), this.Z.valueOf()];
  }
}
function initializeSerializerFactory() {
  IEntity.unknownEntityGrammar = P.alt(
    // Remember to keep the order, otherwise parsing might fail
    BooleanEntity.grammar,
    GuidEntity.grammar,
    P.str("None").map(() => ObjectReferenceEntity.createNoneInstance()),
    NullEntity.grammar,
    NumberEntity.grammar,
    P.alt(
      ObjectReferenceEntity.fullReferenceGrammar,
      P.regArray(new RegExp(
        // @ts-expect-error
        `"(${Grammar.Regex.Path.source})'(${Grammar.Regex.Path.source}|${Grammar.symbol.getParser().regexp.source})'"`
      )).map(([_0, type, path]) => new ObjectReferenceEntity(type, path, (t, p) => `"${t}'${p}'"`))
    ),
    StringEntity.grammar,
    LocalizedTextEntity.grammar,
    InvariantTextEntity.grammar,
    FormatTextEntity.grammar,
    PinReferenceEntity.grammar,
    Vector4DEntity.grammar,
    VectorEntity.grammar,
    Vector2DEntity.grammar,
    RotatorEntity.grammar,
    LinearColorEntity.grammar,
    UnknownKeysEntity.grammar,
    SymbolEntity.grammar,
    ArrayEntity.of(PinReferenceEntity).grammar,
    ArrayEntity.of(AlternativesEntity.accepting(NumberEntity, StringEntity, SymbolEntity)).grammar,
    P.lazy(() => ArrayEntity.createGrammar(IEntity.unknownEntityGrammar))
  );
}
const hooks = {
  nodeColor: () => null,
  nodeIcon: () => null,
  additionalPinInserter: () => void 0,
  pinTitle: (entity) => entity.PinName?.toString() ?? "",
  pinColor: () => null
};
function registerPresentationHooks(overrides = {}) {
  Object.assign(hooks, overrides);
}
class FunctionReferenceEntity extends IEntity {
  static attributes = {
    ...super.attributes,
    MemberParent: ObjectReferenceEntity,
    MemberName: StringEntity,
    MemberGuid: GuidEntity
  };
  static grammar = this.createGrammar();
  constructor(values) {
    super(values);
    this.MemberParent;
    this.MemberName;
    this.MemberGuid;
  }
  /** @returns {P<FunctionReferenceEntity>} */
  static createGrammar() {
    return Grammar.createEntityGrammar(this, Grammar.commaSeparation, 0, 0);
  }
}
class IntegerEntity extends NumberEntity {
  static grammar = this.createGrammar();
  get value() {
    return super.value;
  }
  set value(value) {
    value = Math.trunc(value);
    if (value >= 1 << 31 && value < 2147483648) {
      value = Math.floor(value);
      super.value = value;
    }
  }
  /** @returns {P<IntegerEntity>} */
  static createGrammar() {
    return P.numberInteger.map((v) => new this(v));
  }
}
class MacroGraphReferenceEntity extends IEntity {
  static attributes = {
    ...super.attributes,
    MacroGraph: ObjectReferenceEntity,
    GraphBlueprint: ObjectReferenceEntity,
    GraphGuid: GuidEntity
  };
  static grammar = this.createGrammar();
  constructor(values) {
    super(values);
    this.MacroGraph;
    this.GraphBlueprint;
    this.GraphGuid;
  }
  /** @returns {P<MacroGraphReferenceEntity>} */
  static createGrammar() {
    return Grammar.createEntityGrammar(this);
  }
  getMacroName() {
    const colonIndex = this.MacroGraph.path.search(":");
    return this.MacroGraph.path.substring(colonIndex + 1);
  }
}
class MirroredEntity extends IEntity {
  /** @type {typeof IEntity} */
  static type;
  /** @param {() => InstanceType<T>} getter */
  constructor(getter = null) {
    super();
    const self = (
      /** @type {typeof MirroredEntity<T>} */
      this.constructor
    );
    getter ??= self.default !== void 0 ? (
      /** @type {MirroredEntity} */
      self.default(self).getter
    ) : getter;
    this.getter = getter;
  }
  static createGrammar(elementGrammar = this.type?.grammar ?? P.lazy(() => this.unknownEntityGrammar)) {
    return this.type?.grammar.map((v) => new this(() => v));
  }
  /**
   * @template {typeof IEntity} T
   * @this {T}
   * @param {(type: T) => (InstanceType<T> | NullEntity)} value
   * @returns {T}
   */
  // @ts-expect-error
  static withDefault(value = (type) => new type(() => new type.type())) {
    return super.withDefault(value);
  }
  /**
   * @template {typeof IEntity} T
   * @param {T} type
   */
  static of(type) {
    const result = (
      /** @type {{type: T, grammar: P<MirroredEntity<T>> } & typeof MirroredEntity<T>} */
      this.asUniqueClass()
    );
    result.type = type;
    result.grammar = result.createGrammar();
    return result;
  }
  doSerialize(insideString = false, indentation = "", Self = (
    /** @type {typeof MirroredEntity<T>} */
    this.constructor
  ), printKey = Self.printKey, keySeparator = Self.keySeparator, attributeSeparator = Self.attributeSeparator, wrap = Self.wrap) {
    const value = this.getter();
    return value.serialize(insideString, indentation, Self.type, printKey, keySeparator, attributeSeparator, wrap);
  }
  /** @param {IEntity} other */
  equals(other) {
    if (other instanceof MirroredEntity) {
      other = other.getter?.();
    }
    return this.getter?.().equals(other);
  }
  /** @returns {InstanceType<T>} */
  valueOf(arg) {
    return this.getter(arg).valueOf();
  }
  toString() {
    return this.getter().toString();
  }
}
class NaturalNumberEntity extends IntegerEntity {
  static grammar = this.createGrammar();
  get value() {
    return super.value;
  }
  set value(value) {
    value = Math.round(Utility.clamp(value, 0));
    super.value = value;
  }
  /** @returns {P<NaturalNumberEntity>} */
  static createGrammar() {
    return P.numberNatural.map((v) => new this(v));
  }
}
class ByteEntity extends IntegerEntity {
  static grammar = this.createGrammar();
  get value() {
    return super.value;
  }
  set value(value) {
    value = Math.trunc(value);
    if (value >= 0 && value < 1 << 8) {
      super.value = value;
    }
  }
  /** @returns {P<ByteEntity>} */
  createGrammar() {
    return P.numberByte.map((v) => new this(v));
  }
}
class ComputedTypeEntity extends IEntity {
  static grammar = this.createGrammar();
  /** @type {(entity: IEntity) => typeof IEntity} */
  static f;
  static createGrammar() {
    return StringEntity.grammar;
  }
  /**
   * @template {typeof ComputedTypeEntity.f} T
   * @param {T} producer
   */
  static from(producer) {
    const result = (
      /** @type {(typeof ComputedTypeEntity) & { f: T }} */
      this.asUniqueClass()
    );
    result.f = producer;
    return result;
  }
  /** @param {IEntity} entity */
  static compute(entity) {
    return this.f(entity);
  }
}
class EnumEntity extends SymbolEntity {
  static grammar = this.createGrammar();
  /** @returns {P<EnumEntity>} */
  static createGrammar() {
    return Grammar.symbol.map((v) => new this(v));
  }
}
class EnumDisplayValueEntity extends EnumEntity {
  static grammar = this.createGrammar();
  /** @returns {P<EnumDisplayValueEntity>} */
  static createGrammar() {
    return P.reg(Grammar.Regex.InsideString).map((v) => new this(v));
  }
}
class Integer64Entity extends IEntity {
  static grammar = this.createGrammar();
  /**
   * @protected
   * @type {bigint}
   */
  _value;
  get value() {
    return this._value;
  }
  set value(value) {
    if (value >= -(1n << 63n) && value < 1n << 63n) {
      this._value = value;
    }
  }
  /** @param {bigint | Number} value */
  constructor(value = 0n) {
    super();
    this.value = BigInt(value);
  }
  /** @returns {P<Integer64Entity>} */
  static createGrammar() {
    return P.numberBigInteger.map((v) => new this(v));
  }
  serialize(insideString = false, indentation = "", Self = (
    /** @type {typeof IEntity} */
    this.constructor
  )) {
    let result = this.value.toString();
    if (Self.serialized) {
      result = `"${result}"`;
    }
    return result;
  }
  valueOf() {
    return this.value;
  }
  toString() {
    return this.value.toString();
  }
}
class PinTypeEntity extends IEntity {
  static attributes = {
    ...super.attributes,
    PinCategory: StringEntity.withDefault(),
    PinSubCategory: StringEntity,
    PinSubCategoryObject: ObjectReferenceEntity,
    PinSubCategoryMemberReference: FunctionReferenceEntity,
    ContainerType: SymbolEntity,
    bIsReference: BooleanEntity,
    bIsConst: BooleanEntity,
    bIsWeakPointer: BooleanEntity,
    bIsUObjectWrapper: BooleanEntity,
    bSerializeAsSinglePrecisionFloat: BooleanEntity
  };
  static grammar = this.createGrammar();
  constructor(values = {}) {
    super(values);
    this.PinCategory;
    this.PinSubCategory;
    this.PinSubCategoryObject;
    this.PinSubCategoryMemberReference;
    this.ContainerType;
    this.bIsReference;
    this.bIsConst;
    this.bIsWeakPointer;
    this.bIsUObjectWrapper;
    this.bIsUObjectWrapper;
    this.bSerializeAsSinglePrecisionFloat;
  }
  /** @returns {P<PinTypeEntity>} */
  static createGrammar() {
    return Grammar.createEntityGrammar(this).label("PinTypeEntity");
  }
  /** @param {PinTypeEntity} other */
  copyTypeFrom(other) {
    for (const key of this.keys) {
      if (other[key] !== void 0) {
        this[key] = other[key];
      }
    }
  }
}
class RBSerializationVector2DEntity extends Vector2DEntity {
  static grammar = this.createGrammar();
  /** @returns {P<RBSerializationVector2DEntity>} */
  static createGrammar() {
    return P.alt(
      P.regArray(new RegExp(
        /X\s*=\s*/.source + "(?<x>" + Grammar.numberRegexSource + ")\\s+" + /Y\s*=\s*/.source + "(?<y>" + Grammar.numberRegexSource + ")"
      )).map(({ groups: { x, y } }) => new this({
        X: new Vector2DEntity.attributes.X(x),
        Y: new Vector2DEntity.attributes.Y(y)
      })),
      Vector2DEntity.grammar.map((v) => new this({
        X: v.X,
        Y: v.Y
      }))
    ).label("RBSerializationVector2DEntity");
  }
}
class SimpleSerializationRotatorEntity extends RotatorEntity {
  static attributeSeparator = ", ";
  static grammar = this.createGrammar();
  /** @returns {P<SimpleSerializationRotatorEntity>} */
  static createGrammar() {
    return P.alt(
      P.regArray(new RegExp(
        `(${NumberEntity.numberRegexSource})` + String.raw`\s*,\s*` + `(${NumberEntity.numberRegexSource})` + String.raw`\s*,\s*` + `(${NumberEntity.numberRegexSource})`
      )).map(([_, p, pPrecision, y, yPrecision, r, rPrecision]) => new this({
        R: new RotatorEntity.attributes.R(r, rPrecision?.length),
        P: new RotatorEntity.attributes.P(p, pPrecision?.length),
        Y: new RotatorEntity.attributes.Y(y, yPrecision?.length)
      })),
      RotatorEntity.grammar.map((v) => new this({
        R: v.R,
        P: v.P,
        Y: v.Y
      }))
    ).label("SimpleSerializationRotatorEntity");
  }
  doSerialize() {
    const attributeSeparator = (
      /** @type {typeof SimpleSerializationRotatorEntity} */
      this.constructor.attributeSeparator
    );
    return this.P.serialize() + attributeSeparator + this.Y.serialize() + attributeSeparator + this.R.serialize() + (this.trailing ? attributeSeparator : "");
  }
}
class SimpleSerializationVector2DEntity extends Vector2DEntity {
  static attributeSeparator = ", ";
  static grammar = this.createGrammar();
  /** @returns {P<SimpleSerializationVector2DEntity>} */
  static createGrammar() {
    return P.alt(
      P.regArray(new RegExp(
        `(${NumberEntity.numberRegexSource})` + String.raw`\s*,\s*` + `(${NumberEntity.numberRegexSource})`
      )).map(([_, x, xPrecision, y, yPrecision]) => new this({
        X: new Vector2DEntity.attributes.X(x, xPrecision?.length),
        Y: new Vector2DEntity.attributes.Y(y, yPrecision?.length)
      })),
      Vector2DEntity.grammar.map((v) => new this({
        X: v.X,
        Y: v.Y
      }))
    ).label("SimpleSerializationVector2DEntity");
  }
  doSerialize() {
    const attributeSeparator = (
      /** @type {typeof SimpleSerializationVector2DEntity} */
      this.constructor.attributeSeparator
    );
    return this.X.serialize() + attributeSeparator + this.Y.serialize() + (this.trailing ? attributeSeparator : "");
  }
}
class SimpleSerializationVector4DEntity extends Vector4DEntity {
  static grammar = this.createGrammar();
  /** @returns {P<SimpleSerializationVector4DEntity> } */
  static createGrammar() {
    Grammar.numberRegexSource;
    return P.alt(
      P.regArray(new RegExp(
        `(${Grammar.numberRegexSource})` + String.raw`\s*,\s*` + `(${Grammar.numberRegexSource})` + String.raw`\s*,\s*` + `(${Grammar.numberRegexSource})` + String.raw`\s*,\s*` + `(${Grammar.numberRegexSource})`
      )).map(([_0, x, y, z, w]) => new this({
        X: new Vector4DEntity.attributes.X(x),
        Y: new Vector4DEntity.attributes.Y(y),
        Z: new Vector4DEntity.attributes.Z(z),
        W: new Vector4DEntity.attributes.W(w)
      })),
      Vector4DEntity.grammar
    );
  }
}
class SimpleSerializationVectorEntity extends VectorEntity {
  static allowShortSerialization = false;
  static attributeSeparator = ", ";
  static grammar = this.createGrammar();
  /** @returns {P<SimpleSerializationVectorEntity>} */
  static createGrammar() {
    return P.alt(
      P.regArray(new RegExp(
        `(${NumberEntity.numberRegexSource})` + (this.allowShortSerialization ? `(?:` : "") + String.raw`\s*,\s*` + `(${NumberEntity.numberRegexSource})` + String.raw`\s*,\s*` + `(${NumberEntity.numberRegexSource})` + (this.allowShortSerialization ? `)?` : "")
      )).map(([_, x, xPrecision, y, yPrecision, z, zPrecision]) => new this({
        X: new VectorEntity.attributes.X(x, xPrecision?.length),
        Y: new VectorEntity.attributes.Y(y, yPrecision?.length),
        Z: new VectorEntity.attributes.Z(z, zPrecision?.length)
      })),
      VectorEntity.grammar.map((v) => new this({
        X: v.X,
        Y: v.Y,
        Z: v.Z
      }))
    );
  }
  /**
   * @template {typeof SimpleSerializationVectorEntity} T
   * @this {T}
   */
  static flagAllowShortSerialization(value = true) {
    const result = this.asUniqueClass();
    if (value !== result.allowShortSerialization) {
      result.allowShortSerialization = value;
      result.grammar = result.createGrammar();
    }
    return result;
  }
  doSerialize() {
    const attributeSeparator = (
      /** @type {typeof SimpleSerializationVectorEntity} */
      this.constructor.attributeSeparator
    );
    return this.X.serialize() + attributeSeparator + this.Y.serialize() + attributeSeparator + this.Z.serialize() + (this.trailing ? attributeSeparator : "");
  }
}
const paths = Configuration.paths;
class PinEntity extends IEntity {
  static lookbehind = "Pin";
  static #typeEntityMap = {
    "bool": BooleanEntity,
    "byte": ByteEntity,
    "enum": EnumEntity,
    "exec": StringEntity,
    "float": NumberEntity,
    "int": IntegerEntity,
    "int64": Integer64Entity,
    "name": StringEntity,
    "real": NumberEntity,
    "string": StringEntity,
    [paths.linearColor]: LinearColorEntity,
    [paths.niagaraBool]: BooleanEntity,
    [paths.niagaraFloat]: NumberEntity,
    [paths.niagaraPosition]: VectorEntity,
    [paths.rotator]: RotatorEntity,
    [paths.vector]: VectorEntity,
    [paths.vector2D]: Vector2DEntity,
    [paths.vector4f]: Vector4DEntity
  };
  static #alternativeTypeEntityMap = {
    "enum": EnumDisplayValueEntity,
    "rg": RBSerializationVector2DEntity,
    [paths.niagaraPosition]: SimpleSerializationVectorEntity.flagAllowShortSerialization(),
    [paths.rotator]: SimpleSerializationRotatorEntity,
    [paths.vector]: SimpleSerializationVectorEntity,
    [paths.vector2D]: SimpleSerializationVector2DEntity,
    [paths.vector3f]: SimpleSerializationVectorEntity,
    [paths.vector4f]: SimpleSerializationVector4DEntity
  };
  static attributes = {
    PinId: GuidEntity.withDefault(),
    PinName: StringEntity.withDefault(),
    PinFriendlyName: AlternativesEntity.accepting(
      LocalizedTextEntity,
      FormatTextEntity,
      InvariantTextEntity,
      StringEntity
    ),
    PinToolTip: StringEntity,
    Direction: StringEntity,
    PinType: PinTypeEntity.withDefault().flagInlined(),
    LinkedTo: ArrayEntity.of(PinReferenceEntity).withDefault().flagSilent(),
    SubPins: ArrayEntity.of(PinReferenceEntity),
    ParentPin: PinReferenceEntity,
    DefaultValue: ComputedTypeEntity.from(
      /** @param {PinEntity} pinEntity */
      (pinEntity) => pinEntity.getEntityType(true)?.flagSerialized() ?? StringEntity
    ),
    AutogeneratedDefaultValue: StringEntity,
    DefaultObject: ObjectReferenceEntity,
    PersistentGuid: GuidEntity,
    bHidden: BooleanEntity,
    bNotConnectable: BooleanEntity,
    bDefaultValueIsReadOnly: BooleanEntity,
    bDefaultValueIsIgnored: BooleanEntity,
    bAdvancedView: BooleanEntity,
    bOrphanedPin: BooleanEntity
  };
  static grammar = this.createGrammar();
  #recomputesNodeTitleOnChange = false;
  set recomputesNodeTitleOnChange(value) {
    this.#recomputesNodeTitleOnChange = value;
  }
  get recomputesNodeTitleOnChange() {
    return this.#recomputesNodeTitleOnChange;
  }
  /** @type {ObjectEntity} */
  #objectEntity = null;
  get objectEntity() {
    try {
      return this.#objectEntity;
    } catch (e) {
      return null;
    }
  }
  set objectEntity(value) {
    this.#objectEntity = value;
  }
  #pinIndex;
  get pinIndex() {
    return this.#pinIndex;
  }
  set pinIndex(value) {
    this.#pinIndex = value;
  }
  constructor(values = {}) {
    super(values);
    this.PinId;
    this.PinName;
    this.PinFriendlyName;
    this.PinToolTip;
    this.Direction;
    this.PinType;
    this.LinkedTo;
    this.DefaultValue;
    this.AutogeneratedDefaultValue;
    this.DefaultObject;
    this.PersistentGuid;
    this.bHidden;
    this.bNotConnectable;
    this.bDefaultValueIsReadOnly;
    this.bDefaultValueIsIgnored;
    this.bAdvancedView;
    this.bOrphanedPin;
    this.objectEntity;
  }
  /** @returns {P<PinEntity>} */
  static createGrammar() {
    return Grammar.createEntityGrammar(this);
  }
  /** @param {ObjectEntity} objectEntity */
  static fromLegacyObject(objectEntity) {
    return new PinEntity(objectEntity);
  }
  /** @returns {String} */
  getType() {
    const category = this.PinType.PinCategory?.toString().toLocaleLowerCase();
    if (["struct", "class", "object", "type", "statictype"].includes(category)) {
      return this.PinType.PinSubCategoryObject?.path;
    }
    if (this.isEnum()) {
      return "enum";
    }
    if (this.objectEntity?.isPcg()) {
      const pcgSuboject = this.objectEntity.getPcgSubobject();
      const pinObject = this.getPinObject(pcgSuboject);
      if (pinObject) {
        let allowedTypes = pinObject["Properties"]?.AllowedTypes?.toString() ?? "";
        if (allowedTypes == "") {
          allowedTypes = this.PinType.PinCategory ?? "";
          if (allowedTypes == "") {
            allowedTypes = "Any";
          }
        }
        if (allowedTypes) {
          if (pinObject["Properties"].bAllowMultipleData?.valueOf() !== false && pinObject["Properties"].bAllowMultipleConnections?.valueOf() !== false) {
            allowedTypes += "[]";
          }
          return allowedTypes;
        }
      }
    }
    if (category === "optional") {
      const subCategory = this.PinType.PinSubCategory?.toString();
      switch (subCategory) {
        case "red":
          return "real";
        case "rg":
          return "rg";
        case "rgb":
          return paths.vector;
        case "rgba":
          return paths.linearColor;
        default:
          return subCategory;
      }
    }
    return category;
  }
  /** @returns {typeof IEntity} */
  getEntityType(alternative = false) {
    const type = this.getType();
    const entity = PinEntity.#typeEntityMap[type];
    const alternativeEntity = PinEntity.#alternativeTypeEntityMap[type];
    return alternative && alternativeEntity !== void 0 ? alternativeEntity : entity;
  }
  pinTitle() {
    return hooks.pinTitle(this);
  }
  /** @param {PinEntity} other */
  copyTypeFrom(other) {
    this.PinType = other.PinType;
  }
  getDefaultValue(maybeCreate = false) {
    if (this.DefaultValue === void 0 && maybeCreate) {
      this.DefaultValue = /** @type {T} */
      new (this.getEntityType(true))();
    }
    return this.DefaultValue;
  }
  isEnum() {
    const type = this.PinType.PinSubCategoryObject?.type;
    return type === paths.enum || type === paths.userDefinedEnum || type?.toLowerCase() === "enum";
  }
  isExecution() {
    return this.PinType.PinCategory.toString() === "exec" || this.getType() === paths.niagaraParameterMap;
  }
  isHidden() {
    return this.bHidden?.valueOf();
  }
  isInput() {
    return !this.isHidden() && this.Direction?.toString() != "EGPD_Output";
  }
  isOutput() {
    return !this.isHidden() && this.Direction?.toString() == "EGPD_Output";
  }
  isLinked() {
    return this.LinkedTo?.length > 0;
  }
  /**
   * @param {String} targetObjectName
   * @param {PinEntity} targetPinEntity
   * @returns true if it was not already linked to the tarket
   */
  linkTo(targetObjectName, targetPinEntity) {
    const linkFound = this.LinkedTo.values?.some(
      (pinReferenceEntity) => pinReferenceEntity.objectName.toString() == targetObjectName && pinReferenceEntity.pinGuid.toString() == targetPinEntity.PinId.toString()
    );
    if (!linkFound) {
      this.LinkedTo.values.push(new PinReferenceEntity(new SymbolEntity(targetObjectName), targetPinEntity.PinId));
      return true;
    }
    return false;
  }
  /**
   * @param {String} targetObjectName
   * @param {PinEntity} targetPinEntity
   * @returns true if it was linked to the target
   */
  unlinkFrom(targetObjectName, targetPinEntity) {
    const indexElement = this.LinkedTo.values?.findIndex((pinReferenceEntity) => {
      return pinReferenceEntity.objectName.toString() == targetObjectName && pinReferenceEntity.pinGuid.toString() == targetPinEntity.PinId.toString();
    });
    if (indexElement >= 0) {
      this.LinkedTo.values.splice(indexElement, 1);
      if (this.LinkedTo.length === 0 && PinEntity.attributes.LinkedTo.default === void 0) {
        this.LinkedTo.values = [];
      }
      return true;
    }
    return false;
  }
  /** @param {ObjectEntity} pcgSuboject */
  getPinObject(pcgSuboject) {
    const pinObjectReference = this.isInput() ? pcgSuboject.InputPins?.valueOf()[this.pinIndex] : pcgSuboject.OutputPins?.valueOf()[this.pinIndex];
    if (pinObjectReference) {
      return pcgSuboject[Configuration.subObjectAttributeNameFromReference(pinObjectReference, true)];
    }
  }
  getSubCategory() {
    return this.PinType.PinSubCategoryObject?.path;
  }
  pinColor() {
    return hooks.pinColor(this);
  }
}
class ScriptVariableEntity extends IEntity {
  static attributes = {
    ...super.attributes,
    ScriptVariable: ObjectReferenceEntity,
    OriginalChangeId: GuidEntity
  };
  static grammar = this.createGrammar();
  constructor(values = {}) {
    super(values);
    this.ScriptVariable;
    this.OriginalChangeId;
  }
  /** @returns {P<ScriptVariableEntity>} */
  static createGrammar() {
    return Grammar.createEntityGrammar(this).label("ScriptVariableEntity");
  }
}
class UnknownPinEntity extends PinEntity {
  static attributes = {
    ...super.attributes,
    PinId: GuidEntity
  };
  static grammar = this.createGrammar();
  /** @returns {P<UnknownPinEntity>} */
  static createGrammar() {
    return P.seq(
      // Lookbehind
      P.reg(new RegExp(`(${Grammar.Regex.Symbol.source}\\s*)?\\(\\s*`), 1),
      Grammar.createAttributeGrammar(this).sepBy(Grammar.commaSeparation),
      P.reg(/\s*(?:,\s*)?\)/)
    ).map(([lookbehind, attributes, _2]) => {
      lookbehind ??= "";
      let values = {};
      if (lookbehind.length) {
        values.lookbehind = lookbehind;
      }
      attributes.forEach((attributeSetter) => attributeSetter(values));
      return new this(values);
    }).label("UnknownPinEntity");
  }
}
class VariableReferenceEntity extends IEntity {
  static attributes = {
    ...super.attributes,
    MemberScope: StringEntity,
    MemberName: StringEntity.withDefault(),
    MemberGuid: GuidEntity,
    bSelfContext: BooleanEntity
  };
  static grammar = this.createGrammar();
  constructor(values) {
    super(values);
    this.MemberScope;
    this.MemberName;
    this.MemberGuid;
    this.bSelfContext;
  }
  /** @returns {P<VariableReferenceEntity>} */
  static createGrammar() {
    return Grammar.createEntityGrammar(this).label("VariableReferenceEntity");
  }
}
class ObjectEntity extends IEntity {
  #exported = false;
  get exported() {
    return this.#exported;
  }
  set exported(value) {
    this.#exported = value;
  }
  static #nameRegex = /^(\w+?)(?:_(\d+))?$/;
  /** @type {(k: String) => String} */
  static printKey = (k) => !k.startsWith(Configuration.subObjectAttributeNamePrefix) ? k : "";
  static attributeSeparator = "\n";
  static wrap = this.notWrapped;
  static trailing = true;
  static attributes = {
    ...super.attributes,
    Class: ObjectReferenceEntity,
    Name: StringEntity,
    Archetype: ObjectReferenceEntity,
    ExportPath: MirroredEntity.of(ObjectReferenceEntity),
    ObjectRef: ObjectReferenceEntity,
    BlueprintElementType: ObjectReferenceEntity,
    BlueprintElementInstance: ObjectReferenceEntity,
    ConstA: MirroredEntity.of(NumberEntity),
    ConstB: MirroredEntity.of(NumberEntity),
    PinTags: ArrayEntity.of(NullEntity).flagInlined(),
    PinNames: ArrayEntity.of(StringEntity).flagInlined(),
    AxisKey: SymbolEntity,
    InputAxisKey: SymbolEntity,
    InputName: StringEntity,
    InputType: SymbolEntity,
    NumAdditionalInputs: NaturalNumberEntity,
    bIsPureFunc: BooleanEntity,
    bIsConstFunc: BooleanEntity,
    bIsCaseSensitive: BooleanEntity,
    bDefaultsToPureFunc: BooleanEntity,
    VariableReference: VariableReferenceEntity,
    SelfContextInfo: SymbolEntity,
    DelegatePropertyName: StringEntity,
    DelegateOwnerClass: ObjectReferenceEntity,
    ComponentPropertyName: StringEntity,
    EventReference: FunctionReferenceEntity,
    FunctionReference: FunctionReferenceEntity,
    FunctionScript: ObjectReferenceEntity,
    CustomFunctionName: StringEntity,
    TargetType: ObjectReferenceEntity,
    MacroGraphReference: MacroGraphReferenceEntity,
    Enum: ObjectReferenceEntity,
    EnumEntries: ArrayEntity.of(StringEntity).flagInlined(),
    InputKey: SymbolEntity,
    OpName: StringEntity,
    CachedChangeId: GuidEntity,
    FunctionDisplayName: StringEntity,
    AddedPins: ArrayEntity.of(UnknownPinEntity).withDefault().flagInlined().flagSilent(),
    ChangeId: GuidEntity,
    MaterialFunction: ObjectReferenceEntity,
    bOverrideFunction: BooleanEntity,
    bInternalEvent: BooleanEntity,
    bConsumeInput: BooleanEntity,
    bExecuteWhenPaused: BooleanEntity,
    bOverrideParentBinding: BooleanEntity,
    bControl: BooleanEntity,
    bAlt: BooleanEntity,
    bShift: BooleanEntity,
    bCommand: BooleanEntity,
    CommentColor: LinearColorEntity,
    bCommentBubbleVisible_InDetailsPanel: BooleanEntity,
    bColorCommentBubble: BooleanEntity,
    ProxyFactoryFunctionName: StringEntity,
    ProxyFactoryClass: ObjectReferenceEntity,
    ProxyClass: ObjectReferenceEntity,
    StructType: ObjectReferenceEntity,
    MaterialExpression: ObjectReferenceEntity,
    MaterialExpressionComment: ObjectReferenceEntity,
    MoveMode: SymbolEntity,
    TimelineName: StringEntity,
    TimelineGuid: GuidEntity,
    SizeX: MirroredEntity.of(IntegerEntity),
    SizeY: MirroredEntity.of(IntegerEntity),
    Text: MirroredEntity.of(StringEntity),
    ParameterName: StringEntity,
    ExpressionGUID: GuidEntity,
    MaterialExpressionEditorX: MirroredEntity.of(IntegerEntity),
    MaterialExpressionEditorY: MirroredEntity.of(IntegerEntity),
    MaterialExpressionGuid: GuidEntity,
    NodeTitle: StringEntity,
    NodeTitleColor: LinearColorEntity,
    PositionX: MirroredEntity.of(IntegerEntity),
    PositionY: MirroredEntity.of(IntegerEntity),
    SettingsInterface: ObjectReferenceEntity,
    PCGNode: ObjectReferenceEntity,
    SoundNode: ObjectReferenceEntity,
    SoundWaveAssetPtr: ObjectReferenceEntity,
    HiGenGridSize: SymbolEntity,
    Operation: SymbolEntity,
    NodePosX: IntegerEntity,
    NodePosY: IntegerEntity,
    NodeHeight: IntegerEntity,
    NodeWidth: IntegerEntity,
    Graph: ObjectReferenceEntity,
    SubgraphInstance: StringEntity,
    InputPins: ArrayEntity.of(ObjectReferenceEntity).flagInlined(),
    OutputPins: ArrayEntity.of(ObjectReferenceEntity).flagInlined(),
    bExposeToLibrary: BooleanEntity,
    bCanRenameNode: BooleanEntity,
    bCommentBubblePinned: BooleanEntity,
    bCommentBubbleVisible: BooleanEntity,
    NodeComment: StringEntity,
    AdvancedPinDisplay: SymbolEntity,
    DelegateReference: VariableReferenceEntity,
    EnabledState: SymbolEntity,
    NodeGuid: GuidEntity,
    ErrorType: IntegerEntity,
    ErrorMsg: StringEntity,
    ScriptVariables: ArrayEntity.flagInlined().of(ScriptVariableEntity),
    Node: MirroredEntity.of(ObjectReferenceEntity),
    ExportedNodes: StringEntity,
    CustomProperties: ArrayEntity.of(AlternativesEntity.accepting(PinEntity, UnknownPinEntity)).withDefault().flagSilent()
  };
  static customPropertyGrammar = P.seq(
    P.reg(/CustomProperties\s+/),
    this.attributes.CustomProperties.type.grammar
  ).map(([_0, pin]) => (values) => {
    (values.CustomProperties ??= new this.attributes.CustomProperties()).values.push(pin);
  });
  static inlinedArrayEntryGrammar = P.seq(
    P.alt(
      Grammar.symbolQuoted.map((v) => [v, true]),
      Grammar.symbol.map((v) => [v, false])
    ),
    P.reg(new RegExp(String.raw`\s*\(\s*(\d+)\s*\)\s*\=\s*`), 1).map(Number)
    // Number in parentheses then equal
  ).chain(
    /** @param {[[keyof ObjectEntity.attributes, Boolean], Number]} param */
    ([[symbol, quoted], index]) => (this.attributes[symbol]?.grammar ?? IEntity.unknownEntityGrammar).map(
      (currentValue) => (values) => {
        if (values[symbol] === void 0) {
          let arrayEntity = ArrayEntity;
          if (quoted != arrayEntity.quoted) {
            arrayEntity = arrayEntity.flagQuoted(quoted);
          }
          if (!arrayEntity.inlined) {
            arrayEntity = arrayEntity.flagInlined();
          }
          values[symbol] = new arrayEntity();
        }
        const target = values[symbol];
        target.values[index] = currentValue;
      }
    )
  );
  static grammar = this.createGrammar();
  static grammarMultipleObjects = P.seq(
    P.whitespaceOpt,
    this.grammar,
    P.seq(
      P.whitespace,
      this.grammar
    ).map(([_0, object]) => object).many(),
    P.whitespaceOpt
  ).map(([_0, first, remaining, _4]) => [first, ...remaining]);
  constructor(values = {}) {
    if ("NodePosX" in values !== "NodePosY" in values) {
      const entries = Object.entries(values);
      const [key, position] = "NodePosX" in values ? ["NodePosY", Object.keys(values).indexOf("NodePosX") + 1] : ["NodePosX", Object.keys(values).indexOf("NodePosY")];
      entries.splice(position, 0, [key, new IntegerEntity(0)]);
      values = Object.fromEntries(entries);
    }
    super(values);
    this.CustomProperties;
    this.AddedPins;
    this.AdvancedPinDisplay;
    this.Archetype;
    this.AxisKey;
    this.bIsPureFunc;
    this.bDefaultsToPureFunc;
    this.BlueprintElementInstance;
    this.BlueprintElementType;
    this.Class;
    this.CommentColor;
    this.ComponentPropertyName;
    this.ConstA;
    this.ConstB;
    this.CustomFunctionName;
    this.DelegatePropertyName;
    this.DelegateReference;
    this.EnabledState;
    this.Enum;
    this.EnumEntries;
    this.EventReference;
    this.ExportedNodes;
    this.ExportPath;
    this.FunctionDisplayName;
    this.FunctionReference;
    this.FunctionScript;
    this.Graph;
    this.HiGenGridSize;
    this.InputAxisKey;
    this.InputKey;
    this.InputName;
    this.InputPins;
    this.InputType;
    this.MacroGraphReference;
    this.MaterialExpression;
    this.MaterialExpressionComment;
    this.MaterialExpressionEditorX;
    this.MaterialExpressionEditorY;
    this.MaterialFunction;
    this.Name;
    this.Node;
    this.NodeComment;
    this.NodeHeight;
    this.NodePosX;
    this.NodePosY;
    this.NodeTitle;
    this.NodeTitleColor;
    this.NodeWidth;
    this.NumAdditionalInputs;
    this.ObjectRef;
    this.Operation;
    this.OpName;
    this.OutputPins;
    this.ParameterName;
    this.PCGNode;
    this.SoundNode;
    this.SoundWaveAssetPtr;
    this.PinNames;
    this.PinTags;
    this.PositionX;
    this.PositionY;
    this.ProxyFactoryFunctionName;
    this.ScriptVariables;
    this.SettingsInterface;
    this.SizeX;
    this.SizeY;
    this.StructType;
    this.SubgraphInstance;
    this.TargetType;
    this.Text;
    this.Text;
    this.VariableReference;
    if (this["Pins"] instanceof ArrayEntity) {
      this["Pins"].valueOf().forEach(
        /** @param {ObjectReferenceEntity} objectReference */
        (objectReference) => {
          const pinObject = this[Configuration.subObjectAttributeNameFromReference(objectReference, true)];
          if (pinObject) {
            const pinEntity = PinEntity.fromLegacyObject(pinObject);
            pinEntity.LinkedTo = new PinEntity.attributes.LinkedTo();
            this.getCustomproperties(true).push(pinEntity);
            this.CustomProperties.ignored = true;
          }
        }
      );
    }
    const materialSubobject = this.getMaterialSubobject();
    if (materialSubobject) {
      const obj = materialSubobject;
      obj.SizeX !== void 0 && (obj.SizeX.getter = () => this.NodeWidth);
      obj.SizeY && (obj.SizeY.getter = () => this.NodeHeight);
      obj.Text && (obj.Text.getter = () => this.NodeComment);
      obj.MaterialExpressionEditorX && (obj.MaterialExpressionEditorX.getter = () => this.NodePosX);
      obj.MaterialExpressionEditorY && (obj.MaterialExpressionEditorY.getter = () => this.NodePosY);
      if (this.getType() === Configuration.paths.materialExpressionComponentMask) {
        const rgbaPins = Configuration.rgba.map((pinName) => {
          const result = this.getPinEntities().find((pin) => pin.PinName.toString() === pinName);
          result.recomputesNodeTitleOnChange = true;
          return result;
        });
        obj.keys = [...Configuration.rgba, ...obj.keys];
        const silentBool = MirroredEntity.of(BooleanEntity).withDefault().flagSilent();
        obj["R"] = new silentBool(() => rgbaPins[0].DefaultValue);
        obj["G"] = new silentBool(() => rgbaPins[1].DefaultValue);
        obj["B"] = new silentBool(() => rgbaPins[2].DefaultValue);
        obj["A"] = new silentBool(() => rgbaPins[3].DefaultValue);
      } else if (this.getType() === Configuration.paths.materialExpressionSubtract) {
        const silentNumber = MirroredEntity.of(NumberEntity.withPrecision(6)).withDefault(() => new MirroredEntity(() => new NumberEntity(1))).flagSilent();
        const pinA = this.getCustomproperties().find((pin) => pin.PinName?.toString() === "A");
        const pinB = this.getCustomproperties().find((pin) => pin.PinName?.toString() === "B");
        if (pinA || pinB) {
          obj.keys = ["ConstA", "ConstB", ...obj.keys];
          if (pinA) {
            pinA.recomputesNodeTitleOnChange = true;
            obj.ConstA = new silentNumber(() => pinA.DefaultValue);
          }
          if (pinB) {
            pinB.recomputesNodeTitleOnChange = true;
            obj.ConstB = new silentNumber(() => pinB.DefaultValue);
          }
        }
      }
    }
    const pcgObject = this.getPcgSubobject();
    if (pcgObject) {
      pcgObject.PositionX && (pcgObject.PositionX.getter = () => this.NodePosX);
      pcgObject.PositionY && (pcgObject.PositionY.getter = () => this.NodePosY);
      pcgObject.getSubobjects().forEach(
        /** @param {ObjectEntity} obj */
        (obj) => {
          if (obj.Node !== void 0) {
            const nodeRef = obj.Node.getter();
            if (nodeRef.type === this.PCGNode.type && nodeRef.path === `${this.Name}.${this.PCGNode.path}`) {
              obj.Node.getter = () => new ObjectReferenceEntity(
                this.PCGNode.type,
                `${this.Name}.${this.PCGNode.path}`,
                nodeRef.full
              );
            }
          }
        }
      );
    }
    let inputIndex = 0;
    let outputIndex = 0;
    this.getCustomproperties().forEach((pinEntity, i) => {
      pinEntity.objectEntity = this;
      pinEntity.pinIndex = pinEntity.isInput() ? inputIndex++ : pinEntity.isOutput() ? outputIndex++ : i;
    });
    this.mirrorNameInExportPaths();
  }
  /** @returns {P<ObjectEntity>} */
  static createGrammar() {
    return P.seq(
      P.reg(/Begin +Object/),
      P.seq(
        P.whitespace,
        P.alt(
          this.createSubObjectGrammar(),
          this.customPropertyGrammar,
          Grammar.createAttributeGrammar(this, P.reg(Grammar.Regex.MultipleWordsSymbols)),
          Grammar.createAttributeGrammar(
            this,
            Grammar.attributeNameQuoted,
            void 0,
            (values, attributeKey, attributeValue) => {
              Utility.objectSet(values, [...attributeKey, "quoted"], true);
            }
          ),
          this.inlinedArrayEntryGrammar
        )
      ).map(([_0, entry]) => entry).many(),
      P.reg(/\s+End +Object/)
    ).map(([_0, attributes, _2]) => {
      const values = {};
      attributes.forEach((attributeSetter) => attributeSetter(values));
      return new this(values);
    }).label("ObjectEntity");
  }
  static createSubObjectGrammar() {
    return P.lazy(() => this.grammar).map(
      (object) => (values) => {
        object.trailing = false;
        values[Configuration.subObjectAttributeNameFromEntity(object)] = object;
      }
    );
  }
  /**
   * @protected
   * Mirror then name part of the objects contained in this one in ExportPath
   */
  mirrorNameInExportPaths(originalName = this.Name?.toString()) {
    if (!originalName) {
      return;
    }
    const values = [this];
    for (let i = 0; i < values.length; ++i) {
      const value = values[i];
      if (value instanceof ObjectEntity) {
        values.push(...Object.values(value));
        if (!value.ExportPath?.valueOf().path.includes(originalName)) {
          continue;
        }
      } else {
        continue;
      }
      const mirroredEntity = (
        /** @type {typeof ObjectEntity} */
        value.constructor.attributes.ExportPath
      );
      let originalExportPath = value.ExportPath;
      value.ExportPath = new mirroredEntity(
        () => {
          const exportPath = originalExportPath.valueOf();
          return new mirroredEntity.type(
            exportPath.type,
            exportPath.path.replace(originalName, this.Name?.toString() ?? ""),
            exportPath.full
          );
        }
      );
    }
  }
  /** @type {String} */
  #class;
  getClass() {
    if (!this.#class) {
      this.#class = (this.Class?.path ? this.Class.path : this.Class?.type) ?? this.ExportPath?.valueOf()?.type ?? "";
      if (this.#class && !this.#class.startsWith("/")) {
        let path = Object.values(Configuration.paths).find((path2) => path2.endsWith("." + this.#class));
        if (path) {
          this.#class = path;
        }
      }
    }
    return this.#class;
  }
  getType() {
    const path = this.MacroGraphReference?.MacroGraph?.path;
    if (path) {
      return path;
    }
    if (this.MaterialExpression) {
      return this.MaterialExpression.type;
    }
    let subobject = this.getSounCueSubobject();
    if (subobject) {
      return subobject.getClass();
    }
    return this.getClass();
  }
  getObjectName(dropCounter = false) {
    if (dropCounter) {
      return this.getNameAndCounter()[0];
    }
    return this.Name.toString();
  }
  /** @returns {[String, Number]} */
  getNameAndCounter() {
    const result = this.getObjectName().match(ObjectEntity.#nameRegex);
    return result ? [result[1] ?? "", parseInt(result[2] ?? "0")] : ["", 0];
  }
  getCounter() {
    return this.getNameAndCounter()[1];
  }
  getNodeWidth() {
    return this.NodeWidth ?? this.isComment() ? Configuration.defaultCommentWidth : void 0;
  }
  /** @param {Number} value */
  setNodeWidth(value) {
    if (!this.NodeWidth) {
      this.NodeWidth = new IntegerEntity();
    }
    this.NodeWidth.value = value;
  }
  getNodeHeight() {
    return this.NodeHeight ?? this.isComment() ? Configuration.defaultCommentHeight : void 0;
  }
  /** @param {Number} value */
  setNodeHeight(value) {
    if (!this.NodeHeight) {
      this.NodeHeight = new IntegerEntity();
    }
    this.NodeHeight.value = value;
  }
  getNodePosX() {
    return this.NodePosX?.value ?? 0;
  }
  /** @param {Number} value */
  setNodePosX(value) {
    if (!this.NodePosX) {
      this.NodePosX = new IntegerEntity();
    }
    this.NodePosX.value = Math.round(value);
  }
  getNodePosY() {
    return this.NodePosY?.value ?? 0;
  }
  /** @param {Number} value */
  setNodePosY(value) {
    if (!this.NodePosY) {
      this.NodePosY = new IntegerEntity();
    }
    this.NodePosY.value = Math.round(value);
  }
  getCustomproperties(canCreate = false) {
    return this.CustomProperties.values;
  }
  /** @returns {PinEntity[]} */
  getPinEntities() {
    return this.getCustomproperties().filter((v) => v.constructor === PinEntity);
  }
  /** @returns {ObjectEntity[]} */
  getSubobjects() {
    return Object.keys(this).filter((k) => k.startsWith(Configuration.subObjectAttributeNamePrefix)).flatMap((k) => [this[k], .../** @type {ObjectEntity} */
    this[k].getSubobjects()]);
  }
  switchTarget() {
    const switchMatch = this.getClass().match(Configuration.switchTargetPattern);
    if (switchMatch) {
      return switchMatch[1];
    }
  }
  isEvent() {
    switch (this.getClass()) {
      case Configuration.paths.actorBoundEvent:
      case Configuration.paths.componentBoundEvent:
      case Configuration.paths.customEvent:
      case Configuration.paths.event:
      case Configuration.paths.inputAxisKeyEvent:
      case Configuration.paths.inputVectorAxisEvent:
        return true;
    }
    return false;
  }
  isComment() {
    switch (this.getClass()) {
      case Configuration.paths.comment:
      case Configuration.paths.materialGraphNodeComment:
        return true;
    }
    return false;
  }
  isMaterial() {
    const classValue = this.getClass();
    return classValue.startsWith("/Script/Engine.MaterialExpression") || classValue.startsWith("/Script/InterchangeImport.MaterialExpression") || classValue.startsWith("/Script/UnrealEd.MaterialGraph");
  }
  /** @return {ObjectEntity} */
  getMaterialSubobject() {
    const expression = this.MaterialExpression ?? this.MaterialExpressionComment;
    return expression ? this[Configuration.subObjectAttributeNameFromReference(expression, true)] : null;
  }
  isPcg() {
    return this.getClass() == Configuration.paths.pcgEditorGraphNode || this.getPcgSubobject() != null;
  }
  isNiagara() {
    return this.Class && (this.Class.type ? this.Class.type : this.Class.path)?.startsWith("/Script/NiagaraEditor.");
  }
  isSoundCue() {
    return this.getClass() == Configuration.paths.soundCueGraphNode;
  }
  getBlueprintType() {
    if (this.isMaterial()) {
      return "MATERIAL";
    }
    if (this.isNiagara()) {
      return "NIAGARA";
    }
    if (this.isPcg()) {
      return "PCG Graph";
    }
    if (this.isSoundCue()) {
      return "SOUND CUE";
    }
    return "BLUEPRINT";
  }
  /** @return {ObjectEntity} */
  getPcgSubobject() {
    const node = this.PCGNode;
    return node ? this[Configuration.subObjectAttributeNameFromReference(node, true)] : null;
  }
  /** @return {ObjectEntity} */
  getSounCueSubobject() {
    const node = this.SoundNode;
    return node ? this[Configuration.subObjectAttributeNameFromReference(node, true)] : null;
  }
  /** @return {ObjectEntity} */
  getSettingsObject() {
    const settings = this.SettingsInterface;
    return settings ? this[Configuration.subObjectAttributeNameFromReference(settings, true)] : null;
  }
  /** @return {ObjectEntity} */
  getSubgraphObject() {
    const name = this.SubgraphInstance;
    return name ? this[Configuration.subObjectAttributeNameFromName(name)] : null;
  }
  isDevelopmentOnly() {
    const nodeClass = this.getClass();
    return this.EnabledState?.toString() === "DevelopmentOnly" || nodeClass.includes("Debug", Math.max(0, nodeClass.lastIndexOf(".")));
  }
  getHIDAttribute() {
    return this.InputKey ?? this.AxisKey ?? this.InputAxisKey;
  }
  getDelegatePin() {
    return this.getCustomproperties().find((pin) => pin.PinType.PinCategory.toString() === "delegate");
  }
  nodeColor() {
    return hooks.nodeColor(this);
  }
  nodeIcon() {
    return hooks.nodeIcon(this);
  }
  additionalPinInserter() {
    return hooks.additionalPinInserter(this);
  }
  /** @param {String} key */
  showProperty(key) {
    switch (key) {
      case "Class":
      case "Name":
      case "Archetype":
      case "ExportPath":
      case "CustomProperties":
        return false;
    }
    return super.showProperty(key);
  }
  /** @param {typeof ObjectEntity} Self */
  doSerialize(insideString = false, indentation = "", Self = (
    /** @type {typeof ObjectEntity} */
    this.constructor
  ), printKey = Self.printKey, keySeparator = Self.keySeparator, attributeSeparator = Self.attributeSeparator, wrap = Self.wrap) {
    const isSelfOverriden = Self !== this.constructor;
    const deeperIndentation = indentation + Configuration.indentation;
    const initial_trailing = this.trailing;
    this.trailing = true;
    const content = super.doSerialize(insideString, deeperIndentation, Self, printKey, keySeparator, attributeSeparator, wrap);
    this.trailing = initial_trailing;
    let result = indentation + "Begin Object" + (this.Class?.type || this.Class?.path ? ` Class${keySeparator}${this.Class.serialize(insideString)}` : "") + (this.Name ? ` Name${keySeparator}${this.Name.serialize(insideString)}` : "") + (this.Archetype ? ` Archetype${keySeparator}${this.Archetype.serialize(insideString)}` : "") + (this.ExportPath?.valueOf()?.type || this.ExportPath?.valueOf()?.path ? ` ExportPath${keySeparator}${this.ExportPath.serialize(insideString)}` : "") + attributeSeparator + content + (Self.attributes.CustomProperties.ignored !== true && this.CustomProperties.ignored !== true ? this.getCustomproperties().map(
      (pin) => deeperIndentation + printKey("CustomProperties ") + pin.serialize(insideString) + attributeSeparator
    ).join("") : "") + indentation + "End Object" + (isSelfOverriden && Self.trailing || this.trailing ? attributeSeparator : "");
    return result;
  }
}
class BlueprintEntity extends ObjectEntity {
  /** @type {Map<String, Number>} */
  #objectEntitiesNameCounter = /* @__PURE__ */ new Map();
  /** @type {ObjectEntity[]}" */
  #objectEntities = [];
  get objectEntities() {
    return this.#objectEntities;
  }
  static attributes = {
    ...super.attributes,
    ScriptVariables: super.attributes.ScriptVariables.asUniqueClass(true).withDefault()
  };
  constructor(...args) {
    super(...args);
    if (!this.Name) {
      this.Name = new /** @type {typeof ObjectEntity} */
      this.constructor.attributes.Name("Blueprint");
    }
  }
  /** @param {ObjectEntity} entity */
  getHomonymObjectEntity(entity) {
    const name = entity.getObjectName();
    return this.#objectEntities.find((entity2) => entity2.getObjectName() == name);
  }
  /** @param {String} name */
  takeFreeName(name) {
    name = name.replace(/_\d+$/, "");
    const counter = (this.#objectEntitiesNameCounter.get(name) ?? -1) + 1;
    this.#objectEntitiesNameCounter.set(name, counter);
    return Configuration.nodeTitle(name, counter);
  }
  /** @param {String} name */
  updateNameIndex(name) {
    const match = name.match(/(.+)_(\d+)$/);
    if (match) {
      name = match[1];
      const index = Number(match[2]);
      this.#objectEntitiesNameCounter.set(name, Math.max(index, this.#objectEntitiesNameCounter.get(name) ?? 0));
    }
  }
  /** @param {ObjectEntity} entity */
  addObjectEntity(entity) {
    if (!this.#objectEntities.includes(entity)) {
      this.#objectEntities.push(entity);
      const [name, counter] = entity.getNameAndCounter();
      this.#objectEntitiesNameCounter.set(
        name,
        Math.max(this.#objectEntitiesNameCounter.get(name) ?? 0, counter)
      );
      return true;
    }
    return false;
  }
  /** @param {ObjectEntity} entity */
  removeObjectEntity(entity) {
    const index = this.#objectEntities.indexOf(entity);
    if (index >= 0) {
      const last = this.#objectEntities.pop();
      if (index < this.#objectEntities.length) {
        this.#objectEntities[index] = last;
      }
      return true;
    }
    return false;
  }
  /**
   * @param {ObjectReferenceEntity} variable
   * @param {IEntity} entity
   */
  renameScriptVariable(variable, entity) {
    const name = variable.getName();
    const newName = this.takeFreeName(name);
    {
      [true, false].forEach((v) => {
        let object = this[Configuration.subObjectAttributeNameFromReference(variable, v)];
        object.Name.value = newName;
        object.Name = object.Name;
      });
    }
    variable.path.replace(name, newName);
    return newName;
  }
  /**
   * @param {ScriptVariableEntity} scriptVariableEntity
   * @returns {String}
   */
  variableName(scriptVariableEntity) {
    return this[Configuration.subObjectAttributeNameFromReference(scriptVariableEntity.ScriptVariable, true)]?.["Variable"]?.["Name"]?.toString();
  }
  /** @param {String} variableName */
  variableIndex(variableName) {
    let i = 0;
    for (const v of this.ScriptVariables?.valueOf()) {
      if (variableName == this.variableName(v)) {
        return i;
      }
      ++i;
    }
  }
  /** @param {ObjectEntity} entity */
  mergeWith(entity) {
    if ((entity.ScriptVariables?.length ?? 0) === 0) {
      return this;
    }
    const variableObjectNames = this.ScriptVariables.valueOf().map((v) => v.ScriptVariable.getName());
    let scriptVariables = Utility.mergeArrays(
      this.ScriptVariables.valueOf(),
      entity.ScriptVariables.valueOf(),
      (l, r) => this.variableName(l) == this.variableName(r),
      (added) => {
        let name = added.ScriptVariable.getName();
        if (variableObjectNames.includes(name)) {
          name = this.renameScriptVariable(added.ScriptVariable, entity);
        }
        this.updateNameIndex(name);
      }
    );
    if (scriptVariables.length === this.ScriptVariables.length) {
      return this;
    }
    scriptVariables.reverse();
    const blueprintEntity = (
      /** @type {typeof BlueprintEntity} */
      this.constructor
    );
    const entries = scriptVariables.concat(scriptVariables).map((v, i) => {
      const name = Configuration.subObjectAttributeNameFromReference(
        v.ScriptVariable,
        i >= scriptVariables.length
        // First take all the small objects then all name only
      );
      const object = this[name] ?? entity[name];
      return object ? [name, object] : null;
    }).filter((v) => v);
    entries.push(
      ...Object.entries(this).filter(
        ([k, v]) => !k.startsWith(Configuration.subObjectAttributeNamePrefix) && k !== "ExportedNodes"
      ),
      ["ScriptVariables", new blueprintEntity.attributes.ScriptVariables(scriptVariables.reverse())]
    );
    const result = new BlueprintEntity(Object.fromEntries(entries));
    result.mirrorNameInExportPaths(entity.Name?.toString());
    result.#objectEntitiesNameCounter = this.#objectEntitiesNameCounter;
    result.#objectEntities = this.#objectEntities;
    return result;
  }
  /** @param {ObjectEntity[]} entities */
  getVariablesAttributesReferringTo(...entities) {
    let pins = new Set(...entities.flatMap((entity) => entity.getPinEntities()).map((pin) => pin.PinName.toString()));
    this.ScriptVariables.valueOf().map((v) => {
      const keySimple = Configuration.subObjectAttributeNameFromReference(v.ScriptVariable, false);
      const keyFull = Configuration.subObjectAttributeNameFromReference(v.ScriptVariable, true);
      return {
        simple: [keySimple, this[keySimple]],
        full: [keyFull, this[keyFull]],
        variable: v
      };
    }).filter((v) => pins.has(v.full?.["Variable"]?.["Name"])).reduce(
      (acc, cur) => {
        acc.simple.push([cur.simple[0], cur.simple[1]]);
        acc.full.push([cur.full[0], cur.full[1]]);
        acc.ScriptVariables.push(cur.variable);
        return acc;
      },
      { simple: [], full: [], ScriptVariables: [] }
    );
    return {};
  }
}
initializeSerializerFactory();
export {
  AlternativesEntity,
  ArrayEntity,
  BlueprintEntity,
  BooleanEntity,
  CSSValue,
  Configuration,
  Grammar,
  IEntity,
  ObjectEntity,
  PinEntity,
  Utility,
  cssValue,
  initializeSerializerFactory,
  hooks as presentationHooks,
  registerPresentationHooks
};
