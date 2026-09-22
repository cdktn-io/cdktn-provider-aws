# `bedrockModelInvocationJob` Submodule <a name="`bedrockModelInvocationJob` Submodule" id="@cdktn/provider-aws.bedrockModelInvocationJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockModelInvocationJob <a name="BedrockModelInvocationJob" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrock_model_invocation_job aws_bedrock_model_invocation_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer"></a>

```typescript
import { bedrockModelInvocationJob } from '@cdktn/provider-aws'

new bedrockModelInvocationJob.BedrockModelInvocationJob(scope: Construct, id: string, config: BedrockModelInvocationJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig">BedrockModelInvocationJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig">BedrockModelInvocationJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.putInputDataConfig">putInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.putOutputDataConfig">putOutputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetInputDataConfig">resetInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetOutputDataConfig">resetOutputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetSkipDestroy">resetSkipDestroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetTimeoutDurationInHours">resetTimeoutDurationInHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetVpcConfig">resetVpcConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInputDataConfig` <a name="putInputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.putInputDataConfig"></a>

```typescript
public putInputDataConfig(value: IResolvable | BedrockModelInvocationJobInputDataConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.putInputDataConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig">BedrockModelInvocationJobInputDataConfig</a>[]

---

##### `putOutputDataConfig` <a name="putOutputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.putOutputDataConfig"></a>

```typescript
public putOutputDataConfig(value: IResolvable | BedrockModelInvocationJobOutputDataConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.putOutputDataConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig">BedrockModelInvocationJobOutputDataConfig</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.putTimeouts"></a>

```typescript
public putTimeouts(value: BedrockModelInvocationJobTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts">BedrockModelInvocationJobTimeouts</a>

---

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.putVpcConfig"></a>

```typescript
public putVpcConfig(value: IResolvable | BedrockModelInvocationJobVpcConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.putVpcConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig">BedrockModelInvocationJobVpcConfig</a>[]

---

##### `resetInputDataConfig` <a name="resetInputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetInputDataConfig"></a>

```typescript
public resetInputDataConfig(): void
```

##### `resetOutputDataConfig` <a name="resetOutputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetOutputDataConfig"></a>

```typescript
public resetOutputDataConfig(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSkipDestroy` <a name="resetSkipDestroy" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetSkipDestroy"></a>

```typescript
public resetSkipDestroy(): void
```

##### `resetTimeoutDurationInHours` <a name="resetTimeoutDurationInHours" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetTimeoutDurationInHours"></a>

```typescript
public resetTimeoutDurationInHours(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVpcConfig` <a name="resetVpcConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetVpcConfig"></a>

```typescript
public resetVpcConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockModelInvocationJob resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.isConstruct"></a>

```typescript
import { bedrockModelInvocationJob } from '@cdktn/provider-aws'

bedrockModelInvocationJob.BedrockModelInvocationJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.isTerraformElement"></a>

```typescript
import { bedrockModelInvocationJob } from '@cdktn/provider-aws'

bedrockModelInvocationJob.BedrockModelInvocationJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.isTerraformResource"></a>

```typescript
import { bedrockModelInvocationJob } from '@cdktn/provider-aws'

bedrockModelInvocationJob.BedrockModelInvocationJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.generateConfigForImport"></a>

```typescript
import { bedrockModelInvocationJob } from '@cdktn/provider-aws'

bedrockModelInvocationJob.BedrockModelInvocationJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BedrockModelInvocationJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockModelInvocationJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockModelInvocationJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrock_model_invocation_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockModelInvocationJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.errorRecordCount">errorRecordCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.inputDataConfig">inputDataConfig</a></code> | <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList">BedrockModelInvocationJobInputDataConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.jobArn">jobArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.jobExpirationTime">jobExpirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.modelInvocationType">modelInvocationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.outputDataConfig">outputDataConfig</a></code> | <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList">BedrockModelInvocationJobOutputDataConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.processedRecordCount">processedRecordCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.submitTime">submitTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.successRecordCount">successRecordCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference">BedrockModelInvocationJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.totalRecordCount">totalRecordCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList">BedrockModelInvocationJobVpcConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.inputDataConfigInput">inputDataConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig">BedrockModelInvocationJobInputDataConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.jobNameInput">jobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.modelIdInput">modelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.outputDataConfigInput">outputDataConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig">BedrockModelInvocationJobOutputDataConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.skipDestroyInput">skipDestroyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.timeoutDurationInHoursInput">timeoutDurationInHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts">BedrockModelInvocationJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.vpcConfigInput">vpcConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig">BedrockModelInvocationJobVpcConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.jobName">jobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.modelId">modelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.skipDestroy">skipDestroy</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.timeoutDurationInHours">timeoutDurationInHours</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `errorRecordCount`<sup>Required</sup> <a name="errorRecordCount" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.errorRecordCount"></a>

```typescript
public readonly errorRecordCount: number;
```

- *Type:* number

---

##### `inputDataConfig`<sup>Required</sup> <a name="inputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.inputDataConfig"></a>

```typescript
public readonly inputDataConfig: BedrockModelInvocationJobInputDataConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList">BedrockModelInvocationJobInputDataConfigList</a>

---

##### `jobArn`<sup>Required</sup> <a name="jobArn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.jobArn"></a>

```typescript
public readonly jobArn: string;
```

- *Type:* string

---

##### `jobExpirationTime`<sup>Required</sup> <a name="jobExpirationTime" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.jobExpirationTime"></a>

```typescript
public readonly jobExpirationTime: string;
```

- *Type:* string

---

##### `modelInvocationType`<sup>Required</sup> <a name="modelInvocationType" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.modelInvocationType"></a>

```typescript
public readonly modelInvocationType: string;
```

- *Type:* string

---

##### `outputDataConfig`<sup>Required</sup> <a name="outputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.outputDataConfig"></a>

```typescript
public readonly outputDataConfig: BedrockModelInvocationJobOutputDataConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList">BedrockModelInvocationJobOutputDataConfigList</a>

---

##### `processedRecordCount`<sup>Required</sup> <a name="processedRecordCount" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.processedRecordCount"></a>

```typescript
public readonly processedRecordCount: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `submitTime`<sup>Required</sup> <a name="submitTime" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.submitTime"></a>

```typescript
public readonly submitTime: string;
```

- *Type:* string

---

##### `successRecordCount`<sup>Required</sup> <a name="successRecordCount" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.successRecordCount"></a>

```typescript
public readonly successRecordCount: number;
```

- *Type:* number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.timeouts"></a>

```typescript
public readonly timeouts: BedrockModelInvocationJobTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference">BedrockModelInvocationJobTimeoutsOutputReference</a>

---

##### `totalRecordCount`<sup>Required</sup> <a name="totalRecordCount" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.totalRecordCount"></a>

```typescript
public readonly totalRecordCount: number;
```

- *Type:* number

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: BedrockModelInvocationJobVpcConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList">BedrockModelInvocationJobVpcConfigList</a>

---

##### `inputDataConfigInput`<sup>Optional</sup> <a name="inputDataConfigInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.inputDataConfigInput"></a>

```typescript
public readonly inputDataConfigInput: IResolvable | BedrockModelInvocationJobInputDataConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig">BedrockModelInvocationJobInputDataConfig</a>[]

---

##### `jobNameInput`<sup>Optional</sup> <a name="jobNameInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.jobNameInput"></a>

```typescript
public readonly jobNameInput: string;
```

- *Type:* string

---

##### `modelIdInput`<sup>Optional</sup> <a name="modelIdInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.modelIdInput"></a>

```typescript
public readonly modelIdInput: string;
```

- *Type:* string

---

##### `outputDataConfigInput`<sup>Optional</sup> <a name="outputDataConfigInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.outputDataConfigInput"></a>

```typescript
public readonly outputDataConfigInput: IResolvable | BedrockModelInvocationJobOutputDataConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig">BedrockModelInvocationJobOutputDataConfig</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `skipDestroyInput`<sup>Optional</sup> <a name="skipDestroyInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.skipDestroyInput"></a>

```typescript
public readonly skipDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `timeoutDurationInHoursInput`<sup>Optional</sup> <a name="timeoutDurationInHoursInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.timeoutDurationInHoursInput"></a>

```typescript
public readonly timeoutDurationInHoursInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BedrockModelInvocationJobTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts">BedrockModelInvocationJobTimeouts</a>

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.vpcConfigInput"></a>

```typescript
public readonly vpcConfigInput: IResolvable | BedrockModelInvocationJobVpcConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig">BedrockModelInvocationJobVpcConfig</a>[]

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `skipDestroy`<sup>Required</sup> <a name="skipDestroy" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.skipDestroy"></a>

```typescript
public readonly skipDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `timeoutDurationInHours`<sup>Required</sup> <a name="timeoutDurationInHours" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.timeoutDurationInHours"></a>

```typescript
public readonly timeoutDurationInHours: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockModelInvocationJobConfig <a name="BedrockModelInvocationJobConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.Initializer"></a>

```typescript
import { bedrockModelInvocationJob } from '@cdktn/provider-aws'

const bedrockModelInvocationJobConfig: bedrockModelInvocationJob.BedrockModelInvocationJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.jobName">jobName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrock_model_invocation_job#job_name BedrockModelInvocationJob#job_name}. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.modelId">modelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrock_model_invocation_job#model_id BedrockModelInvocationJob#model_id}. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrock_model_invocation_job#role_arn BedrockModelInvocationJob#role_arn}. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.inputDataConfig">inputDataConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig">BedrockModelInvocationJobInputDataConfig</a>[]</code> | input_data_config block. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.outputDataConfig">outputDataConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig">BedrockModelInvocationJobOutputDataConfig</a>[]</code> | output_data_config block. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.skipDestroy">skipDestroy</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrock_model_invocation_job#skip_destroy BedrockModelInvocationJob#skip_destroy}. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.timeoutDurationInHours">timeoutDurationInHours</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrock_model_invocation_job#timeout_duration_in_hours BedrockModelInvocationJob#timeout_duration_in_hours}. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts">BedrockModelInvocationJobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.vpcConfig">vpcConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig">BedrockModelInvocationJobVpcConfig</a>[]</code> | vpc_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrock_model_invocation_job#job_name BedrockModelInvocationJob#job_name}.

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrock_model_invocation_job#model_id BedrockModelInvocationJob#model_id}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrock_model_invocation_job#role_arn BedrockModelInvocationJob#role_arn}.

---

##### `inputDataConfig`<sup>Optional</sup> <a name="inputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.inputDataConfig"></a>

```typescript
public readonly inputDataConfig: IResolvable | BedrockModelInvocationJobInputDataConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig">BedrockModelInvocationJobInputDataConfig</a>[]

input_data_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrock_model_invocation_job#input_data_config BedrockModelInvocationJob#input_data_config}

---

##### `outputDataConfig`<sup>Optional</sup> <a name="outputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.outputDataConfig"></a>

```typescript
public readonly outputDataConfig: IResolvable | BedrockModelInvocationJobOutputDataConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig">BedrockModelInvocationJobOutputDataConfig</a>[]

output_data_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrock_model_invocation_job#output_data_config BedrockModelInvocationJob#output_data_config}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrock_model_invocation_job#region BedrockModelInvocationJob#region}

---

##### `skipDestroy`<sup>Optional</sup> <a name="skipDestroy" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.skipDestroy"></a>

```typescript
public readonly skipDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrock_model_invocation_job#skip_destroy BedrockModelInvocationJob#skip_destroy}.

---

##### `timeoutDurationInHours`<sup>Optional</sup> <a name="timeoutDurationInHours" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.timeoutDurationInHours"></a>

```typescript
public readonly timeoutDurationInHours: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrock_model_invocation_job#timeout_duration_in_hours BedrockModelInvocationJob#timeout_duration_in_hours}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BedrockModelInvocationJobTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts">BedrockModelInvocationJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrock_model_invocation_job#timeouts BedrockModelInvocationJob#timeouts}

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: IResolvable | BedrockModelInvocationJobVpcConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig">BedrockModelInvocationJobVpcConfig</a>[]

vpc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrock_model_invocation_job#vpc_config BedrockModelInvocationJob#vpc_config}

---

### BedrockModelInvocationJobInputDataConfig <a name="BedrockModelInvocationJobInputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig.Initializer"></a>

```typescript
import { bedrockModelInvocationJob } from '@cdktn/provider-aws'

const bedrockModelInvocationJobInputDataConfig: bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig.property.s3InputDataConfig">s3InputDataConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig">BedrockModelInvocationJobInputDataConfigS3InputDataConfig</a>[]</code> | s3_input_data_config block. |

---

##### `s3InputDataConfig`<sup>Optional</sup> <a name="s3InputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig.property.s3InputDataConfig"></a>

```typescript
public readonly s3InputDataConfig: IResolvable | BedrockModelInvocationJobInputDataConfigS3InputDataConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig">BedrockModelInvocationJobInputDataConfigS3InputDataConfig</a>[]

s3_input_data_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrock_model_invocation_job#s3_input_data_config BedrockModelInvocationJob#s3_input_data_config}

---

### BedrockModelInvocationJobInputDataConfigS3InputDataConfig <a name="BedrockModelInvocationJobInputDataConfigS3InputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig.Initializer"></a>

```typescript
import { bedrockModelInvocationJob } from '@cdktn/provider-aws'

const bedrockModelInvocationJobInputDataConfigS3InputDataConfig: bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig.property.s3Uri">s3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrock_model_invocation_job#s3_uri BedrockModelInvocationJob#s3_uri}. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig.property.s3BucketOwner">s3BucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrock_model_invocation_job#s3_bucket_owner BedrockModelInvocationJob#s3_bucket_owner}. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig.property.s3InputFormat">s3InputFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrock_model_invocation_job#s3_input_format BedrockModelInvocationJob#s3_input_format}. |

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrock_model_invocation_job#s3_uri BedrockModelInvocationJob#s3_uri}.

---

##### `s3BucketOwner`<sup>Optional</sup> <a name="s3BucketOwner" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig.property.s3BucketOwner"></a>

```typescript
public readonly s3BucketOwner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrock_model_invocation_job#s3_bucket_owner BedrockModelInvocationJob#s3_bucket_owner}.

---

##### `s3InputFormat`<sup>Optional</sup> <a name="s3InputFormat" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig.property.s3InputFormat"></a>

```typescript
public readonly s3InputFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrock_model_invocation_job#s3_input_format BedrockModelInvocationJob#s3_input_format}.

---

### BedrockModelInvocationJobOutputDataConfig <a name="BedrockModelInvocationJobOutputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig.Initializer"></a>

```typescript
import { bedrockModelInvocationJob } from '@cdktn/provider-aws'

const bedrockModelInvocationJobOutputDataConfig: bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig.property.s3OutputDataConfig">s3OutputDataConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig">BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig</a>[]</code> | s3_output_data_config block. |

---

##### `s3OutputDataConfig`<sup>Optional</sup> <a name="s3OutputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig.property.s3OutputDataConfig"></a>

```typescript
public readonly s3OutputDataConfig: IResolvable | BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig">BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig</a>[]

s3_output_data_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrock_model_invocation_job#s3_output_data_config BedrockModelInvocationJob#s3_output_data_config}

---

### BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig <a name="BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig.Initializer"></a>

```typescript
import { bedrockModelInvocationJob } from '@cdktn/provider-aws'

const bedrockModelInvocationJobOutputDataConfigS3OutputDataConfig: bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig.property.s3Uri">s3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrock_model_invocation_job#s3_uri BedrockModelInvocationJob#s3_uri}. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig.property.s3BucketOwner">s3BucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrock_model_invocation_job#s3_bucket_owner BedrockModelInvocationJob#s3_bucket_owner}. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig.property.s3EncryptionKeyId">s3EncryptionKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrock_model_invocation_job#s3_encryption_key_id BedrockModelInvocationJob#s3_encryption_key_id}. |

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrock_model_invocation_job#s3_uri BedrockModelInvocationJob#s3_uri}.

---

##### `s3BucketOwner`<sup>Optional</sup> <a name="s3BucketOwner" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig.property.s3BucketOwner"></a>

```typescript
public readonly s3BucketOwner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrock_model_invocation_job#s3_bucket_owner BedrockModelInvocationJob#s3_bucket_owner}.

---

##### `s3EncryptionKeyId`<sup>Optional</sup> <a name="s3EncryptionKeyId" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig.property.s3EncryptionKeyId"></a>

```typescript
public readonly s3EncryptionKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrock_model_invocation_job#s3_encryption_key_id BedrockModelInvocationJob#s3_encryption_key_id}.

---

### BedrockModelInvocationJobTimeouts <a name="BedrockModelInvocationJobTimeouts" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts.Initializer"></a>

```typescript
import { bedrockModelInvocationJob } from '@cdktn/provider-aws'

const bedrockModelInvocationJobTimeouts: bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrock_model_invocation_job#create BedrockModelInvocationJob#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrock_model_invocation_job#delete BedrockModelInvocationJob#delete}

---

### BedrockModelInvocationJobVpcConfig <a name="BedrockModelInvocationJobVpcConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig.Initializer"></a>

```typescript
import { bedrockModelInvocationJob } from '@cdktn/provider-aws'

const bedrockModelInvocationJobVpcConfig: bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrock_model_invocation_job#security_group_ids BedrockModelInvocationJob#security_group_ids}. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrock_model_invocation_job#subnet_ids BedrockModelInvocationJob#subnet_ids}. |

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrock_model_invocation_job#security_group_ids BedrockModelInvocationJob#security_group_ids}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrock_model_invocation_job#subnet_ids BedrockModelInvocationJob#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockModelInvocationJobInputDataConfigList <a name="BedrockModelInvocationJobInputDataConfigList" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.Initializer"></a>

```typescript
import { bedrockModelInvocationJob } from '@cdktn/provider-aws'

new bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.get"></a>

```typescript
public get(index: number): BedrockModelInvocationJobInputDataConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig">BedrockModelInvocationJobInputDataConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockModelInvocationJobInputDataConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig">BedrockModelInvocationJobInputDataConfig</a>[]

---


### BedrockModelInvocationJobInputDataConfigOutputReference <a name="BedrockModelInvocationJobInputDataConfigOutputReference" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.Initializer"></a>

```typescript
import { bedrockModelInvocationJob } from '@cdktn/provider-aws'

new bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.putS3InputDataConfig">putS3InputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.resetS3InputDataConfig">resetS3InputDataConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3InputDataConfig` <a name="putS3InputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.putS3InputDataConfig"></a>

```typescript
public putS3InputDataConfig(value: IResolvable | BedrockModelInvocationJobInputDataConfigS3InputDataConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.putS3InputDataConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig">BedrockModelInvocationJobInputDataConfigS3InputDataConfig</a>[]

---

##### `resetS3InputDataConfig` <a name="resetS3InputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.resetS3InputDataConfig"></a>

```typescript
public resetS3InputDataConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.property.s3InputDataConfig">s3InputDataConfig</a></code> | <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList">BedrockModelInvocationJobInputDataConfigS3InputDataConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.property.s3InputDataConfigInput">s3InputDataConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig">BedrockModelInvocationJobInputDataConfigS3InputDataConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig">BedrockModelInvocationJobInputDataConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3InputDataConfig`<sup>Required</sup> <a name="s3InputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.property.s3InputDataConfig"></a>

```typescript
public readonly s3InputDataConfig: BedrockModelInvocationJobInputDataConfigS3InputDataConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList">BedrockModelInvocationJobInputDataConfigS3InputDataConfigList</a>

---

##### `s3InputDataConfigInput`<sup>Optional</sup> <a name="s3InputDataConfigInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.property.s3InputDataConfigInput"></a>

```typescript
public readonly s3InputDataConfigInput: IResolvable | BedrockModelInvocationJobInputDataConfigS3InputDataConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig">BedrockModelInvocationJobInputDataConfigS3InputDataConfig</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockModelInvocationJobInputDataConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig">BedrockModelInvocationJobInputDataConfig</a>

---


### BedrockModelInvocationJobInputDataConfigS3InputDataConfigList <a name="BedrockModelInvocationJobInputDataConfigS3InputDataConfigList" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.Initializer"></a>

```typescript
import { bedrockModelInvocationJob } from '@cdktn/provider-aws'

new bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.get"></a>

```typescript
public get(index: number): BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig">BedrockModelInvocationJobInputDataConfigS3InputDataConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockModelInvocationJobInputDataConfigS3InputDataConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig">BedrockModelInvocationJobInputDataConfigS3InputDataConfig</a>[]

---


### BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference <a name="BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.Initializer"></a>

```typescript
import { bedrockModelInvocationJob } from '@cdktn/provider-aws'

new bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.resetS3BucketOwner">resetS3BucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.resetS3InputFormat">resetS3InputFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3BucketOwner` <a name="resetS3BucketOwner" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.resetS3BucketOwner"></a>

```typescript
public resetS3BucketOwner(): void
```

##### `resetS3InputFormat` <a name="resetS3InputFormat" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.resetS3InputFormat"></a>

```typescript
public resetS3InputFormat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.s3BucketOwnerInput">s3BucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.s3InputFormatInput">s3InputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.s3UriInput">s3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.s3BucketOwner">s3BucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.s3InputFormat">s3InputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig">BedrockModelInvocationJobInputDataConfigS3InputDataConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3BucketOwnerInput`<sup>Optional</sup> <a name="s3BucketOwnerInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.s3BucketOwnerInput"></a>

```typescript
public readonly s3BucketOwnerInput: string;
```

- *Type:* string

---

##### `s3InputFormatInput`<sup>Optional</sup> <a name="s3InputFormatInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.s3InputFormatInput"></a>

```typescript
public readonly s3InputFormatInput: string;
```

- *Type:* string

---

##### `s3UriInput`<sup>Optional</sup> <a name="s3UriInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.s3UriInput"></a>

```typescript
public readonly s3UriInput: string;
```

- *Type:* string

---

##### `s3BucketOwner`<sup>Required</sup> <a name="s3BucketOwner" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.s3BucketOwner"></a>

```typescript
public readonly s3BucketOwner: string;
```

- *Type:* string

---

##### `s3InputFormat`<sup>Required</sup> <a name="s3InputFormat" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.s3InputFormat"></a>

```typescript
public readonly s3InputFormat: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockModelInvocationJobInputDataConfigS3InputDataConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig">BedrockModelInvocationJobInputDataConfigS3InputDataConfig</a>

---


### BedrockModelInvocationJobOutputDataConfigList <a name="BedrockModelInvocationJobOutputDataConfigList" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.Initializer"></a>

```typescript
import { bedrockModelInvocationJob } from '@cdktn/provider-aws'

new bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.get"></a>

```typescript
public get(index: number): BedrockModelInvocationJobOutputDataConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig">BedrockModelInvocationJobOutputDataConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockModelInvocationJobOutputDataConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig">BedrockModelInvocationJobOutputDataConfig</a>[]

---


### BedrockModelInvocationJobOutputDataConfigOutputReference <a name="BedrockModelInvocationJobOutputDataConfigOutputReference" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.Initializer"></a>

```typescript
import { bedrockModelInvocationJob } from '@cdktn/provider-aws'

new bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.putS3OutputDataConfig">putS3OutputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.resetS3OutputDataConfig">resetS3OutputDataConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3OutputDataConfig` <a name="putS3OutputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.putS3OutputDataConfig"></a>

```typescript
public putS3OutputDataConfig(value: IResolvable | BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.putS3OutputDataConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig">BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig</a>[]

---

##### `resetS3OutputDataConfig` <a name="resetS3OutputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.resetS3OutputDataConfig"></a>

```typescript
public resetS3OutputDataConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.property.s3OutputDataConfig">s3OutputDataConfig</a></code> | <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList">BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.property.s3OutputDataConfigInput">s3OutputDataConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig">BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig">BedrockModelInvocationJobOutputDataConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3OutputDataConfig`<sup>Required</sup> <a name="s3OutputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.property.s3OutputDataConfig"></a>

```typescript
public readonly s3OutputDataConfig: BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList">BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList</a>

---

##### `s3OutputDataConfigInput`<sup>Optional</sup> <a name="s3OutputDataConfigInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.property.s3OutputDataConfigInput"></a>

```typescript
public readonly s3OutputDataConfigInput: IResolvable | BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig">BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockModelInvocationJobOutputDataConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig">BedrockModelInvocationJobOutputDataConfig</a>

---


### BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList <a name="BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.Initializer"></a>

```typescript
import { bedrockModelInvocationJob } from '@cdktn/provider-aws'

new bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.get"></a>

```typescript
public get(index: number): BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig">BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig">BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig</a>[]

---


### BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference <a name="BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.Initializer"></a>

```typescript
import { bedrockModelInvocationJob } from '@cdktn/provider-aws'

new bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.resetS3BucketOwner">resetS3BucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.resetS3EncryptionKeyId">resetS3EncryptionKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3BucketOwner` <a name="resetS3BucketOwner" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.resetS3BucketOwner"></a>

```typescript
public resetS3BucketOwner(): void
```

##### `resetS3EncryptionKeyId` <a name="resetS3EncryptionKeyId" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.resetS3EncryptionKeyId"></a>

```typescript
public resetS3EncryptionKeyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.s3BucketOwnerInput">s3BucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.s3EncryptionKeyIdInput">s3EncryptionKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.s3UriInput">s3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.s3BucketOwner">s3BucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.s3EncryptionKeyId">s3EncryptionKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig">BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3BucketOwnerInput`<sup>Optional</sup> <a name="s3BucketOwnerInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.s3BucketOwnerInput"></a>

```typescript
public readonly s3BucketOwnerInput: string;
```

- *Type:* string

---

##### `s3EncryptionKeyIdInput`<sup>Optional</sup> <a name="s3EncryptionKeyIdInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.s3EncryptionKeyIdInput"></a>

```typescript
public readonly s3EncryptionKeyIdInput: string;
```

- *Type:* string

---

##### `s3UriInput`<sup>Optional</sup> <a name="s3UriInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.s3UriInput"></a>

```typescript
public readonly s3UriInput: string;
```

- *Type:* string

---

##### `s3BucketOwner`<sup>Required</sup> <a name="s3BucketOwner" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.s3BucketOwner"></a>

```typescript
public readonly s3BucketOwner: string;
```

- *Type:* string

---

##### `s3EncryptionKeyId`<sup>Required</sup> <a name="s3EncryptionKeyId" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.s3EncryptionKeyId"></a>

```typescript
public readonly s3EncryptionKeyId: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig">BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig</a>

---


### BedrockModelInvocationJobTimeoutsOutputReference <a name="BedrockModelInvocationJobTimeoutsOutputReference" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.Initializer"></a>

```typescript
import { bedrockModelInvocationJob } from '@cdktn/provider-aws'

new bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts">BedrockModelInvocationJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockModelInvocationJobTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts">BedrockModelInvocationJobTimeouts</a>

---


### BedrockModelInvocationJobVpcConfigList <a name="BedrockModelInvocationJobVpcConfigList" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.Initializer"></a>

```typescript
import { bedrockModelInvocationJob } from '@cdktn/provider-aws'

new bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.get"></a>

```typescript
public get(index: number): BedrockModelInvocationJobVpcConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig">BedrockModelInvocationJobVpcConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockModelInvocationJobVpcConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig">BedrockModelInvocationJobVpcConfig</a>[]

---


### BedrockModelInvocationJobVpcConfigOutputReference <a name="BedrockModelInvocationJobVpcConfigOutputReference" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.Initializer"></a>

```typescript
import { bedrockModelInvocationJob } from '@cdktn/provider-aws'

new bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig">BedrockModelInvocationJobVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockModelInvocationJobVpcConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig">BedrockModelInvocationJobVpcConfig</a>

---



