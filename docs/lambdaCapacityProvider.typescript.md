# `lambdaCapacityProvider` Submodule <a name="`lambdaCapacityProvider` Submodule" id="@cdktf/provider-aws.lambdaCapacityProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaCapacityProvider <a name="LambdaCapacityProvider" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider aws_lambda_capacity_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer"></a>

```typescript
import { lambdaCapacityProvider } from '@cdktf/provider-aws'

new lambdaCapacityProvider.LambdaCapacityProvider(scope: Construct, id: string, config: LambdaCapacityProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig">LambdaCapacityProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig">LambdaCapacityProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.putCapacityProviderScalingConfig">putCapacityProviderScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.putInstanceRequirements">putInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.putPermissionsConfig">putPermissionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.resetCapacityProviderScalingConfig">resetCapacityProviderScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.resetInstanceRequirements">resetInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.resetPermissionsConfig">resetPermissionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.resetVpcConfig">resetVpcConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCapacityProviderScalingConfig` <a name="putCapacityProviderScalingConfig" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.putCapacityProviderScalingConfig"></a>

```typescript
public putCapacityProviderScalingConfig(value: IResolvable | LambdaCapacityProviderCapacityProviderScalingConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.putCapacityProviderScalingConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig">LambdaCapacityProviderCapacityProviderScalingConfig</a>[]

---

##### `putInstanceRequirements` <a name="putInstanceRequirements" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.putInstanceRequirements"></a>

```typescript
public putInstanceRequirements(value: IResolvable | LambdaCapacityProviderInstanceRequirements[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.putInstanceRequirements.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements">LambdaCapacityProviderInstanceRequirements</a>[]

---

##### `putPermissionsConfig` <a name="putPermissionsConfig" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.putPermissionsConfig"></a>

```typescript
public putPermissionsConfig(value: IResolvable | LambdaCapacityProviderPermissionsConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.putPermissionsConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig">LambdaCapacityProviderPermissionsConfig</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.putTimeouts"></a>

```typescript
public putTimeouts(value: LambdaCapacityProviderTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeouts">LambdaCapacityProviderTimeouts</a>

---

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.putVpcConfig"></a>

```typescript
public putVpcConfig(value: IResolvable | LambdaCapacityProviderVpcConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.putVpcConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig">LambdaCapacityProviderVpcConfig</a>[]

---

##### `resetCapacityProviderScalingConfig` <a name="resetCapacityProviderScalingConfig" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.resetCapacityProviderScalingConfig"></a>

```typescript
public resetCapacityProviderScalingConfig(): void
```

##### `resetInstanceRequirements` <a name="resetInstanceRequirements" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.resetInstanceRequirements"></a>

```typescript
public resetInstanceRequirements(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetPermissionsConfig` <a name="resetPermissionsConfig" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.resetPermissionsConfig"></a>

```typescript
public resetPermissionsConfig(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVpcConfig` <a name="resetVpcConfig" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.resetVpcConfig"></a>

```typescript
public resetVpcConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LambdaCapacityProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.isConstruct"></a>

```typescript
import { lambdaCapacityProvider } from '@cdktf/provider-aws'

lambdaCapacityProvider.LambdaCapacityProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.isTerraformElement"></a>

```typescript
import { lambdaCapacityProvider } from '@cdktf/provider-aws'

lambdaCapacityProvider.LambdaCapacityProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.isTerraformResource"></a>

```typescript
import { lambdaCapacityProvider } from '@cdktf/provider-aws'

lambdaCapacityProvider.LambdaCapacityProvider.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.generateConfigForImport"></a>

```typescript
import { lambdaCapacityProvider } from '@cdktf/provider-aws'

lambdaCapacityProvider.LambdaCapacityProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LambdaCapacityProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LambdaCapacityProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LambdaCapacityProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LambdaCapacityProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.capacityProviderScalingConfig">capacityProviderScalingConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList">LambdaCapacityProviderCapacityProviderScalingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.instanceRequirements">instanceRequirements</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList">LambdaCapacityProviderInstanceRequirementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.permissionsConfig">permissionsConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList">LambdaCapacityProviderPermissionsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference">LambdaCapacityProviderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList">LambdaCapacityProviderVpcConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.capacityProviderScalingConfigInput">capacityProviderScalingConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig">LambdaCapacityProviderCapacityProviderScalingConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.instanceRequirementsInput">instanceRequirementsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements">LambdaCapacityProviderInstanceRequirements</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.permissionsConfigInput">permissionsConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig">LambdaCapacityProviderPermissionsConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeouts">LambdaCapacityProviderTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.vpcConfigInput">vpcConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig">LambdaCapacityProviderVpcConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `capacityProviderScalingConfig`<sup>Required</sup> <a name="capacityProviderScalingConfig" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.capacityProviderScalingConfig"></a>

```typescript
public readonly capacityProviderScalingConfig: LambdaCapacityProviderCapacityProviderScalingConfigList;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList">LambdaCapacityProviderCapacityProviderScalingConfigList</a>

---

##### `instanceRequirements`<sup>Required</sup> <a name="instanceRequirements" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.instanceRequirements"></a>

```typescript
public readonly instanceRequirements: LambdaCapacityProviderInstanceRequirementsList;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList">LambdaCapacityProviderInstanceRequirementsList</a>

---

##### `permissionsConfig`<sup>Required</sup> <a name="permissionsConfig" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.permissionsConfig"></a>

```typescript
public readonly permissionsConfig: LambdaCapacityProviderPermissionsConfigList;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList">LambdaCapacityProviderPermissionsConfigList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.timeouts"></a>

```typescript
public readonly timeouts: LambdaCapacityProviderTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference">LambdaCapacityProviderTimeoutsOutputReference</a>

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: LambdaCapacityProviderVpcConfigList;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList">LambdaCapacityProviderVpcConfigList</a>

---

##### `capacityProviderScalingConfigInput`<sup>Optional</sup> <a name="capacityProviderScalingConfigInput" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.capacityProviderScalingConfigInput"></a>

```typescript
public readonly capacityProviderScalingConfigInput: IResolvable | LambdaCapacityProviderCapacityProviderScalingConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig">LambdaCapacityProviderCapacityProviderScalingConfig</a>[]

---

##### `instanceRequirementsInput`<sup>Optional</sup> <a name="instanceRequirementsInput" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.instanceRequirementsInput"></a>

```typescript
public readonly instanceRequirementsInput: IResolvable | LambdaCapacityProviderInstanceRequirements[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements">LambdaCapacityProviderInstanceRequirements</a>[]

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `permissionsConfigInput`<sup>Optional</sup> <a name="permissionsConfigInput" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.permissionsConfigInput"></a>

```typescript
public readonly permissionsConfigInput: IResolvable | LambdaCapacityProviderPermissionsConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig">LambdaCapacityProviderPermissionsConfig</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LambdaCapacityProviderTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeouts">LambdaCapacityProviderTimeouts</a>

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.vpcConfigInput"></a>

```typescript
public readonly vpcConfigInput: IResolvable | LambdaCapacityProviderVpcConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig">LambdaCapacityProviderVpcConfig</a>[]

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaCapacityProviderCapacityProviderScalingConfig <a name="LambdaCapacityProviderCapacityProviderScalingConfig" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig.Initializer"></a>

```typescript
import { lambdaCapacityProvider } from '@cdktf/provider-aws'

const lambdaCapacityProviderCapacityProviderScalingConfig: lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig.property.maxVcpuCount">maxVcpuCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#max_vcpu_count LambdaCapacityProvider#max_vcpu_count}. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig.property.scalingMode">scalingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#scaling_mode LambdaCapacityProvider#scaling_mode}. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig.property.scalingPolicies">scalingPolicies</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#scaling_policies LambdaCapacityProvider#scaling_policies}. |

---

##### `maxVcpuCount`<sup>Optional</sup> <a name="maxVcpuCount" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig.property.maxVcpuCount"></a>

```typescript
public readonly maxVcpuCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#max_vcpu_count LambdaCapacityProvider#max_vcpu_count}.

---

##### `scalingMode`<sup>Optional</sup> <a name="scalingMode" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig.property.scalingMode"></a>

```typescript
public readonly scalingMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#scaling_mode LambdaCapacityProvider#scaling_mode}.

---

##### `scalingPolicies`<sup>Optional</sup> <a name="scalingPolicies" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig.property.scalingPolicies"></a>

```typescript
public readonly scalingPolicies: IResolvable | LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#scaling_policies LambdaCapacityProvider#scaling_policies}.

---

### LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies <a name="LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies.Initializer"></a>

```typescript
import { lambdaCapacityProvider } from '@cdktf/provider-aws'

const lambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies: lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies.property.predefinedMetricType">predefinedMetricType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#predefined_metric_type LambdaCapacityProvider#predefined_metric_type}. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies.property.targetValue">targetValue</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#target_value LambdaCapacityProvider#target_value}. |

---

##### `predefinedMetricType`<sup>Optional</sup> <a name="predefinedMetricType" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies.property.predefinedMetricType"></a>

```typescript
public readonly predefinedMetricType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#predefined_metric_type LambdaCapacityProvider#predefined_metric_type}.

---

##### `targetValue`<sup>Optional</sup> <a name="targetValue" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies.property.targetValue"></a>

```typescript
public readonly targetValue: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#target_value LambdaCapacityProvider#target_value}.

---

### LambdaCapacityProviderConfig <a name="LambdaCapacityProviderConfig" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.Initializer"></a>

```typescript
import { lambdaCapacityProvider } from '@cdktf/provider-aws'

const lambdaCapacityProviderConfig: lambdaCapacityProvider.LambdaCapacityProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#name LambdaCapacityProvider#name}. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.capacityProviderScalingConfig">capacityProviderScalingConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig">LambdaCapacityProviderCapacityProviderScalingConfig</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#capacity_provider_scaling_config LambdaCapacityProvider#capacity_provider_scaling_config}. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.instanceRequirements">instanceRequirements</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements">LambdaCapacityProviderInstanceRequirements</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#instance_requirements LambdaCapacityProvider#instance_requirements}. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#kms_key_arn LambdaCapacityProvider#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.permissionsConfig">permissionsConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig">LambdaCapacityProviderPermissionsConfig</a>[]</code> | permissions_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#tags LambdaCapacityProvider#tags}. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeouts">LambdaCapacityProviderTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.vpcConfig">vpcConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig">LambdaCapacityProviderVpcConfig</a>[]</code> | vpc_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#name LambdaCapacityProvider#name}.

---

##### `capacityProviderScalingConfig`<sup>Optional</sup> <a name="capacityProviderScalingConfig" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.capacityProviderScalingConfig"></a>

```typescript
public readonly capacityProviderScalingConfig: IResolvable | LambdaCapacityProviderCapacityProviderScalingConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig">LambdaCapacityProviderCapacityProviderScalingConfig</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#capacity_provider_scaling_config LambdaCapacityProvider#capacity_provider_scaling_config}.

---

##### `instanceRequirements`<sup>Optional</sup> <a name="instanceRequirements" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.instanceRequirements"></a>

```typescript
public readonly instanceRequirements: IResolvable | LambdaCapacityProviderInstanceRequirements[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements">LambdaCapacityProviderInstanceRequirements</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#instance_requirements LambdaCapacityProvider#instance_requirements}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#kms_key_arn LambdaCapacityProvider#kms_key_arn}.

---

##### `permissionsConfig`<sup>Optional</sup> <a name="permissionsConfig" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.permissionsConfig"></a>

```typescript
public readonly permissionsConfig: IResolvable | LambdaCapacityProviderPermissionsConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig">LambdaCapacityProviderPermissionsConfig</a>[]

permissions_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#permissions_config LambdaCapacityProvider#permissions_config}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#region LambdaCapacityProvider#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#tags LambdaCapacityProvider#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LambdaCapacityProviderTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeouts">LambdaCapacityProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#timeouts LambdaCapacityProvider#timeouts}

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: IResolvable | LambdaCapacityProviderVpcConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig">LambdaCapacityProviderVpcConfig</a>[]

vpc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#vpc_config LambdaCapacityProvider#vpc_config}

---

### LambdaCapacityProviderInstanceRequirements <a name="LambdaCapacityProviderInstanceRequirements" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements.Initializer"></a>

```typescript
import { lambdaCapacityProvider } from '@cdktf/provider-aws'

const lambdaCapacityProviderInstanceRequirements: lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements.property.allowedInstanceTypes">allowedInstanceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#allowed_instance_types LambdaCapacityProvider#allowed_instance_types}. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements.property.architectures">architectures</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#architectures LambdaCapacityProvider#architectures}. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements.property.excludedInstanceTypes">excludedInstanceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#excluded_instance_types LambdaCapacityProvider#excluded_instance_types}. |

---

##### `allowedInstanceTypes`<sup>Optional</sup> <a name="allowedInstanceTypes" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements.property.allowedInstanceTypes"></a>

```typescript
public readonly allowedInstanceTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#allowed_instance_types LambdaCapacityProvider#allowed_instance_types}.

---

##### `architectures`<sup>Optional</sup> <a name="architectures" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements.property.architectures"></a>

```typescript
public readonly architectures: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#architectures LambdaCapacityProvider#architectures}.

---

##### `excludedInstanceTypes`<sup>Optional</sup> <a name="excludedInstanceTypes" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements.property.excludedInstanceTypes"></a>

```typescript
public readonly excludedInstanceTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#excluded_instance_types LambdaCapacityProvider#excluded_instance_types}.

---

### LambdaCapacityProviderPermissionsConfig <a name="LambdaCapacityProviderPermissionsConfig" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig.Initializer"></a>

```typescript
import { lambdaCapacityProvider } from '@cdktf/provider-aws'

const lambdaCapacityProviderPermissionsConfig: lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig.property.capacityProviderOperatorRoleArn">capacityProviderOperatorRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#capacity_provider_operator_role_arn LambdaCapacityProvider#capacity_provider_operator_role_arn}. |

---

##### `capacityProviderOperatorRoleArn`<sup>Required</sup> <a name="capacityProviderOperatorRoleArn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig.property.capacityProviderOperatorRoleArn"></a>

```typescript
public readonly capacityProviderOperatorRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#capacity_provider_operator_role_arn LambdaCapacityProvider#capacity_provider_operator_role_arn}.

---

### LambdaCapacityProviderTimeouts <a name="LambdaCapacityProviderTimeouts" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeouts.Initializer"></a>

```typescript
import { lambdaCapacityProvider } from '@cdktf/provider-aws'

const lambdaCapacityProviderTimeouts: lambdaCapacityProvider.LambdaCapacityProviderTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#create LambdaCapacityProvider#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#delete LambdaCapacityProvider#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#update LambdaCapacityProvider#update}

---

### LambdaCapacityProviderVpcConfig <a name="LambdaCapacityProviderVpcConfig" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig.Initializer"></a>

```typescript
import { lambdaCapacityProvider } from '@cdktf/provider-aws'

const lambdaCapacityProviderVpcConfig: lambdaCapacityProvider.LambdaCapacityProviderVpcConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#security_group_ids LambdaCapacityProvider#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#subnet_ids LambdaCapacityProvider#subnet_ids}. |

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#security_group_ids LambdaCapacityProvider#security_group_ids}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/lambda_capacity_provider#subnet_ids LambdaCapacityProvider#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaCapacityProviderCapacityProviderScalingConfigList <a name="LambdaCapacityProviderCapacityProviderScalingConfigList" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.Initializer"></a>

```typescript
import { lambdaCapacityProvider } from '@cdktf/provider-aws'

new lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.get"></a>

```typescript
public get(index: number): LambdaCapacityProviderCapacityProviderScalingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig">LambdaCapacityProviderCapacityProviderScalingConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaCapacityProviderCapacityProviderScalingConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig">LambdaCapacityProviderCapacityProviderScalingConfig</a>[]

---


### LambdaCapacityProviderCapacityProviderScalingConfigOutputReference <a name="LambdaCapacityProviderCapacityProviderScalingConfigOutputReference" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.Initializer"></a>

```typescript
import { lambdaCapacityProvider } from '@cdktf/provider-aws'

new lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.putScalingPolicies">putScalingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resetMaxVcpuCount">resetMaxVcpuCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resetScalingMode">resetScalingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resetScalingPolicies">resetScalingPolicies</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScalingPolicies` <a name="putScalingPolicies" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.putScalingPolicies"></a>

```typescript
public putScalingPolicies(value: IResolvable | LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.putScalingPolicies.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a>[]

---

##### `resetMaxVcpuCount` <a name="resetMaxVcpuCount" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resetMaxVcpuCount"></a>

```typescript
public resetMaxVcpuCount(): void
```

##### `resetScalingMode` <a name="resetScalingMode" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resetScalingMode"></a>

```typescript
public resetScalingMode(): void
```

##### `resetScalingPolicies` <a name="resetScalingPolicies" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resetScalingPolicies"></a>

```typescript
public resetScalingPolicies(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.scalingPolicies">scalingPolicies</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList">LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.maxVcpuCountInput">maxVcpuCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.scalingModeInput">scalingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.scalingPoliciesInput">scalingPoliciesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.maxVcpuCount">maxVcpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.scalingMode">scalingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig">LambdaCapacityProviderCapacityProviderScalingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scalingPolicies`<sup>Required</sup> <a name="scalingPolicies" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.scalingPolicies"></a>

```typescript
public readonly scalingPolicies: LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList;
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList">LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList</a>

---

##### `maxVcpuCountInput`<sup>Optional</sup> <a name="maxVcpuCountInput" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.maxVcpuCountInput"></a>

```typescript
public readonly maxVcpuCountInput: number;
```

- *Type:* number

---

##### `scalingModeInput`<sup>Optional</sup> <a name="scalingModeInput" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.scalingModeInput"></a>

```typescript
public readonly scalingModeInput: string;
```

- *Type:* string

---

##### `scalingPoliciesInput`<sup>Optional</sup> <a name="scalingPoliciesInput" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.scalingPoliciesInput"></a>

```typescript
public readonly scalingPoliciesInput: IResolvable | LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a>[]

---

##### `maxVcpuCount`<sup>Required</sup> <a name="maxVcpuCount" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.maxVcpuCount"></a>

```typescript
public readonly maxVcpuCount: number;
```

- *Type:* number

---

##### `scalingMode`<sup>Required</sup> <a name="scalingMode" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.scalingMode"></a>

```typescript
public readonly scalingMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaCapacityProviderCapacityProviderScalingConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig">LambdaCapacityProviderCapacityProviderScalingConfig</a>

---


### LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList <a name="LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.Initializer"></a>

```typescript
import { lambdaCapacityProvider } from '@cdktf/provider-aws'

new lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.get"></a>

```typescript
public get(index: number): LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a>[]

---


### LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference <a name="LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer"></a>

```typescript
import { lambdaCapacityProvider } from '@cdktf/provider-aws'

new lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.resetPredefinedMetricType">resetPredefinedMetricType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.resetTargetValue">resetTargetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPredefinedMetricType` <a name="resetPredefinedMetricType" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.resetPredefinedMetricType"></a>

```typescript
public resetPredefinedMetricType(): void
```

##### `resetTargetValue` <a name="resetTargetValue" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.resetTargetValue"></a>

```typescript
public resetTargetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.predefinedMetricTypeInput">predefinedMetricTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.targetValueInput">targetValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.predefinedMetricType">predefinedMetricType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.targetValue">targetValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `predefinedMetricTypeInput`<sup>Optional</sup> <a name="predefinedMetricTypeInput" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.predefinedMetricTypeInput"></a>

```typescript
public readonly predefinedMetricTypeInput: string;
```

- *Type:* string

---

##### `targetValueInput`<sup>Optional</sup> <a name="targetValueInput" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.targetValueInput"></a>

```typescript
public readonly targetValueInput: number;
```

- *Type:* number

---

##### `predefinedMetricType`<sup>Required</sup> <a name="predefinedMetricType" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.predefinedMetricType"></a>

```typescript
public readonly predefinedMetricType: string;
```

- *Type:* string

---

##### `targetValue`<sup>Required</sup> <a name="targetValue" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.targetValue"></a>

```typescript
public readonly targetValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a>

---


### LambdaCapacityProviderInstanceRequirementsList <a name="LambdaCapacityProviderInstanceRequirementsList" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.Initializer"></a>

```typescript
import { lambdaCapacityProvider } from '@cdktf/provider-aws'

new lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.get"></a>

```typescript
public get(index: number): LambdaCapacityProviderInstanceRequirementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements">LambdaCapacityProviderInstanceRequirements</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaCapacityProviderInstanceRequirements[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements">LambdaCapacityProviderInstanceRequirements</a>[]

---


### LambdaCapacityProviderInstanceRequirementsOutputReference <a name="LambdaCapacityProviderInstanceRequirementsOutputReference" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.Initializer"></a>

```typescript
import { lambdaCapacityProvider } from '@cdktf/provider-aws'

new lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.resetAllowedInstanceTypes">resetAllowedInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.resetArchitectures">resetArchitectures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.resetExcludedInstanceTypes">resetExcludedInstanceTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedInstanceTypes` <a name="resetAllowedInstanceTypes" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.resetAllowedInstanceTypes"></a>

```typescript
public resetAllowedInstanceTypes(): void
```

##### `resetArchitectures` <a name="resetArchitectures" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.resetArchitectures"></a>

```typescript
public resetArchitectures(): void
```

##### `resetExcludedInstanceTypes` <a name="resetExcludedInstanceTypes" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.resetExcludedInstanceTypes"></a>

```typescript
public resetExcludedInstanceTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.allowedInstanceTypesInput">allowedInstanceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.architecturesInput">architecturesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.excludedInstanceTypesInput">excludedInstanceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.allowedInstanceTypes">allowedInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.architectures">architectures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.excludedInstanceTypes">excludedInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements">LambdaCapacityProviderInstanceRequirements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedInstanceTypesInput`<sup>Optional</sup> <a name="allowedInstanceTypesInput" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.allowedInstanceTypesInput"></a>

```typescript
public readonly allowedInstanceTypesInput: string[];
```

- *Type:* string[]

---

##### `architecturesInput`<sup>Optional</sup> <a name="architecturesInput" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.architecturesInput"></a>

```typescript
public readonly architecturesInput: string[];
```

- *Type:* string[]

---

##### `excludedInstanceTypesInput`<sup>Optional</sup> <a name="excludedInstanceTypesInput" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.excludedInstanceTypesInput"></a>

```typescript
public readonly excludedInstanceTypesInput: string[];
```

- *Type:* string[]

---

##### `allowedInstanceTypes`<sup>Required</sup> <a name="allowedInstanceTypes" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.allowedInstanceTypes"></a>

```typescript
public readonly allowedInstanceTypes: string[];
```

- *Type:* string[]

---

##### `architectures`<sup>Required</sup> <a name="architectures" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.architectures"></a>

```typescript
public readonly architectures: string[];
```

- *Type:* string[]

---

##### `excludedInstanceTypes`<sup>Required</sup> <a name="excludedInstanceTypes" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.excludedInstanceTypes"></a>

```typescript
public readonly excludedInstanceTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaCapacityProviderInstanceRequirements;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements">LambdaCapacityProviderInstanceRequirements</a>

---


### LambdaCapacityProviderPermissionsConfigList <a name="LambdaCapacityProviderPermissionsConfigList" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.Initializer"></a>

```typescript
import { lambdaCapacityProvider } from '@cdktf/provider-aws'

new lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.get"></a>

```typescript
public get(index: number): LambdaCapacityProviderPermissionsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig">LambdaCapacityProviderPermissionsConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaCapacityProviderPermissionsConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig">LambdaCapacityProviderPermissionsConfig</a>[]

---


### LambdaCapacityProviderPermissionsConfigOutputReference <a name="LambdaCapacityProviderPermissionsConfigOutputReference" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.Initializer"></a>

```typescript
import { lambdaCapacityProvider } from '@cdktf/provider-aws'

new lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.capacityProviderOperatorRoleArnInput">capacityProviderOperatorRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.capacityProviderOperatorRoleArn">capacityProviderOperatorRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig">LambdaCapacityProviderPermissionsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityProviderOperatorRoleArnInput`<sup>Optional</sup> <a name="capacityProviderOperatorRoleArnInput" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.capacityProviderOperatorRoleArnInput"></a>

```typescript
public readonly capacityProviderOperatorRoleArnInput: string;
```

- *Type:* string

---

##### `capacityProviderOperatorRoleArn`<sup>Required</sup> <a name="capacityProviderOperatorRoleArn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.capacityProviderOperatorRoleArn"></a>

```typescript
public readonly capacityProviderOperatorRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaCapacityProviderPermissionsConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig">LambdaCapacityProviderPermissionsConfig</a>

---


### LambdaCapacityProviderTimeoutsOutputReference <a name="LambdaCapacityProviderTimeoutsOutputReference" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.Initializer"></a>

```typescript
import { lambdaCapacityProvider } from '@cdktf/provider-aws'

new lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeouts">LambdaCapacityProviderTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaCapacityProviderTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeouts">LambdaCapacityProviderTimeouts</a>

---


### LambdaCapacityProviderVpcConfigList <a name="LambdaCapacityProviderVpcConfigList" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.Initializer"></a>

```typescript
import { lambdaCapacityProvider } from '@cdktf/provider-aws'

new lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.get"></a>

```typescript
public get(index: number): LambdaCapacityProviderVpcConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig">LambdaCapacityProviderVpcConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaCapacityProviderVpcConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig">LambdaCapacityProviderVpcConfig</a>[]

---


### LambdaCapacityProviderVpcConfigOutputReference <a name="LambdaCapacityProviderVpcConfigOutputReference" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.Initializer"></a>

```typescript
import { lambdaCapacityProvider } from '@cdktf/provider-aws'

new lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig">LambdaCapacityProviderVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaCapacityProviderVpcConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig">LambdaCapacityProviderVpcConfig</a>

---



