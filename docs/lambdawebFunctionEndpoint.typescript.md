# `lambdawebFunctionEndpoint` Submodule <a name="`lambdawebFunctionEndpoint` Submodule" id="@cdktn/provider-aws.lambdawebFunctionEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdawebFunctionEndpoint <a name="LambdawebFunctionEndpoint" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint aws_lambdaweb_function_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer"></a>

```typescript
import { lambdawebFunctionEndpoint } from '@cdktn/provider-aws'

new lambdawebFunctionEndpoint.LambdawebFunctionEndpoint(scope: Construct, id: string, config: LambdawebFunctionEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig">LambdawebFunctionEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig">LambdawebFunctionEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putRevisionWeight">putRevisionWeight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putScalingConfig">putScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putThrottleConfig">putThrottleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetAutoDeploymentMode">resetAutoDeploymentMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetRegions">resetRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetRevisionWeight">resetRevisionWeight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetScalingConfig">resetScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetThrottleConfig">resetThrottleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRevisionWeight` <a name="putRevisionWeight" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putRevisionWeight"></a>

```typescript
public putRevisionWeight(value: IResolvable | LambdawebFunctionEndpointRevisionWeight[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putRevisionWeight.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight">LambdawebFunctionEndpointRevisionWeight</a>[]

---

##### `putScalingConfig` <a name="putScalingConfig" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putScalingConfig"></a>

```typescript
public putScalingConfig(value: IResolvable | LambdawebFunctionEndpointScalingConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putScalingConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig">LambdawebFunctionEndpointScalingConfig</a>[]

---

##### `putThrottleConfig` <a name="putThrottleConfig" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putThrottleConfig"></a>

```typescript
public putThrottleConfig(value: IResolvable | LambdawebFunctionEndpointThrottleConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putThrottleConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig">LambdawebFunctionEndpointThrottleConfig</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putTimeouts"></a>

```typescript
public putTimeouts(value: LambdawebFunctionEndpointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts">LambdawebFunctionEndpointTimeouts</a>

---

##### `resetAutoDeploymentMode` <a name="resetAutoDeploymentMode" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetAutoDeploymentMode"></a>

```typescript
public resetAutoDeploymentMode(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRegions` <a name="resetRegions" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetRegions"></a>

```typescript
public resetRegions(): void
```

##### `resetRevisionWeight` <a name="resetRevisionWeight" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetRevisionWeight"></a>

```typescript
public resetRevisionWeight(): void
```

##### `resetScalingConfig` <a name="resetScalingConfig" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetScalingConfig"></a>

```typescript
public resetScalingConfig(): void
```

##### `resetThrottleConfig` <a name="resetThrottleConfig" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetThrottleConfig"></a>

```typescript
public resetThrottleConfig(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LambdawebFunctionEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.isConstruct"></a>

```typescript
import { lambdawebFunctionEndpoint } from '@cdktn/provider-aws'

lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.isTerraformElement"></a>

```typescript
import { lambdawebFunctionEndpoint } from '@cdktn/provider-aws'

lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.isTerraformResource"></a>

```typescript
import { lambdawebFunctionEndpoint } from '@cdktn/provider-aws'

lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.generateConfigForImport"></a>

```typescript
import { lambdawebFunctionEndpoint } from '@cdktn/provider-aws'

lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LambdawebFunctionEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LambdawebFunctionEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LambdawebFunctionEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LambdawebFunctionEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.regionalDomainNames">regionalDomainNames</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.revisionWeight">revisionWeight</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList">LambdawebFunctionEndpointRevisionWeightList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.scalingConfig">scalingConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList">LambdawebFunctionEndpointScalingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.throttleConfig">throttleConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList">LambdawebFunctionEndpointThrottleConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference">LambdawebFunctionEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.authTypeInput">authTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.autoDeploymentModeInput">autoDeploymentModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.endpointNameInput">endpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.endpointTypeInput">endpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.functionNameInput">functionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.regionsInput">regionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.revisionWeightInput">revisionWeightInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight">LambdawebFunctionEndpointRevisionWeight</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.scalingConfigInput">scalingConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig">LambdawebFunctionEndpointScalingConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.throttleConfigInput">throttleConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig">LambdawebFunctionEndpointThrottleConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts">LambdawebFunctionEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.autoDeploymentMode">autoDeploymentMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.endpointName">endpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.endpointType">endpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `regionalDomainNames`<sup>Required</sup> <a name="regionalDomainNames" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.regionalDomainNames"></a>

```typescript
public readonly regionalDomainNames: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `revisionWeight`<sup>Required</sup> <a name="revisionWeight" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.revisionWeight"></a>

```typescript
public readonly revisionWeight: LambdawebFunctionEndpointRevisionWeightList;
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList">LambdawebFunctionEndpointRevisionWeightList</a>

---

##### `scalingConfig`<sup>Required</sup> <a name="scalingConfig" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.scalingConfig"></a>

```typescript
public readonly scalingConfig: LambdawebFunctionEndpointScalingConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList">LambdawebFunctionEndpointScalingConfigList</a>

---

##### `throttleConfig`<sup>Required</sup> <a name="throttleConfig" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.throttleConfig"></a>

```typescript
public readonly throttleConfig: LambdawebFunctionEndpointThrottleConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList">LambdawebFunctionEndpointThrottleConfigList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.timeouts"></a>

```typescript
public readonly timeouts: LambdawebFunctionEndpointTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference">LambdawebFunctionEndpointTimeoutsOutputReference</a>

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.authTypeInput"></a>

```typescript
public readonly authTypeInput: string;
```

- *Type:* string

---

##### `autoDeploymentModeInput`<sup>Optional</sup> <a name="autoDeploymentModeInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.autoDeploymentModeInput"></a>

```typescript
public readonly autoDeploymentModeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `endpointNameInput`<sup>Optional</sup> <a name="endpointNameInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.endpointNameInput"></a>

```typescript
public readonly endpointNameInput: string;
```

- *Type:* string

---

##### `endpointTypeInput`<sup>Optional</sup> <a name="endpointTypeInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.endpointTypeInput"></a>

```typescript
public readonly endpointTypeInput: string;
```

- *Type:* string

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.functionNameInput"></a>

```typescript
public readonly functionNameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.regionsInput"></a>

```typescript
public readonly regionsInput: string[];
```

- *Type:* string[]

---

##### `revisionWeightInput`<sup>Optional</sup> <a name="revisionWeightInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.revisionWeightInput"></a>

```typescript
public readonly revisionWeightInput: IResolvable | LambdawebFunctionEndpointRevisionWeight[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight">LambdawebFunctionEndpointRevisionWeight</a>[]

---

##### `scalingConfigInput`<sup>Optional</sup> <a name="scalingConfigInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.scalingConfigInput"></a>

```typescript
public readonly scalingConfigInput: IResolvable | LambdawebFunctionEndpointScalingConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig">LambdawebFunctionEndpointScalingConfig</a>[]

---

##### `throttleConfigInput`<sup>Optional</sup> <a name="throttleConfigInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.throttleConfigInput"></a>

```typescript
public readonly throttleConfigInput: IResolvable | LambdawebFunctionEndpointThrottleConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig">LambdawebFunctionEndpointThrottleConfig</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LambdawebFunctionEndpointTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts">LambdawebFunctionEndpointTimeouts</a>

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `autoDeploymentMode`<sup>Required</sup> <a name="autoDeploymentMode" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.autoDeploymentMode"></a>

```typescript
public readonly autoDeploymentMode: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdawebFunctionEndpointConfig <a name="LambdawebFunctionEndpointConfig" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.Initializer"></a>

```typescript
import { lambdawebFunctionEndpoint } from '@cdktn/provider-aws'

const lambdawebFunctionEndpointConfig: lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.authType">authType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#auth_type LambdawebFunctionEndpoint#auth_type}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.endpointName">endpointName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#endpoint_name LambdawebFunctionEndpoint#endpoint_name}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.endpointType">endpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#endpoint_type LambdawebFunctionEndpoint#endpoint_type}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.functionName">functionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#function_name LambdawebFunctionEndpoint#function_name}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.autoDeploymentMode">autoDeploymentMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#auto_deployment_mode LambdawebFunctionEndpoint#auto_deployment_mode}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#description LambdawebFunctionEndpoint#description}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.regions">regions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#regions LambdawebFunctionEndpoint#regions}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.revisionWeight">revisionWeight</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight">LambdawebFunctionEndpointRevisionWeight</a>[]</code> | revision_weight block. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.scalingConfig">scalingConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig">LambdawebFunctionEndpointScalingConfig</a>[]</code> | scaling_config block. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.throttleConfig">throttleConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig">LambdawebFunctionEndpointThrottleConfig</a>[]</code> | throttle_config block. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts">LambdawebFunctionEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#auth_type LambdawebFunctionEndpoint#auth_type}.

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#endpoint_name LambdawebFunctionEndpoint#endpoint_name}.

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#endpoint_type LambdawebFunctionEndpoint#endpoint_type}.

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#function_name LambdawebFunctionEndpoint#function_name}.

---

##### `autoDeploymentMode`<sup>Optional</sup> <a name="autoDeploymentMode" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.autoDeploymentMode"></a>

```typescript
public readonly autoDeploymentMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#auto_deployment_mode LambdawebFunctionEndpoint#auto_deployment_mode}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#description LambdawebFunctionEndpoint#description}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#region LambdawebFunctionEndpoint#region}

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#regions LambdawebFunctionEndpoint#regions}.

---

##### `revisionWeight`<sup>Optional</sup> <a name="revisionWeight" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.revisionWeight"></a>

```typescript
public readonly revisionWeight: IResolvable | LambdawebFunctionEndpointRevisionWeight[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight">LambdawebFunctionEndpointRevisionWeight</a>[]

revision_weight block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#revision_weight LambdawebFunctionEndpoint#revision_weight}

---

##### `scalingConfig`<sup>Optional</sup> <a name="scalingConfig" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.scalingConfig"></a>

```typescript
public readonly scalingConfig: IResolvable | LambdawebFunctionEndpointScalingConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig">LambdawebFunctionEndpointScalingConfig</a>[]

scaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#scaling_config LambdawebFunctionEndpoint#scaling_config}

---

##### `throttleConfig`<sup>Optional</sup> <a name="throttleConfig" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.throttleConfig"></a>

```typescript
public readonly throttleConfig: IResolvable | LambdawebFunctionEndpointThrottleConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig">LambdawebFunctionEndpointThrottleConfig</a>[]

throttle_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#throttle_config LambdawebFunctionEndpoint#throttle_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LambdawebFunctionEndpointTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts">LambdawebFunctionEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#timeouts LambdawebFunctionEndpoint#timeouts}

---

### LambdawebFunctionEndpointRevisionWeight <a name="LambdawebFunctionEndpointRevisionWeight" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight.Initializer"></a>

```typescript
import { lambdawebFunctionEndpoint } from '@cdktn/provider-aws'

const lambdawebFunctionEndpointRevisionWeight: lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight.property.revisionId">revisionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#revision_id LambdawebFunctionEndpoint#revision_id}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight.property.weight">weight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#weight LambdawebFunctionEndpoint#weight}. |

---

##### `revisionId`<sup>Required</sup> <a name="revisionId" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight.property.revisionId"></a>

```typescript
public readonly revisionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#revision_id LambdawebFunctionEndpoint#revision_id}.

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#weight LambdawebFunctionEndpoint#weight}.

---

### LambdawebFunctionEndpointScalingConfig <a name="LambdawebFunctionEndpointScalingConfig" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig.Initializer"></a>

```typescript
import { lambdawebFunctionEndpoint } from '@cdktn/provider-aws'

const lambdawebFunctionEndpointScalingConfig: lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig.property.maxEnvironments">maxEnvironments</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#max_environments LambdawebFunctionEndpoint#max_environments}. |

---

##### `maxEnvironments`<sup>Required</sup> <a name="maxEnvironments" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig.property.maxEnvironments"></a>

```typescript
public readonly maxEnvironments: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#max_environments LambdawebFunctionEndpoint#max_environments}.

---

### LambdawebFunctionEndpointThrottleConfig <a name="LambdawebFunctionEndpointThrottleConfig" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig.Initializer"></a>

```typescript
import { lambdawebFunctionEndpoint } from '@cdktn/provider-aws'

const lambdawebFunctionEndpointThrottleConfig: lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig.property.rateLimit">rateLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#rate_limit LambdawebFunctionEndpoint#rate_limit}. |

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig.property.rateLimit"></a>

```typescript
public readonly rateLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#rate_limit LambdawebFunctionEndpoint#rate_limit}.

---

### LambdawebFunctionEndpointTimeouts <a name="LambdawebFunctionEndpointTimeouts" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts.Initializer"></a>

```typescript
import { lambdawebFunctionEndpoint } from '@cdktn/provider-aws'

const lambdawebFunctionEndpointTimeouts: lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#create LambdawebFunctionEndpoint#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#delete LambdawebFunctionEndpoint#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#update LambdawebFunctionEndpoint#update}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdawebFunctionEndpointRevisionWeightList <a name="LambdawebFunctionEndpointRevisionWeightList" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.Initializer"></a>

```typescript
import { lambdawebFunctionEndpoint } from '@cdktn/provider-aws'

new lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.get"></a>

```typescript
public get(index: number): LambdawebFunctionEndpointRevisionWeightOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight">LambdawebFunctionEndpointRevisionWeight</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdawebFunctionEndpointRevisionWeight[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight">LambdawebFunctionEndpointRevisionWeight</a>[]

---


### LambdawebFunctionEndpointRevisionWeightOutputReference <a name="LambdawebFunctionEndpointRevisionWeightOutputReference" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.Initializer"></a>

```typescript
import { lambdawebFunctionEndpoint } from '@cdktn/provider-aws'

new lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.revisionIdInput">revisionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.revisionId">revisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight">LambdawebFunctionEndpointRevisionWeight</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `revisionIdInput`<sup>Optional</sup> <a name="revisionIdInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.revisionIdInput"></a>

```typescript
public readonly revisionIdInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `revisionId`<sup>Required</sup> <a name="revisionId" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.revisionId"></a>

```typescript
public readonly revisionId: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdawebFunctionEndpointRevisionWeight;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight">LambdawebFunctionEndpointRevisionWeight</a>

---


### LambdawebFunctionEndpointScalingConfigList <a name="LambdawebFunctionEndpointScalingConfigList" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.Initializer"></a>

```typescript
import { lambdawebFunctionEndpoint } from '@cdktn/provider-aws'

new lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.get"></a>

```typescript
public get(index: number): LambdawebFunctionEndpointScalingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig">LambdawebFunctionEndpointScalingConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdawebFunctionEndpointScalingConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig">LambdawebFunctionEndpointScalingConfig</a>[]

---


### LambdawebFunctionEndpointScalingConfigOutputReference <a name="LambdawebFunctionEndpointScalingConfigOutputReference" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.Initializer"></a>

```typescript
import { lambdawebFunctionEndpoint } from '@cdktn/provider-aws'

new lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.property.maxEnvironmentsInput">maxEnvironmentsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.property.maxEnvironments">maxEnvironments</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig">LambdawebFunctionEndpointScalingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxEnvironmentsInput`<sup>Optional</sup> <a name="maxEnvironmentsInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.property.maxEnvironmentsInput"></a>

```typescript
public readonly maxEnvironmentsInput: number;
```

- *Type:* number

---

##### `maxEnvironments`<sup>Required</sup> <a name="maxEnvironments" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.property.maxEnvironments"></a>

```typescript
public readonly maxEnvironments: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdawebFunctionEndpointScalingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig">LambdawebFunctionEndpointScalingConfig</a>

---


### LambdawebFunctionEndpointThrottleConfigList <a name="LambdawebFunctionEndpointThrottleConfigList" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.Initializer"></a>

```typescript
import { lambdawebFunctionEndpoint } from '@cdktn/provider-aws'

new lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.get"></a>

```typescript
public get(index: number): LambdawebFunctionEndpointThrottleConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig">LambdawebFunctionEndpointThrottleConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdawebFunctionEndpointThrottleConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig">LambdawebFunctionEndpointThrottleConfig</a>[]

---


### LambdawebFunctionEndpointThrottleConfigOutputReference <a name="LambdawebFunctionEndpointThrottleConfigOutputReference" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.Initializer"></a>

```typescript
import { lambdawebFunctionEndpoint } from '@cdktn/provider-aws'

new lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.property.rateLimitInput">rateLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.property.rateLimit">rateLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig">LambdawebFunctionEndpointThrottleConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rateLimitInput`<sup>Optional</sup> <a name="rateLimitInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.property.rateLimitInput"></a>

```typescript
public readonly rateLimitInput: number;
```

- *Type:* number

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.property.rateLimit"></a>

```typescript
public readonly rateLimit: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdawebFunctionEndpointThrottleConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig">LambdawebFunctionEndpointThrottleConfig</a>

---


### LambdawebFunctionEndpointTimeoutsOutputReference <a name="LambdawebFunctionEndpointTimeoutsOutputReference" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.Initializer"></a>

```typescript
import { lambdawebFunctionEndpoint } from '@cdktn/provider-aws'

new lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts">LambdawebFunctionEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdawebFunctionEndpointTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts">LambdawebFunctionEndpointTimeouts</a>

---



