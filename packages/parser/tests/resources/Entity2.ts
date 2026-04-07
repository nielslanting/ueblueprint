import ArrayEntity from "../../src/entity/ArrayEntity.js"
import BooleanEntity from "../../src/entity/BooleanEntity.js"
import IEntity from "../../src/entity/IEntity.js"
import NumberEntity from "../../src/entity/NumberEntity.js"
import StringEntity from "../../src/entity/StringEntity.js"
import Entity1 from "./Entity1.js"

export default class Entity2 extends IEntity {

    static attributeSeparator = "\n"
    static keySeparator = ": "
    static printKey = k => `    ${k}`
    static wrap = (entity, v) => `{\n${v}\n}`
    static attributes = {
        ...super.attributes,
        someNumber: NumberEntity.withDefault(type => new type(567)),
        someString: StringEntity.withDefault(type => new type("alpha")),
        someString2: StringEntity.withDefault(type => new type("beta")),
        someBoolean: BooleanEntity.withDefault(type => new type(true)),
        someBoolean2: BooleanEntity.withDefault(),
        someObjectString: StringEntity.withDefault(type => new type("gamma")),
        someArray: ArrayEntity.of(NumberEntity).withDefault(type => new type([
            new NumberEntity(400),
            new NumberEntity(500),
            new NumberEntity(600),
            new NumberEntity(700),
            new NumberEntity(800),
        ])),
        someArray2: ArrayEntity.of(NumberEntity).withDefault(type => new type([
            new NumberEntity(-400),
            new NumberEntity(-500),
            new NumberEntity(-600),
            new NumberEntity(-700),
            new NumberEntity(-800),
        ])),
        someEntity: Entity1.withDefault(),
    }
}
