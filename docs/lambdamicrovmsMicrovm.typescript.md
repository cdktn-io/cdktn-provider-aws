# `lambdamicrovmsMicrovm` Submodule <a name="`lambdamicrovmsMicrovm` Submodule" id="@cdktn/provider-aws.lambdamicrovmsMicrovm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdamicrovmsMicrovm <a name="LambdamicrovmsMicrovm" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm aws_lambdamicrovms_microvm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer"></a>

```typescript
import { lambdamicrovmsMicrovm } from '@cdktn/provider-aws'

new lambdamicrovmsMicrovm.LambdamicrovmsMicrovm(scope: Construct, id: string, config: LambdamicrovmsMicrovmConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig">LambdamicrovmsMicrovmConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig">LambdamicrovmsMicrovmConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putIdlePolicy">putIdlePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putLogging">putLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetEgressNetworkConnectors">resetEgressNetworkConnectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetExecutionRoleArn">resetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetIdlePolicy">resetIdlePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetImageVersion">resetImageVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetIngressNetworkConnectors">resetIngressNetworkConnectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetLogging">resetLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetMaximumDurationInSeconds">resetMaximumDurationInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetRunHookPayload">resetRunHookPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdlePolicy` <a name="putIdlePolicy" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putIdlePolicy"></a>

