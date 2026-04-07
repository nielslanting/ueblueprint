const hooks = {
    nodeColor: () => null,
    nodeIcon: () => null,
    additionalPinInserter: () => undefined,
    pinTitle: entity => entity.PinName?.toString() ?? "",
    pinColor: () => null,
}

export function registerPresentationHooks(overrides = {}) {
    Object.assign(hooks, overrides)
}

export default hooks
