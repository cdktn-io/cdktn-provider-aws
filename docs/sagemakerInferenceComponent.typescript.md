# `sagemakerInferenceComponent` Submodule <a name="`sagemakerInferenceComponent` Submodule" id="@cdktn/provider-aws.sagemakerInferenceComponent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerInferenceComponent <a name="SagemakerInferenceComponent" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component aws_sagemaker_inference_component}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponent(scope: Construct, id: string, config: SagemakerInferenceComponentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig">SagemakerInferenceComponentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig">SagemakerInferenceComponentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putDeploymentConfig">putDeploymentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putRuntimeConfig">putRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putSpecification">putSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putSpecifications">putSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetDeploymentConfig">resetDeploymentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetRuntimeConfig">resetRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetSpecification">resetSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetSpecifications">resetSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetVariantName">resetVariantName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeploymentConfig` <a name="putDeploymentConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putDeploymentConfig"></a>

```typescript
public putDeploymentConfig(value: IResolvable | SagemakerInferenceComponentDeploymentConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putDeploymentConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig">SagemakerInferenceComponentDeploymentConfig</a>[]

---

##### `putRuntimeConfig` <a name="putRuntimeConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putRuntimeConfig"></a>

```typescript
public putRuntimeConfig(value: IResolvable | SagemakerInferenceComponentRuntimeConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putRuntimeConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig">SagemakerInferenceComponentRuntimeConfig</a>[]

---

##### `putSpecification` <a name="putSpecification" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putSpecification"></a>

```typescript
public putSpecification(value: IResolvable | SagemakerInferenceComponentSpecification[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putSpecification.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification">SagemakerInferenceComponentSpecification</a>[]

---

##### `putSpecifications` <a name="putSpecifications" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putSpecifications"></a>

```typescript
public putSpecifications(value: IResolvable | SagemakerInferenceComponentSpecifications[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putSpecifications.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications">SagemakerInferenceComponentSpecifications</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putTimeouts"></a>

```typescript
public putTimeouts(value: SagemakerInferenceComponentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts">SagemakerInferenceComponentTimeouts</a>

---

##### `resetDeploymentConfig` <a name="resetDeploymentConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetDeploymentConfig"></a>

```typescript
public resetDeploymentConfig(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRuntimeConfig` <a name="resetRuntimeConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetRuntimeConfig"></a>

```typescript
public resetRuntimeConfig(): void
```

##### `resetSpecification` <a name="resetSpecification" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetSpecification"></a>

```typescript
public resetSpecification(): void
```

##### `resetSpecifications` <a name="resetSpecifications" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetSpecifications"></a>

```typescript
public resetSpecifications(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVariantName` <a name="resetVariantName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.resetVariantName"></a>

```typescript
public resetVariantName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerInferenceComponent resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.isConstruct"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

sagemakerInferenceComponent.SagemakerInferenceComponent.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.isTerraformElement"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

sagemakerInferenceComponent.SagemakerInferenceComponent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.isTerraformResource"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

sagemakerInferenceComponent.SagemakerInferenceComponent.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.generateConfigForImport"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

sagemakerInferenceComponent.SagemakerInferenceComponent.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SagemakerInferenceComponent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerInferenceComponent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerInferenceComponent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerInferenceComponent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.deploymentConfig">deploymentConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList">SagemakerInferenceComponentDeploymentConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.endpointArn">endpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.failureReason">failureReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.lastModifiedTime">lastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.runtimeConfig">runtimeConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList">SagemakerInferenceComponentRuntimeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.specification">specification</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList">SagemakerInferenceComponentSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.specifications">specifications</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList">SagemakerInferenceComponentSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tagsAll">tagsAll</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference">SagemakerInferenceComponentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.deploymentConfigInput">deploymentConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig">SagemakerInferenceComponentDeploymentConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.endpointNameInput">endpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.runtimeConfigInput">runtimeConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig">SagemakerInferenceComponentRuntimeConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.specificationInput">specificationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification">SagemakerInferenceComponentSpecification</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.specificationsInput">specificationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications">SagemakerInferenceComponentSpecifications</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts">SagemakerInferenceComponentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.variantNameInput">variantNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.endpointName">endpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.variantName">variantName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `deploymentConfig`<sup>Required</sup> <a name="deploymentConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.deploymentConfig"></a>

```typescript
public readonly deploymentConfig: SagemakerInferenceComponentDeploymentConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList">SagemakerInferenceComponentDeploymentConfigList</a>

---

##### `endpointArn`<sup>Required</sup> <a name="endpointArn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.endpointArn"></a>

```typescript
public readonly endpointArn: string;
```

- *Type:* string

---

##### `failureReason`<sup>Required</sup> <a name="failureReason" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.failureReason"></a>

```typescript
public readonly failureReason: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: string;
```

- *Type:* string

---

##### `runtimeConfig`<sup>Required</sup> <a name="runtimeConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.runtimeConfig"></a>

```typescript
public readonly runtimeConfig: SagemakerInferenceComponentRuntimeConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList">SagemakerInferenceComponentRuntimeConfigList</a>

---

##### `specification`<sup>Required</sup> <a name="specification" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.specification"></a>

```typescript
public readonly specification: SagemakerInferenceComponentSpecificationList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList">SagemakerInferenceComponentSpecificationList</a>

---

##### `specifications`<sup>Required</sup> <a name="specifications" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.specifications"></a>

```typescript
public readonly specifications: SagemakerInferenceComponentSpecificationsList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList">SagemakerInferenceComponentSpecificationsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.timeouts"></a>

```typescript
public readonly timeouts: SagemakerInferenceComponentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference">SagemakerInferenceComponentTimeoutsOutputReference</a>

---

##### `deploymentConfigInput`<sup>Optional</sup> <a name="deploymentConfigInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.deploymentConfigInput"></a>

```typescript
public readonly deploymentConfigInput: IResolvable | SagemakerInferenceComponentDeploymentConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig">SagemakerInferenceComponentDeploymentConfig</a>[]

---

##### `endpointNameInput`<sup>Optional</sup> <a name="endpointNameInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.endpointNameInput"></a>

```typescript
public readonly endpointNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `runtimeConfigInput`<sup>Optional</sup> <a name="runtimeConfigInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.runtimeConfigInput"></a>

```typescript
public readonly runtimeConfigInput: IResolvable | SagemakerInferenceComponentRuntimeConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig">SagemakerInferenceComponentRuntimeConfig</a>[]

---

##### `specificationInput`<sup>Optional</sup> <a name="specificationInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.specificationInput"></a>

```typescript
public readonly specificationInput: IResolvable | SagemakerInferenceComponentSpecification[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification">SagemakerInferenceComponentSpecification</a>[]

---

##### `specificationsInput`<sup>Optional</sup> <a name="specificationsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.specificationsInput"></a>

```typescript
public readonly specificationsInput: IResolvable | SagemakerInferenceComponentSpecifications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications">SagemakerInferenceComponentSpecifications</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SagemakerInferenceComponentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts">SagemakerInferenceComponentTimeouts</a>

---

##### `variantNameInput`<sup>Optional</sup> <a name="variantNameInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.variantNameInput"></a>

```typescript
public readonly variantNameInput: string;
```

- *Type:* string

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `variantName`<sup>Required</sup> <a name="variantName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.variantName"></a>

```typescript
public readonly variantName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerInferenceComponentConfig <a name="SagemakerInferenceComponentConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

const sagemakerInferenceComponentConfig: sagemakerInferenceComponent.SagemakerInferenceComponentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.endpointName">endpointName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#endpoint_name SagemakerInferenceComponent#endpoint_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#name SagemakerInferenceComponent#name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.deploymentConfig">deploymentConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig">SagemakerInferenceComponentDeploymentConfig</a>[]</code> | deployment_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.runtimeConfig">runtimeConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig">SagemakerInferenceComponentRuntimeConfig</a>[]</code> | runtime_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.specification">specification</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification">SagemakerInferenceComponentSpecification</a>[]</code> | specification block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.specifications">specifications</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications">SagemakerInferenceComponentSpecifications</a>[]</code> | specifications block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#tags SagemakerInferenceComponent#tags}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts">SagemakerInferenceComponentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.variantName">variantName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#variant_name SagemakerInferenceComponent#variant_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#endpoint_name SagemakerInferenceComponent#endpoint_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#name SagemakerInferenceComponent#name}.

---

##### `deploymentConfig`<sup>Optional</sup> <a name="deploymentConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.deploymentConfig"></a>

```typescript
public readonly deploymentConfig: IResolvable | SagemakerInferenceComponentDeploymentConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig">SagemakerInferenceComponentDeploymentConfig</a>[]

deployment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#deployment_config SagemakerInferenceComponent#deployment_config}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#region SagemakerInferenceComponent#region}

---

##### `runtimeConfig`<sup>Optional</sup> <a name="runtimeConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.runtimeConfig"></a>

```typescript
public readonly runtimeConfig: IResolvable | SagemakerInferenceComponentRuntimeConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig">SagemakerInferenceComponentRuntimeConfig</a>[]

runtime_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#runtime_config SagemakerInferenceComponent#runtime_config}

---

##### `specification`<sup>Optional</sup> <a name="specification" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.specification"></a>

```typescript
public readonly specification: IResolvable | SagemakerInferenceComponentSpecification[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification">SagemakerInferenceComponentSpecification</a>[]

specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#specification SagemakerInferenceComponent#specification}

---

##### `specifications`<sup>Optional</sup> <a name="specifications" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.specifications"></a>

```typescript
public readonly specifications: IResolvable | SagemakerInferenceComponentSpecifications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications">SagemakerInferenceComponentSpecifications</a>[]

specifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#specifications SagemakerInferenceComponent#specifications}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#tags SagemakerInferenceComponent#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SagemakerInferenceComponentTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts">SagemakerInferenceComponentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#timeouts SagemakerInferenceComponent#timeouts}

---

##### `variantName`<sup>Optional</sup> <a name="variantName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentConfig.property.variantName"></a>

```typescript
public readonly variantName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#variant_name SagemakerInferenceComponent#variant_name}.

---

### SagemakerInferenceComponentDeploymentConfig <a name="SagemakerInferenceComponentDeploymentConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

const sagemakerInferenceComponentDeploymentConfig: sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig.property.autoRollbackConfiguration">autoRollbackConfiguration</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration</a>[]</code> | auto_rollback_configuration block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig.property.rollingUpdatePolicy">rollingUpdatePolicy</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy</a>[]</code> | rolling_update_policy block. |

---

##### `autoRollbackConfiguration`<sup>Optional</sup> <a name="autoRollbackConfiguration" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig.property.autoRollbackConfiguration"></a>

```typescript
public readonly autoRollbackConfiguration: IResolvable | SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration</a>[]

auto_rollback_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#auto_rollback_configuration SagemakerInferenceComponent#auto_rollback_configuration}

---

##### `rollingUpdatePolicy`<sup>Optional</sup> <a name="rollingUpdatePolicy" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig.property.rollingUpdatePolicy"></a>

```typescript
public readonly rollingUpdatePolicy: IResolvable | SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy</a>[]

rolling_update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#rolling_update_policy SagemakerInferenceComponent#rolling_update_policy}

---

### SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration <a name="SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

const sagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration: sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration.property.alarms">alarms</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms</a>[]</code> | alarms block. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration.property.alarms"></a>

```typescript
public readonly alarms: IResolvable | SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms</a>[]

alarms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#alarms SagemakerInferenceComponent#alarms}

---

### SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms <a name="SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

const sagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms: sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms.property.alarmName">alarmName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#alarm_name SagemakerInferenceComponent#alarm_name}. |

---

##### `alarmName`<sup>Required</sup> <a name="alarmName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms.property.alarmName"></a>

```typescript
public readonly alarmName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#alarm_name SagemakerInferenceComponent#alarm_name}.

---

### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

const sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy: sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.waitIntervalInSeconds">waitIntervalInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#wait_interval_in_seconds SagemakerInferenceComponent#wait_interval_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.maximumBatchSize">maximumBatchSize</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>[]</code> | maximum_batch_size block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.maximumExecutionTimeoutInSeconds">maximumExecutionTimeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#maximum_execution_timeout_in_seconds SagemakerInferenceComponent#maximum_execution_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.rollbackMaximumBatchSize">rollbackMaximumBatchSize</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>[]</code> | rollback_maximum_batch_size block. |

---

##### `waitIntervalInSeconds`<sup>Required</sup> <a name="waitIntervalInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.waitIntervalInSeconds"></a>

```typescript
public readonly waitIntervalInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#wait_interval_in_seconds SagemakerInferenceComponent#wait_interval_in_seconds}.

---

##### `maximumBatchSize`<sup>Optional</sup> <a name="maximumBatchSize" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.maximumBatchSize"></a>

```typescript
public readonly maximumBatchSize: IResolvable | SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>[]

maximum_batch_size block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#maximum_batch_size SagemakerInferenceComponent#maximum_batch_size}

---

##### `maximumExecutionTimeoutInSeconds`<sup>Optional</sup> <a name="maximumExecutionTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.maximumExecutionTimeoutInSeconds"></a>

```typescript
public readonly maximumExecutionTimeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#maximum_execution_timeout_in_seconds SagemakerInferenceComponent#maximum_execution_timeout_in_seconds}.

---

##### `rollbackMaximumBatchSize`<sup>Optional</sup> <a name="rollbackMaximumBatchSize" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy.property.rollbackMaximumBatchSize"></a>

```typescript
public readonly rollbackMaximumBatchSize: IResolvable | SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>[]

rollback_maximum_batch_size block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#rollback_maximum_batch_size SagemakerInferenceComponent#rollback_maximum_batch_size}

---

### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

const sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize: sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#type SagemakerInferenceComponent#type}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#value SagemakerInferenceComponent#value}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#type SagemakerInferenceComponent#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#value SagemakerInferenceComponent#value}.

---

### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

const sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize: sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#type SagemakerInferenceComponent#type}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#value SagemakerInferenceComponent#value}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#type SagemakerInferenceComponent#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#value SagemakerInferenceComponent#value}.

---

### SagemakerInferenceComponentRuntimeConfig <a name="SagemakerInferenceComponentRuntimeConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

const sagemakerInferenceComponentRuntimeConfig: sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig.property.copyCount">copyCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#copy_count SagemakerInferenceComponent#copy_count}. |

---

##### `copyCount`<sup>Required</sup> <a name="copyCount" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig.property.copyCount"></a>

```typescript
public readonly copyCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#copy_count SagemakerInferenceComponent#copy_count}.

---

### SagemakerInferenceComponentRuntimeConfigPlacementStatus <a name="SagemakerInferenceComponentRuntimeConfigPlacementStatus" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatus.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

const sagemakerInferenceComponentRuntimeConfigPlacementStatus: sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatus = { ... }
```


### SagemakerInferenceComponentSpecification <a name="SagemakerInferenceComponentSpecification" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

const sagemakerInferenceComponentSpecification: sagemakerInferenceComponent.SagemakerInferenceComponentSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.baseInferenceComponentName">baseInferenceComponentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#base_inference_component_name SagemakerInferenceComponent#base_inference_component_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.computeResourceRequirements">computeResourceRequirements</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements">SagemakerInferenceComponentSpecificationComputeResourceRequirements</a>[]</code> | compute_resource_requirements block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.container">container</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer">SagemakerInferenceComponentSpecificationContainer</a>[]</code> | container block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.dataCacheConfig">dataCacheConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig">SagemakerInferenceComponentSpecificationDataCacheConfig</a>[]</code> | data_cache_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#instance_type SagemakerInferenceComponent#instance_type}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.modelName">modelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#model_name SagemakerInferenceComponent#model_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.schedulingConfig">schedulingConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig">SagemakerInferenceComponentSpecificationSchedulingConfig</a>[]</code> | scheduling_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.startupParameters">startupParameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters">SagemakerInferenceComponentSpecificationStartupParameters</a>[]</code> | startup_parameters block. |

---

##### `baseInferenceComponentName`<sup>Optional</sup> <a name="baseInferenceComponentName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.baseInferenceComponentName"></a>

```typescript
public readonly baseInferenceComponentName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#base_inference_component_name SagemakerInferenceComponent#base_inference_component_name}.

---

##### `computeResourceRequirements`<sup>Optional</sup> <a name="computeResourceRequirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.computeResourceRequirements"></a>

```typescript
public readonly computeResourceRequirements: IResolvable | SagemakerInferenceComponentSpecificationComputeResourceRequirements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements">SagemakerInferenceComponentSpecificationComputeResourceRequirements</a>[]

compute_resource_requirements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#compute_resource_requirements SagemakerInferenceComponent#compute_resource_requirements}

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.container"></a>

```typescript
public readonly container: IResolvable | SagemakerInferenceComponentSpecificationContainer[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer">SagemakerInferenceComponentSpecificationContainer</a>[]

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#container SagemakerInferenceComponent#container}

---

##### `dataCacheConfig`<sup>Optional</sup> <a name="dataCacheConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.dataCacheConfig"></a>

```typescript
public readonly dataCacheConfig: IResolvable | SagemakerInferenceComponentSpecificationDataCacheConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig">SagemakerInferenceComponentSpecificationDataCacheConfig</a>[]

data_cache_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#data_cache_config SagemakerInferenceComponent#data_cache_config}

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#instance_type SagemakerInferenceComponent#instance_type}.

---

##### `modelName`<sup>Optional</sup> <a name="modelName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#model_name SagemakerInferenceComponent#model_name}.

---

##### `schedulingConfig`<sup>Optional</sup> <a name="schedulingConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.schedulingConfig"></a>

```typescript
public readonly schedulingConfig: IResolvable | SagemakerInferenceComponentSpecificationSchedulingConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig">SagemakerInferenceComponentSpecificationSchedulingConfig</a>[]

scheduling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#scheduling_config SagemakerInferenceComponent#scheduling_config}

---

##### `startupParameters`<sup>Optional</sup> <a name="startupParameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification.property.startupParameters"></a>

```typescript
public readonly startupParameters: IResolvable | SagemakerInferenceComponentSpecificationStartupParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters">SagemakerInferenceComponentSpecificationStartupParameters</a>[]

startup_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#startup_parameters SagemakerInferenceComponent#startup_parameters}

---

### SagemakerInferenceComponentSpecificationComputeResourceRequirements <a name="SagemakerInferenceComponentSpecificationComputeResourceRequirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

const sagemakerInferenceComponentSpecificationComputeResourceRequirements: sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.minMemoryRequiredInMb">minMemoryRequiredInMb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#min_memory_required_in_mb SagemakerInferenceComponent#min_memory_required_in_mb}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.maxMemoryRequiredInMb">maxMemoryRequiredInMb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#max_memory_required_in_mb SagemakerInferenceComponent#max_memory_required_in_mb}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.numberOfAcceleratorDevicesRequired">numberOfAcceleratorDevicesRequired</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#number_of_accelerator_devices_required SagemakerInferenceComponent#number_of_accelerator_devices_required}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.numberOfCpuCoresRequired">numberOfCpuCoresRequired</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#number_of_cpu_cores_required SagemakerInferenceComponent#number_of_cpu_cores_required}. |

---

##### `minMemoryRequiredInMb`<sup>Required</sup> <a name="minMemoryRequiredInMb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.minMemoryRequiredInMb"></a>

```typescript
public readonly minMemoryRequiredInMb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#min_memory_required_in_mb SagemakerInferenceComponent#min_memory_required_in_mb}.

---

##### `maxMemoryRequiredInMb`<sup>Optional</sup> <a name="maxMemoryRequiredInMb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.maxMemoryRequiredInMb"></a>

```typescript
public readonly maxMemoryRequiredInMb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#max_memory_required_in_mb SagemakerInferenceComponent#max_memory_required_in_mb}.

---

##### `numberOfAcceleratorDevicesRequired`<sup>Optional</sup> <a name="numberOfAcceleratorDevicesRequired" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.numberOfAcceleratorDevicesRequired"></a>

```typescript
public readonly numberOfAcceleratorDevicesRequired: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#number_of_accelerator_devices_required SagemakerInferenceComponent#number_of_accelerator_devices_required}.

---

##### `numberOfCpuCoresRequired`<sup>Optional</sup> <a name="numberOfCpuCoresRequired" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements.property.numberOfCpuCoresRequired"></a>

```typescript
public readonly numberOfCpuCoresRequired: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#number_of_cpu_cores_required SagemakerInferenceComponent#number_of_cpu_cores_required}.

---

### SagemakerInferenceComponentSpecificationContainer <a name="SagemakerInferenceComponentSpecificationContainer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

const sagemakerInferenceComponentSpecificationContainer: sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.artifactUrl">artifactUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#artifact_url SagemakerInferenceComponent#artifact_url}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.containerMetricsConfig">containerMetricsConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig</a>[]</code> | container_metrics_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#environment SagemakerInferenceComponent#environment}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.image">image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#image SagemakerInferenceComponent#image}. |

---

##### `artifactUrl`<sup>Optional</sup> <a name="artifactUrl" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.artifactUrl"></a>

```typescript
public readonly artifactUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#artifact_url SagemakerInferenceComponent#artifact_url}.

---

##### `containerMetricsConfig`<sup>Optional</sup> <a name="containerMetricsConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.containerMetricsConfig"></a>

```typescript
public readonly containerMetricsConfig: IResolvable | SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig</a>[]

container_metrics_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#container_metrics_config SagemakerInferenceComponent#container_metrics_config}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#environment SagemakerInferenceComponent#environment}.

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#image SagemakerInferenceComponent#image}.

---

### SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig <a name="SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

const sagemakerInferenceComponentSpecificationContainerContainerMetricsConfig: sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig.property.metricsEndpoint">metricsEndpoint</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint</a>[]</code> | metrics_endpoint block. |

---

##### `metricsEndpoint`<sup>Optional</sup> <a name="metricsEndpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig.property.metricsEndpoint"></a>

```typescript
public readonly metricsEndpoint: IResolvable | SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint</a>[]

metrics_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#metrics_endpoint SagemakerInferenceComponent#metrics_endpoint}

---

### SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint <a name="SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

const sagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint: sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint.property.metricsEndpointPath">metricsEndpointPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#metrics_endpoint_path SagemakerInferenceComponent#metrics_endpoint_path}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint.property.metricPublishFrequencyInSeconds">metricPublishFrequencyInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#metric_publish_frequency_in_seconds SagemakerInferenceComponent#metric_publish_frequency_in_seconds}. |

---

##### `metricsEndpointPath`<sup>Required</sup> <a name="metricsEndpointPath" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint.property.metricsEndpointPath"></a>

```typescript
public readonly metricsEndpointPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#metrics_endpoint_path SagemakerInferenceComponent#metrics_endpoint_path}.

---

##### `metricPublishFrequencyInSeconds`<sup>Optional</sup> <a name="metricPublishFrequencyInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint.property.metricPublishFrequencyInSeconds"></a>

```typescript
public readonly metricPublishFrequencyInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#metric_publish_frequency_in_seconds SagemakerInferenceComponent#metric_publish_frequency_in_seconds}.

---

### SagemakerInferenceComponentSpecificationDataCacheConfig <a name="SagemakerInferenceComponentSpecificationDataCacheConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

const sagemakerInferenceComponentSpecificationDataCacheConfig: sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig.property.enableCaching">enableCaching</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#enable_caching SagemakerInferenceComponent#enable_caching}. |

---

##### `enableCaching`<sup>Required</sup> <a name="enableCaching" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig.property.enableCaching"></a>

```typescript
public readonly enableCaching: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#enable_caching SagemakerInferenceComponent#enable_caching}.

---

### SagemakerInferenceComponentSpecifications <a name="SagemakerInferenceComponentSpecifications" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

const sagemakerInferenceComponentSpecifications: sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.baseInferenceComponentName">baseInferenceComponentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#base_inference_component_name SagemakerInferenceComponent#base_inference_component_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.computeResourceRequirements">computeResourceRequirements</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements">SagemakerInferenceComponentSpecificationsComputeResourceRequirements</a>[]</code> | compute_resource_requirements block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.container">container</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer">SagemakerInferenceComponentSpecificationsContainer</a>[]</code> | container block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.dataCacheConfig">dataCacheConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig">SagemakerInferenceComponentSpecificationsDataCacheConfig</a>[]</code> | data_cache_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#instance_type SagemakerInferenceComponent#instance_type}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.modelName">modelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#model_name SagemakerInferenceComponent#model_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.schedulingConfig">schedulingConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig">SagemakerInferenceComponentSpecificationsSchedulingConfig</a>[]</code> | scheduling_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.startupParameters">startupParameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters">SagemakerInferenceComponentSpecificationsStartupParameters</a>[]</code> | startup_parameters block. |

---

##### `baseInferenceComponentName`<sup>Optional</sup> <a name="baseInferenceComponentName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.baseInferenceComponentName"></a>

```typescript
public readonly baseInferenceComponentName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#base_inference_component_name SagemakerInferenceComponent#base_inference_component_name}.

---

##### `computeResourceRequirements`<sup>Optional</sup> <a name="computeResourceRequirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.computeResourceRequirements"></a>

```typescript
public readonly computeResourceRequirements: IResolvable | SagemakerInferenceComponentSpecificationsComputeResourceRequirements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements">SagemakerInferenceComponentSpecificationsComputeResourceRequirements</a>[]

compute_resource_requirements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#compute_resource_requirements SagemakerInferenceComponent#compute_resource_requirements}

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.container"></a>

```typescript
public readonly container: IResolvable | SagemakerInferenceComponentSpecificationsContainer[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer">SagemakerInferenceComponentSpecificationsContainer</a>[]

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#container SagemakerInferenceComponent#container}

---

##### `dataCacheConfig`<sup>Optional</sup> <a name="dataCacheConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.dataCacheConfig"></a>

```typescript
public readonly dataCacheConfig: IResolvable | SagemakerInferenceComponentSpecificationsDataCacheConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig">SagemakerInferenceComponentSpecificationsDataCacheConfig</a>[]

data_cache_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#data_cache_config SagemakerInferenceComponent#data_cache_config}

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#instance_type SagemakerInferenceComponent#instance_type}.

---

##### `modelName`<sup>Optional</sup> <a name="modelName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#model_name SagemakerInferenceComponent#model_name}.

---

##### `schedulingConfig`<sup>Optional</sup> <a name="schedulingConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.schedulingConfig"></a>

```typescript
public readonly schedulingConfig: IResolvable | SagemakerInferenceComponentSpecificationsSchedulingConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig">SagemakerInferenceComponentSpecificationsSchedulingConfig</a>[]

scheduling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#scheduling_config SagemakerInferenceComponent#scheduling_config}

---

##### `startupParameters`<sup>Optional</sup> <a name="startupParameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications.property.startupParameters"></a>

```typescript
public readonly startupParameters: IResolvable | SagemakerInferenceComponentSpecificationsStartupParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters">SagemakerInferenceComponentSpecificationsStartupParameters</a>[]

startup_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#startup_parameters SagemakerInferenceComponent#startup_parameters}

---

### SagemakerInferenceComponentSpecificationSchedulingConfig <a name="SagemakerInferenceComponentSpecificationSchedulingConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

const sagemakerInferenceComponentSpecificationSchedulingConfig: sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig.property.placementStrategy">placementStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#placement_strategy SagemakerInferenceComponent#placement_strategy}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig.property.availabilityZoneBalance">availabilityZoneBalance</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance</a>[]</code> | availability_zone_balance block. |

---

##### `placementStrategy`<sup>Required</sup> <a name="placementStrategy" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig.property.placementStrategy"></a>

```typescript
public readonly placementStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#placement_strategy SagemakerInferenceComponent#placement_strategy}.

---

##### `availabilityZoneBalance`<sup>Optional</sup> <a name="availabilityZoneBalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig.property.availabilityZoneBalance"></a>

```typescript
public readonly availabilityZoneBalance: IResolvable | SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance</a>[]

availability_zone_balance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#availability_zone_balance SagemakerInferenceComponent#availability_zone_balance}

---

### SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance <a name="SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

const sagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance: sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance.property.enforcementMode">enforcementMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#enforcement_mode SagemakerInferenceComponent#enforcement_mode}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance.property.maxImbalance">maxImbalance</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#max_imbalance SagemakerInferenceComponent#max_imbalance}. |

---

##### `enforcementMode`<sup>Required</sup> <a name="enforcementMode" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance.property.enforcementMode"></a>

```typescript
public readonly enforcementMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#enforcement_mode SagemakerInferenceComponent#enforcement_mode}.

---

##### `maxImbalance`<sup>Optional</sup> <a name="maxImbalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance.property.maxImbalance"></a>

```typescript
public readonly maxImbalance: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#max_imbalance SagemakerInferenceComponent#max_imbalance}.

---

### SagemakerInferenceComponentSpecificationsComputeResourceRequirements <a name="SagemakerInferenceComponentSpecificationsComputeResourceRequirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

const sagemakerInferenceComponentSpecificationsComputeResourceRequirements: sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements.property.minMemoryRequiredInMb">minMemoryRequiredInMb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#min_memory_required_in_mb SagemakerInferenceComponent#min_memory_required_in_mb}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements.property.maxMemoryRequiredInMb">maxMemoryRequiredInMb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#max_memory_required_in_mb SagemakerInferenceComponent#max_memory_required_in_mb}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements.property.numberOfAcceleratorDevicesRequired">numberOfAcceleratorDevicesRequired</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#number_of_accelerator_devices_required SagemakerInferenceComponent#number_of_accelerator_devices_required}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements.property.numberOfCpuCoresRequired">numberOfCpuCoresRequired</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#number_of_cpu_cores_required SagemakerInferenceComponent#number_of_cpu_cores_required}. |

---

##### `minMemoryRequiredInMb`<sup>Required</sup> <a name="minMemoryRequiredInMb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements.property.minMemoryRequiredInMb"></a>

```typescript
public readonly minMemoryRequiredInMb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#min_memory_required_in_mb SagemakerInferenceComponent#min_memory_required_in_mb}.

---

##### `maxMemoryRequiredInMb`<sup>Optional</sup> <a name="maxMemoryRequiredInMb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements.property.maxMemoryRequiredInMb"></a>

```typescript
public readonly maxMemoryRequiredInMb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#max_memory_required_in_mb SagemakerInferenceComponent#max_memory_required_in_mb}.

---

##### `numberOfAcceleratorDevicesRequired`<sup>Optional</sup> <a name="numberOfAcceleratorDevicesRequired" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements.property.numberOfAcceleratorDevicesRequired"></a>

```typescript
public readonly numberOfAcceleratorDevicesRequired: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#number_of_accelerator_devices_required SagemakerInferenceComponent#number_of_accelerator_devices_required}.

---

##### `numberOfCpuCoresRequired`<sup>Optional</sup> <a name="numberOfCpuCoresRequired" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements.property.numberOfCpuCoresRequired"></a>

```typescript
public readonly numberOfCpuCoresRequired: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#number_of_cpu_cores_required SagemakerInferenceComponent#number_of_cpu_cores_required}.

---

### SagemakerInferenceComponentSpecificationsContainer <a name="SagemakerInferenceComponentSpecificationsContainer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

const sagemakerInferenceComponentSpecificationsContainer: sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer.property.artifactUrl">artifactUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#artifact_url SagemakerInferenceComponent#artifact_url}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer.property.containerMetricsConfig">containerMetricsConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig</a>[]</code> | container_metrics_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#environment SagemakerInferenceComponent#environment}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer.property.image">image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#image SagemakerInferenceComponent#image}. |

---

##### `artifactUrl`<sup>Optional</sup> <a name="artifactUrl" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer.property.artifactUrl"></a>

```typescript
public readonly artifactUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#artifact_url SagemakerInferenceComponent#artifact_url}.

---

##### `containerMetricsConfig`<sup>Optional</sup> <a name="containerMetricsConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer.property.containerMetricsConfig"></a>

```typescript
public readonly containerMetricsConfig: IResolvable | SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig</a>[]

container_metrics_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#container_metrics_config SagemakerInferenceComponent#container_metrics_config}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#environment SagemakerInferenceComponent#environment}.

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#image SagemakerInferenceComponent#image}.

---

### SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig <a name="SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

const sagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig: sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig.property.metricsEndpoint">metricsEndpoint</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint</a>[]</code> | metrics_endpoint block. |

---

##### `metricsEndpoint`<sup>Optional</sup> <a name="metricsEndpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig.property.metricsEndpoint"></a>

```typescript
public readonly metricsEndpoint: IResolvable | SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint</a>[]

metrics_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#metrics_endpoint SagemakerInferenceComponent#metrics_endpoint}

---

### SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint <a name="SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

const sagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint: sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint.property.metricsEndpointPath">metricsEndpointPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#metrics_endpoint_path SagemakerInferenceComponent#metrics_endpoint_path}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint.property.metricPublishFrequencyInSeconds">metricPublishFrequencyInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#metric_publish_frequency_in_seconds SagemakerInferenceComponent#metric_publish_frequency_in_seconds}. |

---

##### `metricsEndpointPath`<sup>Required</sup> <a name="metricsEndpointPath" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint.property.metricsEndpointPath"></a>

```typescript
public readonly metricsEndpointPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#metrics_endpoint_path SagemakerInferenceComponent#metrics_endpoint_path}.

---

##### `metricPublishFrequencyInSeconds`<sup>Optional</sup> <a name="metricPublishFrequencyInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint.property.metricPublishFrequencyInSeconds"></a>

```typescript
public readonly metricPublishFrequencyInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#metric_publish_frequency_in_seconds SagemakerInferenceComponent#metric_publish_frequency_in_seconds}.

---

### SagemakerInferenceComponentSpecificationsDataCacheConfig <a name="SagemakerInferenceComponentSpecificationsDataCacheConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

const sagemakerInferenceComponentSpecificationsDataCacheConfig: sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig.property.enableCaching">enableCaching</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#enable_caching SagemakerInferenceComponent#enable_caching}. |

---

##### `enableCaching`<sup>Required</sup> <a name="enableCaching" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig.property.enableCaching"></a>

```typescript
public readonly enableCaching: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#enable_caching SagemakerInferenceComponent#enable_caching}.

---

### SagemakerInferenceComponentSpecificationsSchedulingConfig <a name="SagemakerInferenceComponentSpecificationsSchedulingConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

const sagemakerInferenceComponentSpecificationsSchedulingConfig: sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig.property.placementStrategy">placementStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#placement_strategy SagemakerInferenceComponent#placement_strategy}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig.property.availabilityZoneBalance">availabilityZoneBalance</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance</a>[]</code> | availability_zone_balance block. |

---

##### `placementStrategy`<sup>Required</sup> <a name="placementStrategy" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig.property.placementStrategy"></a>

```typescript
public readonly placementStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#placement_strategy SagemakerInferenceComponent#placement_strategy}.

---

##### `availabilityZoneBalance`<sup>Optional</sup> <a name="availabilityZoneBalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig.property.availabilityZoneBalance"></a>

```typescript
public readonly availabilityZoneBalance: IResolvable | SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance</a>[]

availability_zone_balance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#availability_zone_balance SagemakerInferenceComponent#availability_zone_balance}

---

### SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance <a name="SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

const sagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance: sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance.property.enforcementMode">enforcementMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#enforcement_mode SagemakerInferenceComponent#enforcement_mode}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance.property.maxImbalance">maxImbalance</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#max_imbalance SagemakerInferenceComponent#max_imbalance}. |

---

##### `enforcementMode`<sup>Required</sup> <a name="enforcementMode" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance.property.enforcementMode"></a>

```typescript
public readonly enforcementMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#enforcement_mode SagemakerInferenceComponent#enforcement_mode}.

---

##### `maxImbalance`<sup>Optional</sup> <a name="maxImbalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance.property.maxImbalance"></a>

```typescript
public readonly maxImbalance: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#max_imbalance SagemakerInferenceComponent#max_imbalance}.

---

### SagemakerInferenceComponentSpecificationsStartupParameters <a name="SagemakerInferenceComponentSpecificationsStartupParameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

const sagemakerInferenceComponentSpecificationsStartupParameters: sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters.property.containerStartupHealthCheckTimeoutInSeconds">containerStartupHealthCheckTimeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#container_startup_health_check_timeout_in_seconds SagemakerInferenceComponent#container_startup_health_check_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters.property.modelDataDownloadTimeoutInSeconds">modelDataDownloadTimeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#model_data_download_timeout_in_seconds SagemakerInferenceComponent#model_data_download_timeout_in_seconds}. |

---

##### `containerStartupHealthCheckTimeoutInSeconds`<sup>Optional</sup> <a name="containerStartupHealthCheckTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```typescript
public readonly containerStartupHealthCheckTimeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#container_startup_health_check_timeout_in_seconds SagemakerInferenceComponent#container_startup_health_check_timeout_in_seconds}.

---

##### `modelDataDownloadTimeoutInSeconds`<sup>Optional</sup> <a name="modelDataDownloadTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters.property.modelDataDownloadTimeoutInSeconds"></a>

```typescript
public readonly modelDataDownloadTimeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#model_data_download_timeout_in_seconds SagemakerInferenceComponent#model_data_download_timeout_in_seconds}.

---

### SagemakerInferenceComponentSpecificationStartupParameters <a name="SagemakerInferenceComponentSpecificationStartupParameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

const sagemakerInferenceComponentSpecificationStartupParameters: sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters.property.containerStartupHealthCheckTimeoutInSeconds">containerStartupHealthCheckTimeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#container_startup_health_check_timeout_in_seconds SagemakerInferenceComponent#container_startup_health_check_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters.property.modelDataDownloadTimeoutInSeconds">modelDataDownloadTimeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#model_data_download_timeout_in_seconds SagemakerInferenceComponent#model_data_download_timeout_in_seconds}. |

---

##### `containerStartupHealthCheckTimeoutInSeconds`<sup>Optional</sup> <a name="containerStartupHealthCheckTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```typescript
public readonly containerStartupHealthCheckTimeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#container_startup_health_check_timeout_in_seconds SagemakerInferenceComponent#container_startup_health_check_timeout_in_seconds}.

---

##### `modelDataDownloadTimeoutInSeconds`<sup>Optional</sup> <a name="modelDataDownloadTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters.property.modelDataDownloadTimeoutInSeconds"></a>

```typescript
public readonly modelDataDownloadTimeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#model_data_download_timeout_in_seconds SagemakerInferenceComponent#model_data_download_timeout_in_seconds}.

---

### SagemakerInferenceComponentTimeouts <a name="SagemakerInferenceComponentTimeouts" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

const sagemakerInferenceComponentTimeouts: sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#create SagemakerInferenceComponent#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#delete SagemakerInferenceComponent#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/sagemaker_inference_component#update SagemakerInferenceComponent#update}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList <a name="SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.get"></a>

```typescript
public get(index: number): SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms</a>[]

---


### SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference <a name="SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.alarmNameInput">alarmNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.alarmName">alarmName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alarmNameInput`<sup>Optional</sup> <a name="alarmNameInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.alarmNameInput"></a>

```typescript
public readonly alarmNameInput: string;
```

- *Type:* string

---

##### `alarmName`<sup>Required</sup> <a name="alarmName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.alarmName"></a>

```typescript
public readonly alarmName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms</a>

---


### SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList <a name="SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.get"></a>

```typescript
public get(index: number): SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration</a>[]

---


### SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference <a name="SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.putAlarms">putAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.resetAlarms">resetAlarms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAlarms` <a name="putAlarms" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.putAlarms"></a>

```typescript
public putAlarms(value: IResolvable | SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.putAlarms.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms</a>[]

---

##### `resetAlarms` <a name="resetAlarms" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.resetAlarms"></a>

```typescript
public resetAlarms(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarms">alarms</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarmsInput">alarmsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarms"></a>

```typescript
public readonly alarms: SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList</a>

---

##### `alarmsInput`<sup>Optional</sup> <a name="alarmsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarmsInput"></a>

```typescript
public readonly alarmsInput: IResolvable | SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration</a>

---


### SagemakerInferenceComponentDeploymentConfigList <a name="SagemakerInferenceComponentDeploymentConfigList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.get"></a>

```typescript
public get(index: number): SagemakerInferenceComponentDeploymentConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig">SagemakerInferenceComponentDeploymentConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentDeploymentConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig">SagemakerInferenceComponentDeploymentConfig</a>[]

---


### SagemakerInferenceComponentDeploymentConfigOutputReference <a name="SagemakerInferenceComponentDeploymentConfigOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.putAutoRollbackConfiguration">putAutoRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.putRollingUpdatePolicy">putRollingUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.resetAutoRollbackConfiguration">resetAutoRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.resetRollingUpdatePolicy">resetRollingUpdatePolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoRollbackConfiguration` <a name="putAutoRollbackConfiguration" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.putAutoRollbackConfiguration"></a>

```typescript
public putAutoRollbackConfiguration(value: IResolvable | SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.putAutoRollbackConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration</a>[]

---

##### `putRollingUpdatePolicy` <a name="putRollingUpdatePolicy" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.putRollingUpdatePolicy"></a>

```typescript
public putRollingUpdatePolicy(value: IResolvable | SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.putRollingUpdatePolicy.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy</a>[]

---

##### `resetAutoRollbackConfiguration` <a name="resetAutoRollbackConfiguration" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.resetAutoRollbackConfiguration"></a>

```typescript
public resetAutoRollbackConfiguration(): void
```

##### `resetRollingUpdatePolicy` <a name="resetRollingUpdatePolicy" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.resetRollingUpdatePolicy"></a>

```typescript
public resetRollingUpdatePolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.autoRollbackConfiguration">autoRollbackConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.rollingUpdatePolicy">rollingUpdatePolicy</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.autoRollbackConfigurationInput">autoRollbackConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.rollingUpdatePolicyInput">rollingUpdatePolicyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig">SagemakerInferenceComponentDeploymentConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoRollbackConfiguration`<sup>Required</sup> <a name="autoRollbackConfiguration" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.autoRollbackConfiguration"></a>

```typescript
public readonly autoRollbackConfiguration: SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationList</a>

---

##### `rollingUpdatePolicy`<sup>Required</sup> <a name="rollingUpdatePolicy" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.rollingUpdatePolicy"></a>

```typescript
public readonly rollingUpdatePolicy: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList</a>

---

##### `autoRollbackConfigurationInput`<sup>Optional</sup> <a name="autoRollbackConfigurationInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.autoRollbackConfigurationInput"></a>

```typescript
public readonly autoRollbackConfigurationInput: IResolvable | SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration">SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration</a>[]

---

##### `rollingUpdatePolicyInput`<sup>Optional</sup> <a name="rollingUpdatePolicyInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.rollingUpdatePolicyInput"></a>

```typescript
public readonly rollingUpdatePolicyInput: IResolvable | SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentDeploymentConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfig">SagemakerInferenceComponentDeploymentConfig</a>

---


### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.get"></a>

```typescript
public get(index: number): SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy</a>[]

---


### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.get"></a>

```typescript
public get(index: number): SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>[]

---


### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>

---


### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.putMaximumBatchSize">putMaximumBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.putRollbackMaximumBatchSize">putRollbackMaximumBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resetMaximumBatchSize">resetMaximumBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resetMaximumExecutionTimeoutInSeconds">resetMaximumExecutionTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resetRollbackMaximumBatchSize">resetRollbackMaximumBatchSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMaximumBatchSize` <a name="putMaximumBatchSize" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.putMaximumBatchSize"></a>

```typescript
public putMaximumBatchSize(value: IResolvable | SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.putMaximumBatchSize.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>[]

---

##### `putRollbackMaximumBatchSize` <a name="putRollbackMaximumBatchSize" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.putRollbackMaximumBatchSize"></a>

```typescript
public putRollbackMaximumBatchSize(value: IResolvable | SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.putRollbackMaximumBatchSize.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>[]

---

##### `resetMaximumBatchSize` <a name="resetMaximumBatchSize" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resetMaximumBatchSize"></a>

```typescript
public resetMaximumBatchSize(): void
```

##### `resetMaximumExecutionTimeoutInSeconds` <a name="resetMaximumExecutionTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resetMaximumExecutionTimeoutInSeconds"></a>

```typescript
public resetMaximumExecutionTimeoutInSeconds(): void
```

##### `resetRollbackMaximumBatchSize` <a name="resetRollbackMaximumBatchSize" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.resetRollbackMaximumBatchSize"></a>

```typescript
public resetRollbackMaximumBatchSize(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSize">maximumBatchSize</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSize">rollbackMaximumBatchSize</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSizeInput">maximumBatchSizeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSecondsInput">maximumExecutionTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSizeInput">rollbackMaximumBatchSizeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.waitIntervalInSecondsInput">waitIntervalInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSeconds">maximumExecutionTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.waitIntervalInSeconds">waitIntervalInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumBatchSize`<sup>Required</sup> <a name="maximumBatchSize" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSize"></a>

```typescript
public readonly maximumBatchSize: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeList</a>

---

##### `rollbackMaximumBatchSize`<sup>Required</sup> <a name="rollbackMaximumBatchSize" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSize"></a>

```typescript
public readonly rollbackMaximumBatchSize: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList</a>

---

##### `maximumBatchSizeInput`<sup>Optional</sup> <a name="maximumBatchSizeInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSizeInput"></a>

```typescript
public readonly maximumBatchSizeInput: IResolvable | SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>[]

---

##### `maximumExecutionTimeoutInSecondsInput`<sup>Optional</sup> <a name="maximumExecutionTimeoutInSecondsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSecondsInput"></a>

```typescript
public readonly maximumExecutionTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `rollbackMaximumBatchSizeInput`<sup>Optional</sup> <a name="rollbackMaximumBatchSizeInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSizeInput"></a>

```typescript
public readonly rollbackMaximumBatchSizeInput: IResolvable | SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>[]

---

##### `waitIntervalInSecondsInput`<sup>Optional</sup> <a name="waitIntervalInSecondsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.waitIntervalInSecondsInput"></a>

```typescript
public readonly waitIntervalInSecondsInput: number;
```

- *Type:* number

---

##### `maximumExecutionTimeoutInSeconds`<sup>Required</sup> <a name="maximumExecutionTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSeconds"></a>

```typescript
public readonly maximumExecutionTimeoutInSeconds: number;
```

- *Type:* number

---

##### `waitIntervalInSeconds`<sup>Required</sup> <a name="waitIntervalInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.waitIntervalInSeconds"></a>

```typescript
public readonly waitIntervalInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy</a>

---


### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.get"></a>

```typescript
public get(index: number): SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>[]

---


### SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference <a name="SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>

---


### SagemakerInferenceComponentRuntimeConfigList <a name="SagemakerInferenceComponentRuntimeConfigList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.get"></a>

```typescript
public get(index: number): SagemakerInferenceComponentRuntimeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig">SagemakerInferenceComponentRuntimeConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentRuntimeConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig">SagemakerInferenceComponentRuntimeConfig</a>[]

---


### SagemakerInferenceComponentRuntimeConfigOutputReference <a name="SagemakerInferenceComponentRuntimeConfigOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.currentCopyCount">currentCopyCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.desiredCopyCount">desiredCopyCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.placementStatus">placementStatus</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList">SagemakerInferenceComponentRuntimeConfigPlacementStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.copyCountInput">copyCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.copyCount">copyCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig">SagemakerInferenceComponentRuntimeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currentCopyCount`<sup>Required</sup> <a name="currentCopyCount" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.currentCopyCount"></a>

```typescript
public readonly currentCopyCount: number;
```

- *Type:* number

---

##### `desiredCopyCount`<sup>Required</sup> <a name="desiredCopyCount" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.desiredCopyCount"></a>

```typescript
public readonly desiredCopyCount: number;
```

- *Type:* number

---

##### `placementStatus`<sup>Required</sup> <a name="placementStatus" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.placementStatus"></a>

```typescript
public readonly placementStatus: SagemakerInferenceComponentRuntimeConfigPlacementStatusList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList">SagemakerInferenceComponentRuntimeConfigPlacementStatusList</a>

---

##### `copyCountInput`<sup>Optional</sup> <a name="copyCountInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.copyCountInput"></a>

```typescript
public readonly copyCountInput: number;
```

- *Type:* number

---

##### `copyCount`<sup>Required</sup> <a name="copyCount" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.copyCount"></a>

```typescript
public readonly copyCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentRuntimeConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfig">SagemakerInferenceComponentRuntimeConfig</a>

---


### SagemakerInferenceComponentRuntimeConfigPlacementStatusList <a name="SagemakerInferenceComponentRuntimeConfigPlacementStatusList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.get"></a>

```typescript
public get(index: number): SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference <a name="SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.currentCopyCount">currentCopyCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatus">SagemakerInferenceComponentRuntimeConfigPlacementStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currentCopyCount`<sup>Required</sup> <a name="currentCopyCount" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.currentCopyCount"></a>

```typescript
public readonly currentCopyCount: number;
```

- *Type:* number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerInferenceComponentRuntimeConfigPlacementStatus;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentRuntimeConfigPlacementStatus">SagemakerInferenceComponentRuntimeConfigPlacementStatus</a>

---


### SagemakerInferenceComponentSpecificationComputeResourceRequirementsList <a name="SagemakerInferenceComponentSpecificationComputeResourceRequirementsList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.get"></a>

```typescript
public get(index: number): SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements">SagemakerInferenceComponentSpecificationComputeResourceRequirements</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentSpecificationComputeResourceRequirements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements">SagemakerInferenceComponentSpecificationComputeResourceRequirements</a>[]

---


### SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference <a name="SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resetMaxMemoryRequiredInMb">resetMaxMemoryRequiredInMb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resetNumberOfAcceleratorDevicesRequired">resetNumberOfAcceleratorDevicesRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resetNumberOfCpuCoresRequired">resetNumberOfCpuCoresRequired</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxMemoryRequiredInMb` <a name="resetMaxMemoryRequiredInMb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resetMaxMemoryRequiredInMb"></a>

```typescript
public resetMaxMemoryRequiredInMb(): void
```

##### `resetNumberOfAcceleratorDevicesRequired` <a name="resetNumberOfAcceleratorDevicesRequired" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resetNumberOfAcceleratorDevicesRequired"></a>

```typescript
public resetNumberOfAcceleratorDevicesRequired(): void
```

##### `resetNumberOfCpuCoresRequired` <a name="resetNumberOfCpuCoresRequired" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.resetNumberOfCpuCoresRequired"></a>

```typescript
public resetNumberOfCpuCoresRequired(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMbInput">maxMemoryRequiredInMbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMbInput">minMemoryRequiredInMbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequiredInput">numberOfAcceleratorDevicesRequiredInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequiredInput">numberOfCpuCoresRequiredInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMb">maxMemoryRequiredInMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMb">minMemoryRequiredInMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequired">numberOfAcceleratorDevicesRequired</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequired">numberOfCpuCoresRequired</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements">SagemakerInferenceComponentSpecificationComputeResourceRequirements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxMemoryRequiredInMbInput`<sup>Optional</sup> <a name="maxMemoryRequiredInMbInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMbInput"></a>

```typescript
public readonly maxMemoryRequiredInMbInput: number;
```

- *Type:* number

---

##### `minMemoryRequiredInMbInput`<sup>Optional</sup> <a name="minMemoryRequiredInMbInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMbInput"></a>

```typescript
public readonly minMemoryRequiredInMbInput: number;
```

- *Type:* number

---

##### `numberOfAcceleratorDevicesRequiredInput`<sup>Optional</sup> <a name="numberOfAcceleratorDevicesRequiredInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequiredInput"></a>

```typescript
public readonly numberOfAcceleratorDevicesRequiredInput: number;
```

- *Type:* number

---

##### `numberOfCpuCoresRequiredInput`<sup>Optional</sup> <a name="numberOfCpuCoresRequiredInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequiredInput"></a>

```typescript
public readonly numberOfCpuCoresRequiredInput: number;
```

- *Type:* number

---

##### `maxMemoryRequiredInMb`<sup>Required</sup> <a name="maxMemoryRequiredInMb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMb"></a>

```typescript
public readonly maxMemoryRequiredInMb: number;
```

- *Type:* number

---

##### `minMemoryRequiredInMb`<sup>Required</sup> <a name="minMemoryRequiredInMb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMb"></a>

```typescript
public readonly minMemoryRequiredInMb: number;
```

- *Type:* number

---

##### `numberOfAcceleratorDevicesRequired`<sup>Required</sup> <a name="numberOfAcceleratorDevicesRequired" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequired"></a>

```typescript
public readonly numberOfAcceleratorDevicesRequired: number;
```

- *Type:* number

---

##### `numberOfCpuCoresRequired`<sup>Required</sup> <a name="numberOfCpuCoresRequired" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequired"></a>

```typescript
public readonly numberOfCpuCoresRequired: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentSpecificationComputeResourceRequirements;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements">SagemakerInferenceComponentSpecificationComputeResourceRequirements</a>

---


### SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList <a name="SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.get"></a>

```typescript
public get(index: number): SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig</a>[]

---


### SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList <a name="SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.get"></a>

```typescript
public get(index: number): SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint</a>[]

---


### SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference <a name="SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.resetMetricPublishFrequencyInSeconds">resetMetricPublishFrequencyInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricPublishFrequencyInSeconds` <a name="resetMetricPublishFrequencyInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.resetMetricPublishFrequencyInSeconds"></a>

```typescript
public resetMetricPublishFrequencyInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricPublishFrequencyInSecondsInput">metricPublishFrequencyInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricsEndpointPathInput">metricsEndpointPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricPublishFrequencyInSeconds">metricPublishFrequencyInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricsEndpointPath">metricsEndpointPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricPublishFrequencyInSecondsInput`<sup>Optional</sup> <a name="metricPublishFrequencyInSecondsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricPublishFrequencyInSecondsInput"></a>

```typescript
public readonly metricPublishFrequencyInSecondsInput: number;
```

- *Type:* number

---

##### `metricsEndpointPathInput`<sup>Optional</sup> <a name="metricsEndpointPathInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricsEndpointPathInput"></a>

```typescript
public readonly metricsEndpointPathInput: string;
```

- *Type:* string

---

##### `metricPublishFrequencyInSeconds`<sup>Required</sup> <a name="metricPublishFrequencyInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricPublishFrequencyInSeconds"></a>

```typescript
public readonly metricPublishFrequencyInSeconds: number;
```

- *Type:* number

---

##### `metricsEndpointPath`<sup>Required</sup> <a name="metricsEndpointPath" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricsEndpointPath"></a>

```typescript
public readonly metricsEndpointPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint</a>

---


### SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference <a name="SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.putMetricsEndpoint">putMetricsEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.resetMetricsEndpoint">resetMetricsEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetricsEndpoint` <a name="putMetricsEndpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.putMetricsEndpoint"></a>

```typescript
public putMetricsEndpoint(value: IResolvable | SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.putMetricsEndpoint.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint</a>[]

---

##### `resetMetricsEndpoint` <a name="resetMetricsEndpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.resetMetricsEndpoint"></a>

```typescript
public resetMetricsEndpoint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.metricsEndpoint">metricsEndpoint</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.metricsEndpointInput">metricsEndpointInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsEndpoint`<sup>Required</sup> <a name="metricsEndpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.metricsEndpoint"></a>

```typescript
public readonly metricsEndpoint: SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointList</a>

---

##### `metricsEndpointInput`<sup>Optional</sup> <a name="metricsEndpointInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.metricsEndpointInput"></a>

```typescript
public readonly metricsEndpointInput: IResolvable | SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpoint</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig</a>

---


### SagemakerInferenceComponentSpecificationContainerList <a name="SagemakerInferenceComponentSpecificationContainerList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.get"></a>

```typescript
public get(index: number): SagemakerInferenceComponentSpecificationContainerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer">SagemakerInferenceComponentSpecificationContainer</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentSpecificationContainer[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer">SagemakerInferenceComponentSpecificationContainer</a>[]

---


### SagemakerInferenceComponentSpecificationContainerOutputReference <a name="SagemakerInferenceComponentSpecificationContainerOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.putContainerMetricsConfig">putContainerMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetArtifactUrl">resetArtifactUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetContainerMetricsConfig">resetContainerMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetImage">resetImage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainerMetricsConfig` <a name="putContainerMetricsConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.putContainerMetricsConfig"></a>

```typescript
public putContainerMetricsConfig(value: IResolvable | SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.putContainerMetricsConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig</a>[]

---

##### `resetArtifactUrl` <a name="resetArtifactUrl" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetArtifactUrl"></a>

```typescript
public resetArtifactUrl(): void
```

##### `resetContainerMetricsConfig` <a name="resetContainerMetricsConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetContainerMetricsConfig"></a>

```typescript
public resetContainerMetricsConfig(): void
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetImage` <a name="resetImage" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.resetImage"></a>

```typescript
public resetImage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.containerMetricsConfig">containerMetricsConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.resolvedImage">resolvedImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.artifactUrlInput">artifactUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.containerMetricsConfigInput">containerMetricsConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.environmentInput">environmentInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.artifactUrl">artifactUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer">SagemakerInferenceComponentSpecificationContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerMetricsConfig`<sup>Required</sup> <a name="containerMetricsConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.containerMetricsConfig"></a>

```typescript
public readonly containerMetricsConfig: SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfigList</a>

---

##### `resolvedImage`<sup>Required</sup> <a name="resolvedImage" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.resolvedImage"></a>

```typescript
public readonly resolvedImage: string;
```

- *Type:* string

---

##### `artifactUrlInput`<sup>Optional</sup> <a name="artifactUrlInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.artifactUrlInput"></a>

```typescript
public readonly artifactUrlInput: string;
```

- *Type:* string

---

##### `containerMetricsConfigInput`<sup>Optional</sup> <a name="containerMetricsConfigInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.containerMetricsConfigInput"></a>

```typescript
public readonly containerMetricsConfigInput: IResolvable | SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationContainerContainerMetricsConfig</a>[]

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.environmentInput"></a>

```typescript
public readonly environmentInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `artifactUrl`<sup>Required</sup> <a name="artifactUrl" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.artifactUrl"></a>

```typescript
public readonly artifactUrl: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentSpecificationContainer;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer">SagemakerInferenceComponentSpecificationContainer</a>

---


### SagemakerInferenceComponentSpecificationDataCacheConfigList <a name="SagemakerInferenceComponentSpecificationDataCacheConfigList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.get"></a>

```typescript
public get(index: number): SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig">SagemakerInferenceComponentSpecificationDataCacheConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentSpecificationDataCacheConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig">SagemakerInferenceComponentSpecificationDataCacheConfig</a>[]

---


### SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference <a name="SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.enableCachingInput">enableCachingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.enableCaching">enableCaching</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig">SagemakerInferenceComponentSpecificationDataCacheConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableCachingInput`<sup>Optional</sup> <a name="enableCachingInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.enableCachingInput"></a>

```typescript
public readonly enableCachingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableCaching`<sup>Required</sup> <a name="enableCaching" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.enableCaching"></a>

```typescript
public readonly enableCaching: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentSpecificationDataCacheConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig">SagemakerInferenceComponentSpecificationDataCacheConfig</a>

---


### SagemakerInferenceComponentSpecificationList <a name="SagemakerInferenceComponentSpecificationList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.get"></a>

```typescript
public get(index: number): SagemakerInferenceComponentSpecificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification">SagemakerInferenceComponentSpecification</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentSpecification[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification">SagemakerInferenceComponentSpecification</a>[]

---


### SagemakerInferenceComponentSpecificationOutputReference <a name="SagemakerInferenceComponentSpecificationOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putComputeResourceRequirements">putComputeResourceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putContainer">putContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putDataCacheConfig">putDataCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putSchedulingConfig">putSchedulingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putStartupParameters">putStartupParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetBaseInferenceComponentName">resetBaseInferenceComponentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetComputeResourceRequirements">resetComputeResourceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetContainer">resetContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetDataCacheConfig">resetDataCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetModelName">resetModelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetSchedulingConfig">resetSchedulingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetStartupParameters">resetStartupParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putComputeResourceRequirements` <a name="putComputeResourceRequirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putComputeResourceRequirements"></a>

```typescript
public putComputeResourceRequirements(value: IResolvable | SagemakerInferenceComponentSpecificationComputeResourceRequirements[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putComputeResourceRequirements.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements">SagemakerInferenceComponentSpecificationComputeResourceRequirements</a>[]

---

##### `putContainer` <a name="putContainer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putContainer"></a>

```typescript
public putContainer(value: IResolvable | SagemakerInferenceComponentSpecificationContainer[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putContainer.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer">SagemakerInferenceComponentSpecificationContainer</a>[]

---

##### `putDataCacheConfig` <a name="putDataCacheConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putDataCacheConfig"></a>

```typescript
public putDataCacheConfig(value: IResolvable | SagemakerInferenceComponentSpecificationDataCacheConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putDataCacheConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig">SagemakerInferenceComponentSpecificationDataCacheConfig</a>[]

---

##### `putSchedulingConfig` <a name="putSchedulingConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putSchedulingConfig"></a>

```typescript
public putSchedulingConfig(value: IResolvable | SagemakerInferenceComponentSpecificationSchedulingConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putSchedulingConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig">SagemakerInferenceComponentSpecificationSchedulingConfig</a>[]

---

##### `putStartupParameters` <a name="putStartupParameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putStartupParameters"></a>

```typescript
public putStartupParameters(value: IResolvable | SagemakerInferenceComponentSpecificationStartupParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.putStartupParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters">SagemakerInferenceComponentSpecificationStartupParameters</a>[]

---

##### `resetBaseInferenceComponentName` <a name="resetBaseInferenceComponentName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetBaseInferenceComponentName"></a>

```typescript
public resetBaseInferenceComponentName(): void
```

##### `resetComputeResourceRequirements` <a name="resetComputeResourceRequirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetComputeResourceRequirements"></a>

```typescript
public resetComputeResourceRequirements(): void
```

##### `resetContainer` <a name="resetContainer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetContainer"></a>

```typescript
public resetContainer(): void
```

##### `resetDataCacheConfig` <a name="resetDataCacheConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetDataCacheConfig"></a>

```typescript
public resetDataCacheConfig(): void
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```

##### `resetModelName` <a name="resetModelName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetModelName"></a>

```typescript
public resetModelName(): void
```

##### `resetSchedulingConfig` <a name="resetSchedulingConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetSchedulingConfig"></a>

```typescript
public resetSchedulingConfig(): void
```

##### `resetStartupParameters` <a name="resetStartupParameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.resetStartupParameters"></a>

```typescript
public resetStartupParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.computeResourceRequirements">computeResourceRequirements</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList">SagemakerInferenceComponentSpecificationComputeResourceRequirementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.container">container</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList">SagemakerInferenceComponentSpecificationContainerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.dataCacheConfig">dataCacheConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList">SagemakerInferenceComponentSpecificationDataCacheConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.schedulingConfig">schedulingConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList">SagemakerInferenceComponentSpecificationSchedulingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.startupParameters">startupParameters</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList">SagemakerInferenceComponentSpecificationStartupParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.baseInferenceComponentNameInput">baseInferenceComponentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.computeResourceRequirementsInput">computeResourceRequirementsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements">SagemakerInferenceComponentSpecificationComputeResourceRequirements</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.containerInput">containerInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer">SagemakerInferenceComponentSpecificationContainer</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.dataCacheConfigInput">dataCacheConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig">SagemakerInferenceComponentSpecificationDataCacheConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.modelNameInput">modelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.schedulingConfigInput">schedulingConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig">SagemakerInferenceComponentSpecificationSchedulingConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.startupParametersInput">startupParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters">SagemakerInferenceComponentSpecificationStartupParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.baseInferenceComponentName">baseInferenceComponentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.modelName">modelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification">SagemakerInferenceComponentSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `computeResourceRequirements`<sup>Required</sup> <a name="computeResourceRequirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.computeResourceRequirements"></a>

```typescript
public readonly computeResourceRequirements: SagemakerInferenceComponentSpecificationComputeResourceRequirementsList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirementsList">SagemakerInferenceComponentSpecificationComputeResourceRequirementsList</a>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.container"></a>

```typescript
public readonly container: SagemakerInferenceComponentSpecificationContainerList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainerList">SagemakerInferenceComponentSpecificationContainerList</a>

---

##### `dataCacheConfig`<sup>Required</sup> <a name="dataCacheConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.dataCacheConfig"></a>

```typescript
public readonly dataCacheConfig: SagemakerInferenceComponentSpecificationDataCacheConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfigList">SagemakerInferenceComponentSpecificationDataCacheConfigList</a>

---

##### `schedulingConfig`<sup>Required</sup> <a name="schedulingConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.schedulingConfig"></a>

```typescript
public readonly schedulingConfig: SagemakerInferenceComponentSpecificationSchedulingConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList">SagemakerInferenceComponentSpecificationSchedulingConfigList</a>

---

##### `startupParameters`<sup>Required</sup> <a name="startupParameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.startupParameters"></a>

```typescript
public readonly startupParameters: SagemakerInferenceComponentSpecificationStartupParametersList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList">SagemakerInferenceComponentSpecificationStartupParametersList</a>

---

##### `baseInferenceComponentNameInput`<sup>Optional</sup> <a name="baseInferenceComponentNameInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.baseInferenceComponentNameInput"></a>

```typescript
public readonly baseInferenceComponentNameInput: string;
```

- *Type:* string

---

##### `computeResourceRequirementsInput`<sup>Optional</sup> <a name="computeResourceRequirementsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.computeResourceRequirementsInput"></a>

```typescript
public readonly computeResourceRequirementsInput: IResolvable | SagemakerInferenceComponentSpecificationComputeResourceRequirements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationComputeResourceRequirements">SagemakerInferenceComponentSpecificationComputeResourceRequirements</a>[]

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.containerInput"></a>

```typescript
public readonly containerInput: IResolvable | SagemakerInferenceComponentSpecificationContainer[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationContainer">SagemakerInferenceComponentSpecificationContainer</a>[]

---

##### `dataCacheConfigInput`<sup>Optional</sup> <a name="dataCacheConfigInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.dataCacheConfigInput"></a>

```typescript
public readonly dataCacheConfigInput: IResolvable | SagemakerInferenceComponentSpecificationDataCacheConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationDataCacheConfig">SagemakerInferenceComponentSpecificationDataCacheConfig</a>[]

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `modelNameInput`<sup>Optional</sup> <a name="modelNameInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.modelNameInput"></a>

```typescript
public readonly modelNameInput: string;
```

- *Type:* string

---

##### `schedulingConfigInput`<sup>Optional</sup> <a name="schedulingConfigInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.schedulingConfigInput"></a>

```typescript
public readonly schedulingConfigInput: IResolvable | SagemakerInferenceComponentSpecificationSchedulingConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig">SagemakerInferenceComponentSpecificationSchedulingConfig</a>[]

---

##### `startupParametersInput`<sup>Optional</sup> <a name="startupParametersInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.startupParametersInput"></a>

```typescript
public readonly startupParametersInput: IResolvable | SagemakerInferenceComponentSpecificationStartupParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters">SagemakerInferenceComponentSpecificationStartupParameters</a>[]

---

##### `baseInferenceComponentName`<sup>Required</sup> <a name="baseInferenceComponentName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.baseInferenceComponentName"></a>

```typescript
public readonly baseInferenceComponentName: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecification">SagemakerInferenceComponentSpecification</a>

---


### SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList <a name="SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.get"></a>

```typescript
public get(index: number): SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance</a>[]

---


### SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference <a name="SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.resetMaxImbalance">resetMaxImbalance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxImbalance` <a name="resetMaxImbalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.resetMaxImbalance"></a>

```typescript
public resetMaxImbalance(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.enforcementModeInput">enforcementModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.maxImbalanceInput">maxImbalanceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.enforcementMode">enforcementMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.maxImbalance">maxImbalance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enforcementModeInput`<sup>Optional</sup> <a name="enforcementModeInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.enforcementModeInput"></a>

```typescript
public readonly enforcementModeInput: string;
```

- *Type:* string

---

##### `maxImbalanceInput`<sup>Optional</sup> <a name="maxImbalanceInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.maxImbalanceInput"></a>

```typescript
public readonly maxImbalanceInput: number;
```

- *Type:* number

---

##### `enforcementMode`<sup>Required</sup> <a name="enforcementMode" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.enforcementMode"></a>

```typescript
public readonly enforcementMode: string;
```

- *Type:* string

---

##### `maxImbalance`<sup>Required</sup> <a name="maxImbalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.maxImbalance"></a>

```typescript
public readonly maxImbalance: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance</a>

---


### SagemakerInferenceComponentSpecificationSchedulingConfigList <a name="SagemakerInferenceComponentSpecificationSchedulingConfigList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.get"></a>

```typescript
public get(index: number): SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig">SagemakerInferenceComponentSpecificationSchedulingConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentSpecificationSchedulingConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig">SagemakerInferenceComponentSpecificationSchedulingConfig</a>[]

---


### SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference <a name="SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.putAvailabilityZoneBalance">putAvailabilityZoneBalance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.resetAvailabilityZoneBalance">resetAvailabilityZoneBalance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAvailabilityZoneBalance` <a name="putAvailabilityZoneBalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.putAvailabilityZoneBalance"></a>

```typescript
public putAvailabilityZoneBalance(value: IResolvable | SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.putAvailabilityZoneBalance.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance</a>[]

---

##### `resetAvailabilityZoneBalance` <a name="resetAvailabilityZoneBalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.resetAvailabilityZoneBalance"></a>

```typescript
public resetAvailabilityZoneBalance(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.availabilityZoneBalance">availabilityZoneBalance</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList">SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.availabilityZoneBalanceInput">availabilityZoneBalanceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.placementStrategyInput">placementStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.placementStrategy">placementStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig">SagemakerInferenceComponentSpecificationSchedulingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZoneBalance`<sup>Required</sup> <a name="availabilityZoneBalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.availabilityZoneBalance"></a>

```typescript
public readonly availabilityZoneBalance: SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList">SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalanceList</a>

---

##### `availabilityZoneBalanceInput`<sup>Optional</sup> <a name="availabilityZoneBalanceInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.availabilityZoneBalanceInput"></a>

```typescript
public readonly availabilityZoneBalanceInput: IResolvable | SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalance</a>[]

---

##### `placementStrategyInput`<sup>Optional</sup> <a name="placementStrategyInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.placementStrategyInput"></a>

```typescript
public readonly placementStrategyInput: string;
```

- *Type:* string

---

##### `placementStrategy`<sup>Required</sup> <a name="placementStrategy" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.placementStrategy"></a>

```typescript
public readonly placementStrategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentSpecificationSchedulingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationSchedulingConfig">SagemakerInferenceComponentSpecificationSchedulingConfig</a>

---


### SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList <a name="SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.get"></a>

```typescript
public get(index: number): SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements">SagemakerInferenceComponentSpecificationsComputeResourceRequirements</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentSpecificationsComputeResourceRequirements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements">SagemakerInferenceComponentSpecificationsComputeResourceRequirements</a>[]

---


### SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference <a name="SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resetMaxMemoryRequiredInMb">resetMaxMemoryRequiredInMb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resetNumberOfAcceleratorDevicesRequired">resetNumberOfAcceleratorDevicesRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resetNumberOfCpuCoresRequired">resetNumberOfCpuCoresRequired</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxMemoryRequiredInMb` <a name="resetMaxMemoryRequiredInMb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resetMaxMemoryRequiredInMb"></a>

```typescript
public resetMaxMemoryRequiredInMb(): void
```

##### `resetNumberOfAcceleratorDevicesRequired` <a name="resetNumberOfAcceleratorDevicesRequired" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resetNumberOfAcceleratorDevicesRequired"></a>

```typescript
public resetNumberOfAcceleratorDevicesRequired(): void
```

##### `resetNumberOfCpuCoresRequired` <a name="resetNumberOfCpuCoresRequired" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.resetNumberOfCpuCoresRequired"></a>

```typescript
public resetNumberOfCpuCoresRequired(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMbInput">maxMemoryRequiredInMbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMbInput">minMemoryRequiredInMbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequiredInput">numberOfAcceleratorDevicesRequiredInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequiredInput">numberOfCpuCoresRequiredInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMb">maxMemoryRequiredInMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMb">minMemoryRequiredInMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequired">numberOfAcceleratorDevicesRequired</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequired">numberOfCpuCoresRequired</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements">SagemakerInferenceComponentSpecificationsComputeResourceRequirements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxMemoryRequiredInMbInput`<sup>Optional</sup> <a name="maxMemoryRequiredInMbInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMbInput"></a>

```typescript
public readonly maxMemoryRequiredInMbInput: number;
```

- *Type:* number

---

##### `minMemoryRequiredInMbInput`<sup>Optional</sup> <a name="minMemoryRequiredInMbInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMbInput"></a>

```typescript
public readonly minMemoryRequiredInMbInput: number;
```

- *Type:* number

---

##### `numberOfAcceleratorDevicesRequiredInput`<sup>Optional</sup> <a name="numberOfAcceleratorDevicesRequiredInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequiredInput"></a>

```typescript
public readonly numberOfAcceleratorDevicesRequiredInput: number;
```

- *Type:* number

---

##### `numberOfCpuCoresRequiredInput`<sup>Optional</sup> <a name="numberOfCpuCoresRequiredInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequiredInput"></a>

```typescript
public readonly numberOfCpuCoresRequiredInput: number;
```

- *Type:* number

---

##### `maxMemoryRequiredInMb`<sup>Required</sup> <a name="maxMemoryRequiredInMb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.maxMemoryRequiredInMb"></a>

```typescript
public readonly maxMemoryRequiredInMb: number;
```

- *Type:* number

---

##### `minMemoryRequiredInMb`<sup>Required</sup> <a name="minMemoryRequiredInMb" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.minMemoryRequiredInMb"></a>

```typescript
public readonly minMemoryRequiredInMb: number;
```

- *Type:* number

---

##### `numberOfAcceleratorDevicesRequired`<sup>Required</sup> <a name="numberOfAcceleratorDevicesRequired" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.numberOfAcceleratorDevicesRequired"></a>

```typescript
public readonly numberOfAcceleratorDevicesRequired: number;
```

- *Type:* number

---

##### `numberOfCpuCoresRequired`<sup>Required</sup> <a name="numberOfCpuCoresRequired" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.numberOfCpuCoresRequired"></a>

```typescript
public readonly numberOfCpuCoresRequired: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentSpecificationsComputeResourceRequirements;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements">SagemakerInferenceComponentSpecificationsComputeResourceRequirements</a>

---


### SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList <a name="SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.get"></a>

```typescript
public get(index: number): SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig</a>[]

---


### SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList <a name="SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.get"></a>

```typescript
public get(index: number): SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint</a>[]

---


### SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference <a name="SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.resetMetricPublishFrequencyInSeconds">resetMetricPublishFrequencyInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricPublishFrequencyInSeconds` <a name="resetMetricPublishFrequencyInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.resetMetricPublishFrequencyInSeconds"></a>

```typescript
public resetMetricPublishFrequencyInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricPublishFrequencyInSecondsInput">metricPublishFrequencyInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricsEndpointPathInput">metricsEndpointPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricPublishFrequencyInSeconds">metricPublishFrequencyInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricsEndpointPath">metricsEndpointPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricPublishFrequencyInSecondsInput`<sup>Optional</sup> <a name="metricPublishFrequencyInSecondsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricPublishFrequencyInSecondsInput"></a>

```typescript
public readonly metricPublishFrequencyInSecondsInput: number;
```

- *Type:* number

---

##### `metricsEndpointPathInput`<sup>Optional</sup> <a name="metricsEndpointPathInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricsEndpointPathInput"></a>

```typescript
public readonly metricsEndpointPathInput: string;
```

- *Type:* string

---

##### `metricPublishFrequencyInSeconds`<sup>Required</sup> <a name="metricPublishFrequencyInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricPublishFrequencyInSeconds"></a>

```typescript
public readonly metricPublishFrequencyInSeconds: number;
```

- *Type:* number

---

##### `metricsEndpointPath`<sup>Required</sup> <a name="metricsEndpointPath" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.metricsEndpointPath"></a>

```typescript
public readonly metricsEndpointPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint</a>

---


### SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference <a name="SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.putMetricsEndpoint">putMetricsEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.resetMetricsEndpoint">resetMetricsEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetricsEndpoint` <a name="putMetricsEndpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.putMetricsEndpoint"></a>

```typescript
public putMetricsEndpoint(value: IResolvable | SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.putMetricsEndpoint.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint</a>[]

---

##### `resetMetricsEndpoint` <a name="resetMetricsEndpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.resetMetricsEndpoint"></a>

```typescript
public resetMetricsEndpoint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.metricsEndpoint">metricsEndpoint</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.metricsEndpointInput">metricsEndpointInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsEndpoint`<sup>Required</sup> <a name="metricsEndpoint" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.metricsEndpoint"></a>

```typescript
public readonly metricsEndpoint: SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointList</a>

---

##### `metricsEndpointInput`<sup>Optional</sup> <a name="metricsEndpointInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.metricsEndpointInput"></a>

```typescript
public readonly metricsEndpointInput: IResolvable | SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpoint</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig</a>

---


### SagemakerInferenceComponentSpecificationsContainerList <a name="SagemakerInferenceComponentSpecificationsContainerList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.get"></a>

```typescript
public get(index: number): SagemakerInferenceComponentSpecificationsContainerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer">SagemakerInferenceComponentSpecificationsContainer</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentSpecificationsContainer[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer">SagemakerInferenceComponentSpecificationsContainer</a>[]

---


### SagemakerInferenceComponentSpecificationsContainerOutputReference <a name="SagemakerInferenceComponentSpecificationsContainerOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.putContainerMetricsConfig">putContainerMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resetArtifactUrl">resetArtifactUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resetContainerMetricsConfig">resetContainerMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resetImage">resetImage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainerMetricsConfig` <a name="putContainerMetricsConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.putContainerMetricsConfig"></a>

```typescript
public putContainerMetricsConfig(value: IResolvable | SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.putContainerMetricsConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig</a>[]

---

##### `resetArtifactUrl` <a name="resetArtifactUrl" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resetArtifactUrl"></a>

```typescript
public resetArtifactUrl(): void
```

##### `resetContainerMetricsConfig` <a name="resetContainerMetricsConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resetContainerMetricsConfig"></a>

```typescript
public resetContainerMetricsConfig(): void
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetImage` <a name="resetImage" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.resetImage"></a>

```typescript
public resetImage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.containerMetricsConfig">containerMetricsConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.resolvedImage">resolvedImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.artifactUrlInput">artifactUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.containerMetricsConfigInput">containerMetricsConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.environmentInput">environmentInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.artifactUrl">artifactUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer">SagemakerInferenceComponentSpecificationsContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerMetricsConfig`<sup>Required</sup> <a name="containerMetricsConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.containerMetricsConfig"></a>

```typescript
public readonly containerMetricsConfig: SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfigList</a>

---

##### `resolvedImage`<sup>Required</sup> <a name="resolvedImage" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.resolvedImage"></a>

```typescript
public readonly resolvedImage: string;
```

- *Type:* string

---

##### `artifactUrlInput`<sup>Optional</sup> <a name="artifactUrlInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.artifactUrlInput"></a>

```typescript
public readonly artifactUrlInput: string;
```

- *Type:* string

---

##### `containerMetricsConfigInput`<sup>Optional</sup> <a name="containerMetricsConfigInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.containerMetricsConfigInput"></a>

```typescript
public readonly containerMetricsConfigInput: IResolvable | SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig">SagemakerInferenceComponentSpecificationsContainerContainerMetricsConfig</a>[]

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.environmentInput"></a>

```typescript
public readonly environmentInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `artifactUrl`<sup>Required</sup> <a name="artifactUrl" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.artifactUrl"></a>

```typescript
public readonly artifactUrl: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentSpecificationsContainer;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer">SagemakerInferenceComponentSpecificationsContainer</a>

---


### SagemakerInferenceComponentSpecificationsDataCacheConfigList <a name="SagemakerInferenceComponentSpecificationsDataCacheConfigList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.get"></a>

```typescript
public get(index: number): SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig">SagemakerInferenceComponentSpecificationsDataCacheConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentSpecificationsDataCacheConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig">SagemakerInferenceComponentSpecificationsDataCacheConfig</a>[]

---


### SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference <a name="SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.enableCachingInput">enableCachingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.enableCaching">enableCaching</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig">SagemakerInferenceComponentSpecificationsDataCacheConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableCachingInput`<sup>Optional</sup> <a name="enableCachingInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.enableCachingInput"></a>

```typescript
public readonly enableCachingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableCaching`<sup>Required</sup> <a name="enableCaching" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.enableCaching"></a>

```typescript
public readonly enableCaching: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentSpecificationsDataCacheConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig">SagemakerInferenceComponentSpecificationsDataCacheConfig</a>

---


### SagemakerInferenceComponentSpecificationsList <a name="SagemakerInferenceComponentSpecificationsList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.get"></a>

```typescript
public get(index: number): SagemakerInferenceComponentSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications">SagemakerInferenceComponentSpecifications</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentSpecifications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications">SagemakerInferenceComponentSpecifications</a>[]

---


### SagemakerInferenceComponentSpecificationsOutputReference <a name="SagemakerInferenceComponentSpecificationsOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putComputeResourceRequirements">putComputeResourceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putContainer">putContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putDataCacheConfig">putDataCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putSchedulingConfig">putSchedulingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putStartupParameters">putStartupParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetBaseInferenceComponentName">resetBaseInferenceComponentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetComputeResourceRequirements">resetComputeResourceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetContainer">resetContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetDataCacheConfig">resetDataCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetModelName">resetModelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetSchedulingConfig">resetSchedulingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetStartupParameters">resetStartupParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putComputeResourceRequirements` <a name="putComputeResourceRequirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putComputeResourceRequirements"></a>

```typescript
public putComputeResourceRequirements(value: IResolvable | SagemakerInferenceComponentSpecificationsComputeResourceRequirements[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putComputeResourceRequirements.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements">SagemakerInferenceComponentSpecificationsComputeResourceRequirements</a>[]

---

##### `putContainer` <a name="putContainer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putContainer"></a>

```typescript
public putContainer(value: IResolvable | SagemakerInferenceComponentSpecificationsContainer[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putContainer.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer">SagemakerInferenceComponentSpecificationsContainer</a>[]

---

##### `putDataCacheConfig` <a name="putDataCacheConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putDataCacheConfig"></a>

```typescript
public putDataCacheConfig(value: IResolvable | SagemakerInferenceComponentSpecificationsDataCacheConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putDataCacheConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig">SagemakerInferenceComponentSpecificationsDataCacheConfig</a>[]

---

##### `putSchedulingConfig` <a name="putSchedulingConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putSchedulingConfig"></a>

```typescript
public putSchedulingConfig(value: IResolvable | SagemakerInferenceComponentSpecificationsSchedulingConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putSchedulingConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig">SagemakerInferenceComponentSpecificationsSchedulingConfig</a>[]

---

##### `putStartupParameters` <a name="putStartupParameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putStartupParameters"></a>

```typescript
public putStartupParameters(value: IResolvable | SagemakerInferenceComponentSpecificationsStartupParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.putStartupParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters">SagemakerInferenceComponentSpecificationsStartupParameters</a>[]

---

##### `resetBaseInferenceComponentName` <a name="resetBaseInferenceComponentName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetBaseInferenceComponentName"></a>

```typescript
public resetBaseInferenceComponentName(): void
```

##### `resetComputeResourceRequirements` <a name="resetComputeResourceRequirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetComputeResourceRequirements"></a>

```typescript
public resetComputeResourceRequirements(): void
```

##### `resetContainer` <a name="resetContainer" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetContainer"></a>

```typescript
public resetContainer(): void
```

##### `resetDataCacheConfig` <a name="resetDataCacheConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetDataCacheConfig"></a>

```typescript
public resetDataCacheConfig(): void
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```

##### `resetModelName` <a name="resetModelName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetModelName"></a>

```typescript
public resetModelName(): void
```

##### `resetSchedulingConfig` <a name="resetSchedulingConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetSchedulingConfig"></a>

```typescript
public resetSchedulingConfig(): void
```

##### `resetStartupParameters` <a name="resetStartupParameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.resetStartupParameters"></a>

```typescript
public resetStartupParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.computeResourceRequirements">computeResourceRequirements</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList">SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.container">container</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList">SagemakerInferenceComponentSpecificationsContainerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.dataCacheConfig">dataCacheConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList">SagemakerInferenceComponentSpecificationsDataCacheConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.schedulingConfig">schedulingConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList">SagemakerInferenceComponentSpecificationsSchedulingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.startupParameters">startupParameters</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList">SagemakerInferenceComponentSpecificationsStartupParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.baseInferenceComponentNameInput">baseInferenceComponentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.computeResourceRequirementsInput">computeResourceRequirementsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements">SagemakerInferenceComponentSpecificationsComputeResourceRequirements</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.containerInput">containerInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer">SagemakerInferenceComponentSpecificationsContainer</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.dataCacheConfigInput">dataCacheConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig">SagemakerInferenceComponentSpecificationsDataCacheConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.modelNameInput">modelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.schedulingConfigInput">schedulingConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig">SagemakerInferenceComponentSpecificationsSchedulingConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.startupParametersInput">startupParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters">SagemakerInferenceComponentSpecificationsStartupParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.baseInferenceComponentName">baseInferenceComponentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.modelName">modelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications">SagemakerInferenceComponentSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `computeResourceRequirements`<sup>Required</sup> <a name="computeResourceRequirements" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.computeResourceRequirements"></a>

```typescript
public readonly computeResourceRequirements: SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList">SagemakerInferenceComponentSpecificationsComputeResourceRequirementsList</a>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.container"></a>

```typescript
public readonly container: SagemakerInferenceComponentSpecificationsContainerList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainerList">SagemakerInferenceComponentSpecificationsContainerList</a>

---

##### `dataCacheConfig`<sup>Required</sup> <a name="dataCacheConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.dataCacheConfig"></a>

```typescript
public readonly dataCacheConfig: SagemakerInferenceComponentSpecificationsDataCacheConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfigList">SagemakerInferenceComponentSpecificationsDataCacheConfigList</a>

---

##### `schedulingConfig`<sup>Required</sup> <a name="schedulingConfig" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.schedulingConfig"></a>

```typescript
public readonly schedulingConfig: SagemakerInferenceComponentSpecificationsSchedulingConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList">SagemakerInferenceComponentSpecificationsSchedulingConfigList</a>

---

##### `startupParameters`<sup>Required</sup> <a name="startupParameters" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.startupParameters"></a>

```typescript
public readonly startupParameters: SagemakerInferenceComponentSpecificationsStartupParametersList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList">SagemakerInferenceComponentSpecificationsStartupParametersList</a>

---

##### `baseInferenceComponentNameInput`<sup>Optional</sup> <a name="baseInferenceComponentNameInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.baseInferenceComponentNameInput"></a>

```typescript
public readonly baseInferenceComponentNameInput: string;
```

- *Type:* string

---

##### `computeResourceRequirementsInput`<sup>Optional</sup> <a name="computeResourceRequirementsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.computeResourceRequirementsInput"></a>

```typescript
public readonly computeResourceRequirementsInput: IResolvable | SagemakerInferenceComponentSpecificationsComputeResourceRequirements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsComputeResourceRequirements">SagemakerInferenceComponentSpecificationsComputeResourceRequirements</a>[]

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.containerInput"></a>

```typescript
public readonly containerInput: IResolvable | SagemakerInferenceComponentSpecificationsContainer[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsContainer">SagemakerInferenceComponentSpecificationsContainer</a>[]

---

##### `dataCacheConfigInput`<sup>Optional</sup> <a name="dataCacheConfigInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.dataCacheConfigInput"></a>

```typescript
public readonly dataCacheConfigInput: IResolvable | SagemakerInferenceComponentSpecificationsDataCacheConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsDataCacheConfig">SagemakerInferenceComponentSpecificationsDataCacheConfig</a>[]

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `modelNameInput`<sup>Optional</sup> <a name="modelNameInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.modelNameInput"></a>

```typescript
public readonly modelNameInput: string;
```

- *Type:* string

---

##### `schedulingConfigInput`<sup>Optional</sup> <a name="schedulingConfigInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.schedulingConfigInput"></a>

```typescript
public readonly schedulingConfigInput: IResolvable | SagemakerInferenceComponentSpecificationsSchedulingConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig">SagemakerInferenceComponentSpecificationsSchedulingConfig</a>[]

---

##### `startupParametersInput`<sup>Optional</sup> <a name="startupParametersInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.startupParametersInput"></a>

```typescript
public readonly startupParametersInput: IResolvable | SagemakerInferenceComponentSpecificationsStartupParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters">SagemakerInferenceComponentSpecificationsStartupParameters</a>[]

---

##### `baseInferenceComponentName`<sup>Required</sup> <a name="baseInferenceComponentName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.baseInferenceComponentName"></a>

```typescript
public readonly baseInferenceComponentName: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentSpecifications;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecifications">SagemakerInferenceComponentSpecifications</a>

---


### SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList <a name="SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.get"></a>

```typescript
public get(index: number): SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance</a>[]

---


### SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference <a name="SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.resetMaxImbalance">resetMaxImbalance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxImbalance` <a name="resetMaxImbalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.resetMaxImbalance"></a>

```typescript
public resetMaxImbalance(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.enforcementModeInput">enforcementModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.maxImbalanceInput">maxImbalanceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.enforcementMode">enforcementMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.maxImbalance">maxImbalance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enforcementModeInput`<sup>Optional</sup> <a name="enforcementModeInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.enforcementModeInput"></a>

```typescript
public readonly enforcementModeInput: string;
```

- *Type:* string

---

##### `maxImbalanceInput`<sup>Optional</sup> <a name="maxImbalanceInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.maxImbalanceInput"></a>

```typescript
public readonly maxImbalanceInput: number;
```

- *Type:* number

---

##### `enforcementMode`<sup>Required</sup> <a name="enforcementMode" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.enforcementMode"></a>

```typescript
public readonly enforcementMode: string;
```

- *Type:* string

---

##### `maxImbalance`<sup>Required</sup> <a name="maxImbalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.maxImbalance"></a>

```typescript
public readonly maxImbalance: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance</a>

---


### SagemakerInferenceComponentSpecificationsSchedulingConfigList <a name="SagemakerInferenceComponentSpecificationsSchedulingConfigList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.get"></a>

```typescript
public get(index: number): SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig">SagemakerInferenceComponentSpecificationsSchedulingConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentSpecificationsSchedulingConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig">SagemakerInferenceComponentSpecificationsSchedulingConfig</a>[]

---


### SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference <a name="SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.putAvailabilityZoneBalance">putAvailabilityZoneBalance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.resetAvailabilityZoneBalance">resetAvailabilityZoneBalance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAvailabilityZoneBalance` <a name="putAvailabilityZoneBalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.putAvailabilityZoneBalance"></a>

```typescript
public putAvailabilityZoneBalance(value: IResolvable | SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.putAvailabilityZoneBalance.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance</a>[]

---

##### `resetAvailabilityZoneBalance` <a name="resetAvailabilityZoneBalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.resetAvailabilityZoneBalance"></a>

```typescript
public resetAvailabilityZoneBalance(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.availabilityZoneBalance">availabilityZoneBalance</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList">SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.availabilityZoneBalanceInput">availabilityZoneBalanceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.placementStrategyInput">placementStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.placementStrategy">placementStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig">SagemakerInferenceComponentSpecificationsSchedulingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZoneBalance`<sup>Required</sup> <a name="availabilityZoneBalance" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.availabilityZoneBalance"></a>

```typescript
public readonly availabilityZoneBalance: SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList;
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList">SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalanceList</a>

---

##### `availabilityZoneBalanceInput`<sup>Optional</sup> <a name="availabilityZoneBalanceInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.availabilityZoneBalanceInput"></a>

```typescript
public readonly availabilityZoneBalanceInput: IResolvable | SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance">SagemakerInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalance</a>[]

---

##### `placementStrategyInput`<sup>Optional</sup> <a name="placementStrategyInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.placementStrategyInput"></a>

```typescript
public readonly placementStrategyInput: string;
```

- *Type:* string

---

##### `placementStrategy`<sup>Required</sup> <a name="placementStrategy" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.placementStrategy"></a>

```typescript
public readonly placementStrategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentSpecificationsSchedulingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsSchedulingConfig">SagemakerInferenceComponentSpecificationsSchedulingConfig</a>

---


### SagemakerInferenceComponentSpecificationsStartupParametersList <a name="SagemakerInferenceComponentSpecificationsStartupParametersList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.get"></a>

```typescript
public get(index: number): SagemakerInferenceComponentSpecificationsStartupParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters">SagemakerInferenceComponentSpecificationsStartupParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentSpecificationsStartupParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters">SagemakerInferenceComponentSpecificationsStartupParameters</a>[]

---


### SagemakerInferenceComponentSpecificationsStartupParametersOutputReference <a name="SagemakerInferenceComponentSpecificationsStartupParametersOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.resetContainerStartupHealthCheckTimeoutInSeconds">resetContainerStartupHealthCheckTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.resetModelDataDownloadTimeoutInSeconds">resetModelDataDownloadTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerStartupHealthCheckTimeoutInSeconds` <a name="resetContainerStartupHealthCheckTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.resetContainerStartupHealthCheckTimeoutInSeconds"></a>

```typescript
public resetContainerStartupHealthCheckTimeoutInSeconds(): void
```

##### `resetModelDataDownloadTimeoutInSeconds` <a name="resetModelDataDownloadTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.resetModelDataDownloadTimeoutInSeconds"></a>

```typescript
public resetModelDataDownloadTimeoutInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSecondsInput">containerStartupHealthCheckTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.modelDataDownloadTimeoutInSecondsInput">modelDataDownloadTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSeconds">containerStartupHealthCheckTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.modelDataDownloadTimeoutInSeconds">modelDataDownloadTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters">SagemakerInferenceComponentSpecificationsStartupParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerStartupHealthCheckTimeoutInSecondsInput`<sup>Optional</sup> <a name="containerStartupHealthCheckTimeoutInSecondsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSecondsInput"></a>

```typescript
public readonly containerStartupHealthCheckTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `modelDataDownloadTimeoutInSecondsInput`<sup>Optional</sup> <a name="modelDataDownloadTimeoutInSecondsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.modelDataDownloadTimeoutInSecondsInput"></a>

```typescript
public readonly modelDataDownloadTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `containerStartupHealthCheckTimeoutInSeconds`<sup>Required</sup> <a name="containerStartupHealthCheckTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```typescript
public readonly containerStartupHealthCheckTimeoutInSeconds: number;
```

- *Type:* number

---

##### `modelDataDownloadTimeoutInSeconds`<sup>Required</sup> <a name="modelDataDownloadTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.modelDataDownloadTimeoutInSeconds"></a>

```typescript
public readonly modelDataDownloadTimeoutInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentSpecificationsStartupParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationsStartupParameters">SagemakerInferenceComponentSpecificationsStartupParameters</a>

---


### SagemakerInferenceComponentSpecificationStartupParametersList <a name="SagemakerInferenceComponentSpecificationStartupParametersList" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.get"></a>

```typescript
public get(index: number): SagemakerInferenceComponentSpecificationStartupParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters">SagemakerInferenceComponentSpecificationStartupParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentSpecificationStartupParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters">SagemakerInferenceComponentSpecificationStartupParameters</a>[]

---


### SagemakerInferenceComponentSpecificationStartupParametersOutputReference <a name="SagemakerInferenceComponentSpecificationStartupParametersOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.resetContainerStartupHealthCheckTimeoutInSeconds">resetContainerStartupHealthCheckTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.resetModelDataDownloadTimeoutInSeconds">resetModelDataDownloadTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerStartupHealthCheckTimeoutInSeconds` <a name="resetContainerStartupHealthCheckTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.resetContainerStartupHealthCheckTimeoutInSeconds"></a>

```typescript
public resetContainerStartupHealthCheckTimeoutInSeconds(): void
```

##### `resetModelDataDownloadTimeoutInSeconds` <a name="resetModelDataDownloadTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.resetModelDataDownloadTimeoutInSeconds"></a>

```typescript
public resetModelDataDownloadTimeoutInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSecondsInput">containerStartupHealthCheckTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.modelDataDownloadTimeoutInSecondsInput">modelDataDownloadTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSeconds">containerStartupHealthCheckTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.modelDataDownloadTimeoutInSeconds">modelDataDownloadTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters">SagemakerInferenceComponentSpecificationStartupParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerStartupHealthCheckTimeoutInSecondsInput`<sup>Optional</sup> <a name="containerStartupHealthCheckTimeoutInSecondsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSecondsInput"></a>

```typescript
public readonly containerStartupHealthCheckTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `modelDataDownloadTimeoutInSecondsInput`<sup>Optional</sup> <a name="modelDataDownloadTimeoutInSecondsInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.modelDataDownloadTimeoutInSecondsInput"></a>

```typescript
public readonly modelDataDownloadTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `containerStartupHealthCheckTimeoutInSeconds`<sup>Required</sup> <a name="containerStartupHealthCheckTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```typescript
public readonly containerStartupHealthCheckTimeoutInSeconds: number;
```

- *Type:* number

---

##### `modelDataDownloadTimeoutInSeconds`<sup>Required</sup> <a name="modelDataDownloadTimeoutInSeconds" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.modelDataDownloadTimeoutInSeconds"></a>

```typescript
public readonly modelDataDownloadTimeoutInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentSpecificationStartupParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentSpecificationStartupParameters">SagemakerInferenceComponentSpecificationStartupParameters</a>

---


### SagemakerInferenceComponentTimeoutsOutputReference <a name="SagemakerInferenceComponentTimeoutsOutputReference" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.Initializer"></a>

```typescript
import { sagemakerInferenceComponent } from '@cdktn/provider-aws'

new sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts">SagemakerInferenceComponentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerInferenceComponentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerInferenceComponent.SagemakerInferenceComponentTimeouts">SagemakerInferenceComponentTimeouts</a>

---