```typescript
public putIdlePolicy(value: IResolvable | LambdamicrovmsMicrovmIdlePolicy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putIdlePolicy.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a>[]

---

##### `putLogging` <a name="putLogging" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putLogging"></a>

```typescript
public putLogging(value: IResolvable | LambdamicrovmsMicrovmLogging[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putLogging.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putTimeouts"></a>

```typescript
public putTimeouts(value: LambdamicrovmsMicrovmTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts">LambdamicrovmsMicrovmTimeouts</a>

---

##### `resetEgressNetworkConnectors` <a name="resetEgressNetworkConnectors" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetEgressNetworkConnectors"></a>

```typescript
public resetEgressNetworkConnectors(): void
```

##### `resetExecutionRoleArn` <a name="resetExecutionRoleArn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetExecutionRoleArn"></a>

```typescript
public resetExecutionRoleArn(): void
```

##### `resetIdlePolicy` <a name="resetIdlePolicy" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetIdlePolicy"></a>

```typescript
public resetIdlePolicy(): void
```

##### `resetImageVersion` <a name="resetImageVersion" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetImageVersion"></a>

```typescript
public resetImageVersion(): void
```

##### `resetIngressNetworkConnectors` <a name="resetIngressNetworkConnectors" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetIngressNetworkConnectors"></a>

```typescript
public resetIngressNetworkConnectors(): void
```

##### `resetLogging` <a name="resetLogging" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetLogging"></a>

```typescript
public resetLogging(): void
```

##### `resetMaximumDurationInSeconds` <a name="resetMaximumDurationInSeconds" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetMaximumDurationInSeconds"></a>

```typescript
public resetMaximumDurationInSeconds(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRunHookPayload` <a name="resetRunHookPayload" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetRunHookPayload"></a>

```typescript
public resetRunHookPayload(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LambdamicrovmsMicrovm resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isConstruct"></a>

```typescript
import { lambdamicrovmsMicrovm } from '@cdktn/provider-aws'

lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isTerraformElement"></a>

```typescript
import { lambdamicrovmsMicrovm } from '@cdktn/provider-aws'

lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isTerraformResource"></a>

```typescript
import { lambdamicrovmsMicrovm } from '@cdktn/provider-aws'

lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.generateConfigForImport"></a>

```typescript
import { lambdamicrovmsMicrovm } from '@cdktn/provider-aws'

lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LambdamicrovmsMicrovm resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LambdamicrovmsMicrovm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LambdamicrovmsMicrovm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LambdamicrovmsMicrovm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.idlePolicy">idlePolicy</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList">LambdamicrovmsMicrovmIdlePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.logging">logging</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList">LambdamicrovmsMicrovmLoggingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.microvmId">microvmId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.startedAt">startedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference">LambdamicrovmsMicrovmTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.egressNetworkConnectorsInput">egressNetworkConnectorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.idlePolicyInput">idlePolicyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageArnInput">imageArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageVersionInput">imageVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.ingressNetworkConnectorsInput">ingressNetworkConnectorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.loggingInput">loggingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.maximumDurationInSecondsInput">maximumDurationInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.runHookPayloadInput">runHookPayloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts">LambdamicrovmsMicrovmTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.egressNetworkConnectors">egressNetworkConnectors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageArn">imageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageVersion">imageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.ingressNetworkConnectors">ingressNetworkConnectors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.maximumDurationInSeconds">maximumDurationInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.runHookPayload">runHookPayload</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `idlePolicy`<sup>Required</sup> <a name="idlePolicy" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.idlePolicy"></a>

```typescript
public readonly idlePolicy: LambdamicrovmsMicrovmIdlePolicyList;
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList">LambdamicrovmsMicrovmIdlePolicyList</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.logging"></a>

```typescript
public readonly logging: LambdamicrovmsMicrovmLoggingList;
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList">LambdamicrovmsMicrovmLoggingList</a>

---

##### `microvmId`<sup>Required</sup> <a name="microvmId" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.microvmId"></a>

```typescript
public readonly microvmId: string;
```

- *Type:* string

---

##### `startedAt`<sup>Required</sup> <a name="startedAt" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.startedAt"></a>

```typescript
public readonly startedAt: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.timeouts"></a>

```typescript
public readonly timeouts: LambdamicrovmsMicrovmTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference">LambdamicrovmsMicrovmTimeoutsOutputReference</a>

---

##### `egressNetworkConnectorsInput`<sup>Optional</sup> <a name="egressNetworkConnectorsInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.egressNetworkConnectorsInput"></a>

```typescript
public readonly egressNetworkConnectorsInput: string[];
```

- *Type:* string[]

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.executionRoleArnInput"></a>

```typescript
public readonly executionRoleArnInput: string;
```

- *Type:* string

---

##### `idlePolicyInput`<sup>Optional</sup> <a name="idlePolicyInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.idlePolicyInput"></a>

```typescript
public readonly idlePolicyInput: IResolvable | LambdamicrovmsMicrovmIdlePolicy[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a>[]

---

##### `imageArnInput`<sup>Optional</sup> <a name="imageArnInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageArnInput"></a>

```typescript
public readonly imageArnInput: string;
```

- *Type:* string

---

##### `imageVersionInput`<sup>Optional</sup> <a name="imageVersionInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageVersionInput"></a>

```typescript
public readonly imageVersionInput: string;
```

- *Type:* string

---

##### `ingressNetworkConnectorsInput`<sup>Optional</sup> <a name="ingressNetworkConnectorsInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.ingressNetworkConnectorsInput"></a>

```typescript
public readonly ingressNetworkConnectorsInput: string[];
```

- *Type:* string[]

---

##### `loggingInput`<sup>Optional</sup> <a name="loggingInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.loggingInput"></a>

```typescript
public readonly loggingInput: IResolvable | LambdamicrovmsMicrovmLogging[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a>[]

---

##### `maximumDurationInSecondsInput`<sup>Optional</sup> <a name="maximumDurationInSecondsInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.maximumDurationInSecondsInput"></a>

```typescript
public readonly maximumDurationInSecondsInput: number;
```

- *Type:* number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `runHookPayloadInput`<sup>Optional</sup> <a name="runHookPayloadInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.runHookPayloadInput"></a>

```typescript
public readonly runHookPayloadInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LambdamicrovmsMicrovmTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts">LambdamicrovmsMicrovmTimeouts</a>

---

##### `egressNetworkConnectors`<sup>Required</sup> <a name="egressNetworkConnectors" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.egressNetworkConnectors"></a>

```typescript
public readonly egressNetworkConnectors: string[];
```

- *Type:* string[]

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

---

##### `imageArn`<sup>Required</sup> <a name="imageArn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageArn"></a>

```typescript
public readonly imageArn: string;
```

- *Type:* string

---

##### `imageVersion`<sup>Required</sup> <a name="imageVersion" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageVersion"></a>

```typescript
public readonly imageVersion: string;
```

- *Type:* string

---

##### `ingressNetworkConnectors`<sup>Required</sup> <a name="ingressNetworkConnectors" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.ingressNetworkConnectors"></a>

```typescript
public readonly ingressNetworkConnectors: string[];
```

- *Type:* string[]

---

##### `maximumDurationInSeconds`<sup>Required</sup> <a name="maximumDurationInSeconds" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.maximumDurationInSeconds"></a>

```typescript
public readonly maximumDurationInSeconds: number;
```

- *Type:* number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `runHookPayload`<sup>Required</sup> <a name="runHookPayload" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.runHookPayload"></a>

```typescript
public readonly runHookPayload: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdamicrovmsMicrovmConfig <a name="LambdamicrovmsMicrovmConfig" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.Initializer"></a>

```typescript
import { lambdamicrovmsMicrovm } from '@cdktn/provider-aws'

const lambdamicrovmsMicrovmConfig: lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.imageArn">imageArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#image_arn LambdamicrovmsMicrovm#image_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.egressNetworkConnectors">egressNetworkConnectors</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#egress_network_connectors LambdamicrovmsMicrovm#egress_network_connectors}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#execution_role_arn LambdamicrovmsMicrovm#execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.idlePolicy">idlePolicy</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a>[]</code> | idle_policy block. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.imageVersion">imageVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#image_version LambdamicrovmsMicrovm#image_version}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.ingressNetworkConnectors">ingressNetworkConnectors</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#ingress_network_connectors LambdamicrovmsMicrovm#ingress_network_connectors}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.logging">logging</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a>[]</code> | logging block. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.maximumDurationInSeconds">maximumDurationInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#maximum_duration_in_seconds LambdamicrovmsMicrovm#maximum_duration_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.runHookPayload">runHookPayload</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#run_hook_payload LambdamicrovmsMicrovm#run_hook_payload}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts">LambdamicrovmsMicrovmTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `imageArn`<sup>Required</sup> <a name="imageArn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.imageArn"></a>

```typescript
public readonly imageArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#image_arn LambdamicrovmsMicrovm#image_arn}.

---

##### `egressNetworkConnectors`<sup>Optional</sup> <a name="egressNetworkConnectors" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.egressNetworkConnectors"></a>

```typescript
public readonly egressNetworkConnectors: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#egress_network_connectors LambdamicrovmsMicrovm#egress_network_connectors}.

---

##### `executionRoleArn`<sup>Optional</sup> <a name="executionRoleArn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#execution_role_arn LambdamicrovmsMicrovm#execution_role_arn}.

---

##### `idlePolicy`<sup>Optional</sup> <a name="idlePolicy" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.idlePolicy"></a>

```typescript
public readonly idlePolicy: IResolvable | LambdamicrovmsMicrovmIdlePolicy[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a>[]

idle_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#idle_policy LambdamicrovmsMicrovm#idle_policy}

---

##### `imageVersion`<sup>Optional</sup> <a name="imageVersion" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.imageVersion"></a>

```typescript
public readonly imageVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#image_version LambdamicrovmsMicrovm#image_version}.

---

##### `ingressNetworkConnectors`<sup>Optional</sup> <a name="ingressNetworkConnectors" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.ingressNetworkConnectors"></a>

```typescript
public readonly ingressNetworkConnectors: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#ingress_network_connectors LambdamicrovmsMicrovm#ingress_network_connectors}.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.logging"></a>

```typescript
public readonly logging: IResolvable | LambdamicrovmsMicrovmLogging[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a>[]

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#logging LambdamicrovmsMicrovm#logging}

---

##### `maximumDurationInSeconds`<sup>Optional</sup> <a name="maximumDurationInSeconds" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.maximumDurationInSeconds"></a>

```typescript
public readonly maximumDurationInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#maximum_duration_in_seconds LambdamicrovmsMicrovm#maximum_duration_in_seconds}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#region LambdamicrovmsMicrovm#region}

---

##### `runHookPayload`<sup>Optional</sup> <a name="runHookPayload" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.runHookPayload"></a>

```typescript
public readonly runHookPayload: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#run_hook_payload LambdamicrovmsMicrovm#run_hook_payload}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LambdamicrovmsMicrovmTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts">LambdamicrovmsMicrovmTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#timeouts LambdamicrovmsMicrovm#timeouts}

---

### LambdamicrovmsMicrovmIdlePolicy <a name="LambdamicrovmsMicrovmIdlePolicy" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy.Initializer"></a>

```typescript
import { lambdamicrovmsMicrovm } from '@cdktn/provider-aws'

const lambdamicrovmsMicrovmIdlePolicy: lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy.property.autoResumeEnabled">autoResumeEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#auto_resume_enabled LambdamicrovmsMicrovm#auto_resume_enabled}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy.property.maxIdleDurationSeconds">maxIdleDurationSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#max_idle_duration_seconds LambdamicrovmsMicrovm#max_idle_duration_seconds}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy.property.suspendedDurationSeconds">suspendedDurationSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#suspended_duration_seconds LambdamicrovmsMicrovm#suspended_duration_seconds}. |

---

##### `autoResumeEnabled`<sup>Required</sup> <a name="autoResumeEnabled" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy.property.autoResumeEnabled"></a>

```typescript
public readonly autoResumeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#auto_resume_enabled LambdamicrovmsMicrovm#auto_resume_enabled}.

---

##### `maxIdleDurationSeconds`<sup>Required</sup> <a name="maxIdleDurationSeconds" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy.property.maxIdleDurationSeconds"></a>

```typescript
public readonly maxIdleDurationSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#max_idle_duration_seconds LambdamicrovmsMicrovm#max_idle_duration_seconds}.

---

##### `suspendedDurationSeconds`<sup>Required</sup> <a name="suspendedDurationSeconds" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy.property.suspendedDurationSeconds"></a>

```typescript
public readonly suspendedDurationSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#suspended_duration_seconds LambdamicrovmsMicrovm#suspended_duration_seconds}.

---

### LambdamicrovmsMicrovmLogging <a name="LambdamicrovmsMicrovmLogging" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging.Initializer"></a>

```typescript
import { lambdamicrovmsMicrovm } from '@cdktn/provider-aws'

const lambdamicrovmsMicrovmLogging: lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging.property.cloudwatch">cloudwatch</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch">LambdamicrovmsMicrovmLoggingCloudwatch</a>[]</code> | cloudwatch block. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging.property.disabled">disabled</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled">LambdamicrovmsMicrovmLoggingDisabled</a>[]</code> | disabled block. |

---

##### `cloudwatch`<sup>Optional</sup> <a name="cloudwatch" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging.property.cloudwatch"></a>

```typescript
public readonly cloudwatch: IResolvable | LambdamicrovmsMicrovmLoggingCloudwatch[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch">LambdamicrovmsMicrovmLoggingCloudwatch</a>[]

cloudwatch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#cloudwatch LambdamicrovmsMicrovm#cloudwatch}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging.property.disabled"></a>

```typescript
public readonly disabled: IResolvable | LambdamicrovmsMicrovmLoggingDisabled[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled">LambdamicrovmsMicrovmLoggingDisabled</a>[]

disabled block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#disabled LambdamicrovmsMicrovm#disabled}

---

### LambdamicrovmsMicrovmLoggingCloudwatch <a name="LambdamicrovmsMicrovmLoggingCloudwatch" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch.Initializer"></a>

```typescript
import { lambdamicrovmsMicrovm } from '@cdktn/provider-aws'

const lambdamicrovmsMicrovmLoggingCloudwatch: lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch.property.logGroup">logGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#log_group LambdamicrovmsMicrovm#log_group}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch.property.logStream">logStream</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#log_stream LambdamicrovmsMicrovm#log_stream}. |

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#log_group LambdamicrovmsMicrovm#log_group}.

---

##### `logStream`<sup>Optional</sup> <a name="logStream" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch.property.logStream"></a>

```typescript
public readonly logStream: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#log_stream LambdamicrovmsMicrovm#log_stream}.

---

### LambdamicrovmsMicrovmLoggingDisabled <a name="LambdamicrovmsMicrovmLoggingDisabled" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled.Initializer"></a>

```typescript
import { lambdamicrovmsMicrovm } from '@cdktn/provider-aws'

const lambdamicrovmsMicrovmLoggingDisabled: lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled = { ... }
```


### LambdamicrovmsMicrovmTimeouts <a name="LambdamicrovmsMicrovmTimeouts" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts.Initializer"></a>

```typescript
import { lambdamicrovmsMicrovm } from '@cdktn/provider-aws'

const lambdamicrovmsMicrovmTimeouts: lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#create LambdamicrovmsMicrovm#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#delete LambdamicrovmsMicrovm#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdamicrovmsMicrovmIdlePolicyList <a name="LambdamicrovmsMicrovmIdlePolicyList" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.Initializer"></a>

```typescript
import { lambdamicrovmsMicrovm } from '@cdktn/provider-aws'

new lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.get"></a>

```typescript
public get(index: number): LambdamicrovmsMicrovmIdlePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdamicrovmsMicrovmIdlePolicy[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a>[]

---


### LambdamicrovmsMicrovmIdlePolicyOutputReference <a name="LambdamicrovmsMicrovmIdlePolicyOutputReference" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer"></a>

```typescript
import { lambdamicrovmsMicrovm } from '@cdktn/provider-aws'

new lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.autoResumeEnabledInput">autoResumeEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.maxIdleDurationSecondsInput">maxIdleDurationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.suspendedDurationSecondsInput">suspendedDurationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.autoResumeEnabled">autoResumeEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.maxIdleDurationSeconds">maxIdleDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.suspendedDurationSeconds">suspendedDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoResumeEnabledInput`<sup>Optional</sup> <a name="autoResumeEnabledInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.autoResumeEnabledInput"></a>

```typescript
public readonly autoResumeEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxIdleDurationSecondsInput`<sup>Optional</sup> <a name="maxIdleDurationSecondsInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.maxIdleDurationSecondsInput"></a>

```typescript
public readonly maxIdleDurationSecondsInput: number;
```

- *Type:* number

---

##### `suspendedDurationSecondsInput`<sup>Optional</sup> <a name="suspendedDurationSecondsInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.suspendedDurationSecondsInput"></a>

```typescript
public readonly suspendedDurationSecondsInput: number;
```

- *Type:* number

---

##### `autoResumeEnabled`<sup>Required</sup> <a name="autoResumeEnabled" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.autoResumeEnabled"></a>

```typescript
public readonly autoResumeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxIdleDurationSeconds`<sup>Required</sup> <a name="maxIdleDurationSeconds" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.maxIdleDurationSeconds"></a>

```typescript
public readonly maxIdleDurationSeconds: number;
```

- *Type:* number

---

##### `suspendedDurationSeconds`<sup>Required</sup> <a name="suspendedDurationSeconds" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.suspendedDurationSeconds"></a>

```typescript
public readonly suspendedDurationSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdamicrovmsMicrovmIdlePolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a>

---


### LambdamicrovmsMicrovmLoggingCloudwatchList <a name="LambdamicrovmsMicrovmLoggingCloudwatchList" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.Initializer"></a>

```typescript
import { lambdamicrovmsMicrovm } from '@cdktn/provider-aws'

new lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.get"></a>

```typescript
public get(index: number): LambdamicrovmsMicrovmLoggingCloudwatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch">LambdamicrovmsMicrovmLoggingCloudwatch</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdamicrovmsMicrovmLoggingCloudwatch[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch">LambdamicrovmsMicrovmLoggingCloudwatch</a>[]

---


### LambdamicrovmsMicrovmLoggingCloudwatchOutputReference <a name="LambdamicrovmsMicrovmLoggingCloudwatchOutputReference" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer"></a>

```typescript
import { lambdamicrovmsMicrovm } from '@cdktn/provider-aws'

new lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.resetLogGroup">resetLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.resetLogStream">resetLogStream</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogGroup` <a name="resetLogGroup" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.resetLogGroup"></a>

```typescript
public resetLogGroup(): void
```

##### `resetLogStream` <a name="resetLogStream" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.resetLogStream"></a>

```typescript
public resetLogStream(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logGroupInput">logGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logStreamInput">logStreamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logGroup">logGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logStream">logStream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch">LambdamicrovmsMicrovmLoggingCloudwatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroupInput`<sup>Optional</sup> <a name="logGroupInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logGroupInput"></a>

```typescript
public readonly logGroupInput: string;
```

- *Type:* string

---

##### `logStreamInput`<sup>Optional</sup> <a name="logStreamInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logStreamInput"></a>

```typescript
public readonly logStreamInput: string;
```

- *Type:* string

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

---

##### `logStream`<sup>Required</sup> <a name="logStream" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logStream"></a>

```typescript
public readonly logStream: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdamicrovmsMicrovmLoggingCloudwatch;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch">LambdamicrovmsMicrovmLoggingCloudwatch</a>

---


### LambdamicrovmsMicrovmLoggingDisabledList <a name="LambdamicrovmsMicrovmLoggingDisabledList" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.Initializer"></a>

```typescript
import { lambdamicrovmsMicrovm } from '@cdktn/provider-aws'

new lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.get"></a>

```typescript
public get(index: number): LambdamicrovmsMicrovmLoggingDisabledOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled">LambdamicrovmsMicrovmLoggingDisabled</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdamicrovmsMicrovmLoggingDisabled[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled">LambdamicrovmsMicrovmLoggingDisabled</a>[]

---


### LambdamicrovmsMicrovmLoggingDisabledOutputReference <a name="LambdamicrovmsMicrovmLoggingDisabledOutputReference" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer"></a>

```typescript
import { lambdamicrovmsMicrovm } from '@cdktn/provider-aws'

new lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled">LambdamicrovmsMicrovmLoggingDisabled</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdamicrovmsMicrovmLoggingDisabled;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled">LambdamicrovmsMicrovmLoggingDisabled</a>

---


### LambdamicrovmsMicrovmLoggingList <a name="LambdamicrovmsMicrovmLoggingList" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.Initializer"></a>

```typescript
import { lambdamicrovmsMicrovm } from '@cdktn/provider-aws'

new lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.get"></a>

```typescript
public get(index: number): LambdamicrovmsMicrovmLoggingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdamicrovmsMicrovmLogging[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a>[]

---


### LambdamicrovmsMicrovmLoggingOutputReference <a name="LambdamicrovmsMicrovmLoggingOutputReference" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer"></a>

```typescript
import { lambdamicrovmsMicrovm } from '@cdktn/provider-aws'

new lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.putCloudwatch">putCloudwatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.putDisabled">putDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.resetCloudwatch">resetCloudwatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatch` <a name="putCloudwatch" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.putCloudwatch"></a>

```typescript
public putCloudwatch(value: IResolvable | LambdamicrovmsMicrovmLoggingCloudwatch[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.putCloudwatch.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch">LambdamicrovmsMicrovmLoggingCloudwatch</a>[]

---

##### `putDisabled` <a name="putDisabled" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.putDisabled"></a>

```typescript
public putDisabled(value: IResolvable | LambdamicrovmsMicrovmLoggingDisabled[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.putDisabled.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled">LambdamicrovmsMicrovmLoggingDisabled</a>[]

---

##### `resetCloudwatch` <a name="resetCloudwatch" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.resetCloudwatch"></a>

```typescript
public resetCloudwatch(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.cloudwatch">cloudwatch</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList">LambdamicrovmsMicrovmLoggingCloudwatchList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.disabled">disabled</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList">LambdamicrovmsMicrovmLoggingDisabledList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.cloudwatchInput">cloudwatchInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch">LambdamicrovmsMicrovmLoggingCloudwatch</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.disabledInput">disabledInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled">LambdamicrovmsMicrovmLoggingDisabled</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatch`<sup>Required</sup> <a name="cloudwatch" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.cloudwatch"></a>

```typescript
public readonly cloudwatch: LambdamicrovmsMicrovmLoggingCloudwatchList;
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList">LambdamicrovmsMicrovmLoggingCloudwatchList</a>

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.disabled"></a>

```typescript
public readonly disabled: LambdamicrovmsMicrovmLoggingDisabledList;
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList">LambdamicrovmsMicrovmLoggingDisabledList</a>

---

##### `cloudwatchInput`<sup>Optional</sup> <a name="cloudwatchInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.cloudwatchInput"></a>

```typescript
public readonly cloudwatchInput: IResolvable | LambdamicrovmsMicrovmLoggingCloudwatch[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch">LambdamicrovmsMicrovmLoggingCloudwatch</a>[]

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: IResolvable | LambdamicrovmsMicrovmLoggingDisabled[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled">LambdamicrovmsMicrovmLoggingDisabled</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdamicrovmsMicrovmLogging;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a>

---


### LambdamicrovmsMicrovmTimeoutsOutputReference <a name="LambdamicrovmsMicrovmTimeoutsOutputReference" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.Initializer"></a>

```typescript
import { lambdamicrovmsMicrovm } from '@cdktn/provider-aws'

new lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts">LambdamicrovmsMicrovmTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdamicrovmsMicrovmTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts">LambdamicrovmsMicrovmTimeouts</a>

---



