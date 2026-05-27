# `cloudwatchAlarmMuteRule` Submodule <a name="`cloudwatchAlarmMuteRule` Submodule" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchAlarmMuteRule <a name="CloudwatchAlarmMuteRule" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule aws_cloudwatch_alarm_mute_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer"></a>

```typescript
import { cloudwatchAlarmMuteRule } from '@cdktn/provider-aws'

new cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule(scope: Construct, id: string, config: CloudwatchAlarmMuteRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig">CloudwatchAlarmMuteRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig">CloudwatchAlarmMuteRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.putMuteTargets">putMuteTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetExpireDate">resetExpireDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetMuteTargets">resetMuteTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetRule">resetRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetStartDate">resetStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMuteTargets` <a name="putMuteTargets" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.putMuteTargets"></a>

```typescript
public putMuteTargets(value: IResolvable | CloudwatchAlarmMuteRuleMuteTargets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.putMuteTargets.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a>[]

---

##### `putRule` <a name="putRule" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.putRule"></a>

```typescript
public putRule(value: IResolvable | CloudwatchAlarmMuteRuleRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.putRule.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExpireDate` <a name="resetExpireDate" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetExpireDate"></a>

```typescript
public resetExpireDate(): void
```

##### `resetMuteTargets` <a name="resetMuteTargets" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetMuteTargets"></a>

```typescript
public resetMuteTargets(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRule` <a name="resetRule" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetRule"></a>

```typescript
public resetRule(): void
```

##### `resetStartDate` <a name="resetStartDate" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetStartDate"></a>

```typescript
public resetStartDate(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchAlarmMuteRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isConstruct"></a>

```typescript
import { cloudwatchAlarmMuteRule } from '@cdktn/provider-aws'

cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isTerraformElement"></a>

```typescript
import { cloudwatchAlarmMuteRule } from '@cdktn/provider-aws'

cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isTerraformResource"></a>

```typescript
import { cloudwatchAlarmMuteRule } from '@cdktn/provider-aws'

cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.generateConfigForImport"></a>

```typescript
import { cloudwatchAlarmMuteRule } from '@cdktn/provider-aws'

cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudwatchAlarmMuteRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchAlarmMuteRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchAlarmMuteRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchAlarmMuteRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.lastUpdatedTimestamp">lastUpdatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.muteTargets">muteTargets</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList">CloudwatchAlarmMuteRuleMuteTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.muteType">muteType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList">CloudwatchAlarmMuteRuleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.tagsAll">tagsAll</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.expireDateInput">expireDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.muteTargetsInput">muteTargetsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.ruleInput">ruleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.startDateInput">startDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.expireDate">expireDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.startDate">startDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="lastUpdatedTimestamp" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.lastUpdatedTimestamp"></a>

```typescript
public readonly lastUpdatedTimestamp: string;
```

- *Type:* string

---

##### `muteTargets`<sup>Required</sup> <a name="muteTargets" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.muteTargets"></a>

```typescript
public readonly muteTargets: CloudwatchAlarmMuteRuleMuteTargetsList;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList">CloudwatchAlarmMuteRuleMuteTargetsList</a>

---

##### `muteType`<sup>Required</sup> <a name="muteType" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.muteType"></a>

```typescript
public readonly muteType: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.rule"></a>

```typescript
public readonly rule: CloudwatchAlarmMuteRuleRuleList;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList">CloudwatchAlarmMuteRuleRuleList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expireDateInput`<sup>Optional</sup> <a name="expireDateInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.expireDateInput"></a>

```typescript
public readonly expireDateInput: string;
```

- *Type:* string

---

##### `muteTargetsInput`<sup>Optional</sup> <a name="muteTargetsInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.muteTargetsInput"></a>

```typescript
public readonly muteTargetsInput: IResolvable | CloudwatchAlarmMuteRuleMuteTargets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | CloudwatchAlarmMuteRuleRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a>[]

---

##### `startDateInput`<sup>Optional</sup> <a name="startDateInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.startDateInput"></a>

```typescript
public readonly startDateInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expireDate`<sup>Required</sup> <a name="expireDate" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.expireDate"></a>

```typescript
public readonly expireDate: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchAlarmMuteRuleConfig <a name="CloudwatchAlarmMuteRuleConfig" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.Initializer"></a>

```typescript
import { cloudwatchAlarmMuteRule } from '@cdktn/provider-aws'

const cloudwatchAlarmMuteRuleConfig: cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#name CloudwatchAlarmMuteRule#name}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#description CloudwatchAlarmMuteRule#description}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.expireDate">expireDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#expire_date CloudwatchAlarmMuteRule#expire_date}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.muteTargets">muteTargets</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a>[]</code> | mute_targets block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.rule">rule</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a>[]</code> | rule block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.startDate">startDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#start_date CloudwatchAlarmMuteRule#start_date}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#tags CloudwatchAlarmMuteRule#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#name CloudwatchAlarmMuteRule#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#description CloudwatchAlarmMuteRule#description}.

---

##### `expireDate`<sup>Optional</sup> <a name="expireDate" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.expireDate"></a>

```typescript
public readonly expireDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#expire_date CloudwatchAlarmMuteRule#expire_date}.

---

##### `muteTargets`<sup>Optional</sup> <a name="muteTargets" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.muteTargets"></a>

```typescript
public readonly muteTargets: IResolvable | CloudwatchAlarmMuteRuleMuteTargets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a>[]

mute_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#mute_targets CloudwatchAlarmMuteRule#mute_targets}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#region CloudwatchAlarmMuteRule#region}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.rule"></a>

```typescript
public readonly rule: IResolvable | CloudwatchAlarmMuteRuleRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#rule CloudwatchAlarmMuteRule#rule}

---

##### `startDate`<sup>Optional</sup> <a name="startDate" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#start_date CloudwatchAlarmMuteRule#start_date}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#tags CloudwatchAlarmMuteRule#tags}.

---

### CloudwatchAlarmMuteRuleMuteTargets <a name="CloudwatchAlarmMuteRuleMuteTargets" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets.Initializer"></a>

```typescript
import { cloudwatchAlarmMuteRule } from '@cdktn/provider-aws'

const cloudwatchAlarmMuteRuleMuteTargets: cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets.property.alarmNames">alarmNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#alarm_names CloudwatchAlarmMuteRule#alarm_names}. |

---

##### `alarmNames`<sup>Required</sup> <a name="alarmNames" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets.property.alarmNames"></a>

```typescript
public readonly alarmNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#alarm_names CloudwatchAlarmMuteRule#alarm_names}.

---

### CloudwatchAlarmMuteRuleRule <a name="CloudwatchAlarmMuteRuleRule" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule.Initializer"></a>

```typescript
import { cloudwatchAlarmMuteRule } from '@cdktn/provider-aws'

const cloudwatchAlarmMuteRuleRule: cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule.property.schedule">schedule</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a>[]</code> | schedule block. |

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule.property.schedule"></a>

```typescript
public readonly schedule: IResolvable | CloudwatchAlarmMuteRuleRuleSchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a>[]

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#schedule CloudwatchAlarmMuteRule#schedule}

---

### CloudwatchAlarmMuteRuleRuleSchedule <a name="CloudwatchAlarmMuteRuleRuleSchedule" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule.Initializer"></a>

```typescript
import { cloudwatchAlarmMuteRule } from '@cdktn/provider-aws'

const cloudwatchAlarmMuteRuleRuleSchedule: cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule.property.duration">duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#duration CloudwatchAlarmMuteRule#duration}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#expression CloudwatchAlarmMuteRule#expression}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule.property.timezone">timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#timezone CloudwatchAlarmMuteRule#timezone}. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#duration CloudwatchAlarmMuteRule#duration}.

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#expression CloudwatchAlarmMuteRule#expression}.

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#timezone CloudwatchAlarmMuteRule#timezone}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchAlarmMuteRuleMuteTargetsList <a name="CloudwatchAlarmMuteRuleMuteTargetsList" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.Initializer"></a>

```typescript
import { cloudwatchAlarmMuteRule } from '@cdktn/provider-aws'

new cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.get"></a>

```typescript
public get(index: number): CloudwatchAlarmMuteRuleMuteTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAlarmMuteRuleMuteTargets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a>[]

---


### CloudwatchAlarmMuteRuleMuteTargetsOutputReference <a name="CloudwatchAlarmMuteRuleMuteTargetsOutputReference" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer"></a>

```typescript
import { cloudwatchAlarmMuteRule } from '@cdktn/provider-aws'

new cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.alarmNamesInput">alarmNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.alarmNames">alarmNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alarmNamesInput`<sup>Optional</sup> <a name="alarmNamesInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.alarmNamesInput"></a>

```typescript
public readonly alarmNamesInput: string[];
```

- *Type:* string[]

---

##### `alarmNames`<sup>Required</sup> <a name="alarmNames" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.alarmNames"></a>

```typescript
public readonly alarmNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAlarmMuteRuleMuteTargets;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a>

---


### CloudwatchAlarmMuteRuleRuleList <a name="CloudwatchAlarmMuteRuleRuleList" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.Initializer"></a>

```typescript
import { cloudwatchAlarmMuteRule } from '@cdktn/provider-aws'

new cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.get"></a>

```typescript
public get(index: number): CloudwatchAlarmMuteRuleRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAlarmMuteRuleRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a>[]

---


### CloudwatchAlarmMuteRuleRuleOutputReference <a name="CloudwatchAlarmMuteRuleRuleOutputReference" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.Initializer"></a>

```typescript
import { cloudwatchAlarmMuteRule } from '@cdktn/provider-aws'

new cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.resetSchedule">resetSchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSchedule` <a name="putSchedule" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.putSchedule"></a>

```typescript
public putSchedule(value: IResolvable | CloudwatchAlarmMuteRuleRuleSchedule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.putSchedule.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a>[]

---

##### `resetSchedule` <a name="resetSchedule" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.resetSchedule"></a>

```typescript
public resetSchedule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList">CloudwatchAlarmMuteRuleRuleScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.schedule"></a>

```typescript
public readonly schedule: CloudwatchAlarmMuteRuleRuleScheduleList;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList">CloudwatchAlarmMuteRuleRuleScheduleList</a>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: IResolvable | CloudwatchAlarmMuteRuleRuleSchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAlarmMuteRuleRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a>

---


### CloudwatchAlarmMuteRuleRuleScheduleList <a name="CloudwatchAlarmMuteRuleRuleScheduleList" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.Initializer"></a>

```typescript
import { cloudwatchAlarmMuteRule } from '@cdktn/provider-aws'

new cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.get"></a>

```typescript
public get(index: number): CloudwatchAlarmMuteRuleRuleScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAlarmMuteRuleRuleSchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a>[]

---


### CloudwatchAlarmMuteRuleRuleScheduleOutputReference <a name="CloudwatchAlarmMuteRuleRuleScheduleOutputReference" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer"></a>

```typescript
import { cloudwatchAlarmMuteRule } from '@cdktn/provider-aws'

new cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.resetTimezone">resetTimezone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimezone` <a name="resetTimezone" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.resetTimezone"></a>

```typescript
public resetTimezone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAlarmMuteRuleRuleSchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a>

---



