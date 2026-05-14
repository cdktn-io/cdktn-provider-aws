# `observabilityadminTelemetryRule` Submodule <a name="`observabilityadminTelemetryRule` Submodule" id="@cdktn/provider-aws.observabilityadminTelemetryRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObservabilityadminTelemetryRule <a name="ObservabilityadminTelemetryRule" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/observabilityadmin_telemetry_rule aws_observabilityadmin_telemetry_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer"></a>

```typescript
import { observabilityadminTelemetryRule } from '@cdktn/provider-aws'

new observabilityadminTelemetryRule.ObservabilityadminTelemetryRule(scope: Construct, id: string, config: ObservabilityadminTelemetryRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig">ObservabilityadminTelemetryRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig">ObservabilityadminTelemetryRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.resetRule">resetRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRule` <a name="putRule" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.putRule"></a>

```typescript
public putRule(value: IResolvable | ObservabilityadminTelemetryRuleRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.putRule.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule">ObservabilityadminTelemetryRuleRule</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.putTimeouts"></a>

```typescript
public putTimeouts(value: ObservabilityadminTelemetryRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeouts">ObservabilityadminTelemetryRuleTimeouts</a>

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRule` <a name="resetRule" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.resetRule"></a>

```typescript
public resetRule(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ObservabilityadminTelemetryRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.isConstruct"></a>

```typescript
import { observabilityadminTelemetryRule } from '@cdktn/provider-aws'

observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.isTerraformElement"></a>

```typescript
import { observabilityadminTelemetryRule } from '@cdktn/provider-aws'

observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.isTerraformResource"></a>

```typescript
import { observabilityadminTelemetryRule } from '@cdktn/provider-aws'

observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.generateConfigForImport"></a>

```typescript
import { observabilityadminTelemetryRule } from '@cdktn/provider-aws'

observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ObservabilityadminTelemetryRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ObservabilityadminTelemetryRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ObservabilityadminTelemetryRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/observabilityadmin_telemetry_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ObservabilityadminTelemetryRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList">ObservabilityadminTelemetryRuleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.ruleArn">ruleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.tagsAll">tagsAll</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference">ObservabilityadminTelemetryRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.ruleInput">ruleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule">ObservabilityadminTelemetryRuleRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.ruleNameInput">ruleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeouts">ObservabilityadminTelemetryRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.rule"></a>

```typescript
public readonly rule: ObservabilityadminTelemetryRuleRuleList;
```

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList">ObservabilityadminTelemetryRuleRuleList</a>

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.timeouts"></a>

```typescript
public readonly timeouts: ObservabilityadminTelemetryRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference">ObservabilityadminTelemetryRuleTimeoutsOutputReference</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | ObservabilityadminTelemetryRuleRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule">ObservabilityadminTelemetryRuleRule</a>[]

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.ruleNameInput"></a>

```typescript
public readonly ruleNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ObservabilityadminTelemetryRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeouts">ObservabilityadminTelemetryRuleTimeouts</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ObservabilityadminTelemetryRuleConfig <a name="ObservabilityadminTelemetryRuleConfig" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.Initializer"></a>

```typescript
import { observabilityadminTelemetryRule } from '@cdktn/provider-aws'

const observabilityadminTelemetryRuleConfig: observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.ruleName">ruleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/observabilityadmin_telemetry_rule#rule_name ObservabilityadminTelemetryRule#rule_name}. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.rule">rule</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule">ObservabilityadminTelemetryRuleRule</a>[]</code> | rule block. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/observabilityadmin_telemetry_rule#tags ObservabilityadminTelemetryRule#tags}. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeouts">ObservabilityadminTelemetryRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/observabilityadmin_telemetry_rule#rule_name ObservabilityadminTelemetryRule#rule_name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/observabilityadmin_telemetry_rule#region ObservabilityadminTelemetryRule#region}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.rule"></a>

```typescript
public readonly rule: IResolvable | ObservabilityadminTelemetryRuleRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule">ObservabilityadminTelemetryRuleRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/observabilityadmin_telemetry_rule#rule ObservabilityadminTelemetryRule#rule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/observabilityadmin_telemetry_rule#tags ObservabilityadminTelemetryRule#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ObservabilityadminTelemetryRuleTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeouts">ObservabilityadminTelemetryRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/observabilityadmin_telemetry_rule#timeouts ObservabilityadminTelemetryRule#timeouts}

---

### ObservabilityadminTelemetryRuleRule <a name="ObservabilityadminTelemetryRuleRule" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule.Initializer"></a>

```typescript
import { observabilityadminTelemetryRule } from '@cdktn/provider-aws'

const observabilityadminTelemetryRuleRule: observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule.property.telemetryType">telemetryType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/observabilityadmin_telemetry_rule#telemetry_type ObservabilityadminTelemetryRule#telemetry_type}. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/observabilityadmin_telemetry_rule#resource_type ObservabilityadminTelemetryRule#resource_type}. |

---

##### `telemetryType`<sup>Required</sup> <a name="telemetryType" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule.property.telemetryType"></a>

```typescript
public readonly telemetryType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/observabilityadmin_telemetry_rule#telemetry_type ObservabilityadminTelemetryRule#telemetry_type}.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/observabilityadmin_telemetry_rule#resource_type ObservabilityadminTelemetryRule#resource_type}.

---

### ObservabilityadminTelemetryRuleTimeouts <a name="ObservabilityadminTelemetryRuleTimeouts" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeouts.Initializer"></a>

```typescript
import { observabilityadminTelemetryRule } from '@cdktn/provider-aws'

const observabilityadminTelemetryRuleTimeouts: observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/observabilityadmin_telemetry_rule#create ObservabilityadminTelemetryRule#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/observabilityadmin_telemetry_rule#delete ObservabilityadminTelemetryRule#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/observabilityadmin_telemetry_rule#update ObservabilityadminTelemetryRule#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ObservabilityadminTelemetryRuleRuleList <a name="ObservabilityadminTelemetryRuleRuleList" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.Initializer"></a>

```typescript
import { observabilityadminTelemetryRule } from '@cdktn/provider-aws'

new observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.get"></a>

```typescript
public get(index: number): ObservabilityadminTelemetryRuleRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule">ObservabilityadminTelemetryRuleRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminTelemetryRuleRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule">ObservabilityadminTelemetryRuleRule</a>[]

---


### ObservabilityadminTelemetryRuleRuleOutputReference <a name="ObservabilityadminTelemetryRuleRuleOutputReference" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.Initializer"></a>

```typescript
import { observabilityadminTelemetryRule } from '@cdktn/provider-aws'

new observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.resetResourceType">resetResourceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceType` <a name="resetResourceType" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.resetResourceType"></a>

```typescript
public resetResourceType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.telemetryTypeInput">telemetryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.telemetryType">telemetryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule">ObservabilityadminTelemetryRuleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `telemetryTypeInput`<sup>Optional</sup> <a name="telemetryTypeInput" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.telemetryTypeInput"></a>

```typescript
public readonly telemetryTypeInput: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `telemetryType`<sup>Required</sup> <a name="telemetryType" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.telemetryType"></a>

```typescript
public readonly telemetryType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminTelemetryRuleRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule">ObservabilityadminTelemetryRuleRule</a>

---


### ObservabilityadminTelemetryRuleTimeoutsOutputReference <a name="ObservabilityadminTelemetryRuleTimeoutsOutputReference" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { observabilityadminTelemetryRule } from '@cdktn/provider-aws'

new observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeouts">ObservabilityadminTelemetryRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminTelemetryRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTimeouts">ObservabilityadminTelemetryRuleTimeouts</a>

---



