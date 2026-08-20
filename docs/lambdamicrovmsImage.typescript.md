# `lambdamicrovmsImage` Submodule <a name="`lambdamicrovmsImage` Submodule" id="@cdktn/provider-aws.lambdamicrovmsImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdamicrovmsImage <a name="LambdamicrovmsImage" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image aws_lambdamicrovms_image}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer"></a>

```typescript
import { lambdamicrovmsImage } from '@cdktn/provider-aws'

new lambdamicrovmsImage.LambdamicrovmsImage(scope: Construct, id: string, config: LambdamicrovmsImageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig">LambdamicrovmsImageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig">LambdamicrovmsImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putCodeArtifact">putCodeArtifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putCpuConfiguration">putCpuConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetAdditionalOsCapabilities">resetAdditionalOsCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetBaseImageVersion">resetBaseImageVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetCodeArtifact">resetCodeArtifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetCpuConfiguration">resetCpuConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetEgressNetworkConnectors">resetEgressNetworkConnectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCodeArtifact` <a name="putCodeArtifact" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putCodeArtifact"></a>

```typescript
public putCodeArtifact(value: IResolvable | LambdamicrovmsImageCodeArtifact[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putCodeArtifact.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a>[]

---

##### `putCpuConfiguration` <a name="putCpuConfiguration" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putCpuConfiguration"></a>

```typescript
public putCpuConfiguration(value: IResolvable | LambdamicrovmsImageCpuConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putCpuConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putTimeouts"></a>

```typescript
public putTimeouts(value: LambdamicrovmsImageTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts">LambdamicrovmsImageTimeouts</a>

---

##### `resetAdditionalOsCapabilities` <a name="resetAdditionalOsCapabilities" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetAdditionalOsCapabilities"></a>

```typescript
public resetAdditionalOsCapabilities(): void
```

##### `resetBaseImageVersion` <a name="resetBaseImageVersion" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetBaseImageVersion"></a>

```typescript
public resetBaseImageVersion(): void
```

##### `resetCodeArtifact` <a name="resetCodeArtifact" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetCodeArtifact"></a>

```typescript
public resetCodeArtifact(): void
```

##### `resetCpuConfiguration` <a name="resetCpuConfiguration" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetCpuConfiguration"></a>

```typescript
public resetCpuConfiguration(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEgressNetworkConnectors` <a name="resetEgressNetworkConnectors" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetEgressNetworkConnectors"></a>

```typescript
public resetEgressNetworkConnectors(): void
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetEnvironmentVariables"></a>

```typescript
public resetEnvironmentVariables(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LambdamicrovmsImage resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.isConstruct"></a>

```typescript
import { lambdamicrovmsImage } from '@cdktn/provider-aws'

lambdamicrovmsImage.LambdamicrovmsImage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.isTerraformElement"></a>

```typescript
import { lambdamicrovmsImage } from '@cdktn/provider-aws'

lambdamicrovmsImage.LambdamicrovmsImage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.isTerraformResource"></a>

```typescript
import { lambdamicrovmsImage } from '@cdktn/provider-aws'

lambdamicrovmsImage.LambdamicrovmsImage.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.generateConfigForImport"></a>

```typescript
import { lambdamicrovmsImage } from '@cdktn/provider-aws'

lambdamicrovmsImage.LambdamicrovmsImage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LambdamicrovmsImage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LambdamicrovmsImage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LambdamicrovmsImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LambdamicrovmsImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.codeArtifact">codeArtifact</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList">LambdamicrovmsImageCodeArtifactList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.cpuConfiguration">cpuConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList">LambdamicrovmsImageCpuConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.imageVersion">imageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.latestActiveImageVersion">latestActiveImageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.latestFailedImageVersion">latestFailedImageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.tagsAll">tagsAll</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference">LambdamicrovmsImageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.additionalOsCapabilitiesInput">additionalOsCapabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.baseImageArnInput">baseImageArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.baseImageVersionInput">baseImageVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.buildRoleArnInput">buildRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.codeArtifactInput">codeArtifactInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.cpuConfigurationInput">cpuConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.egressNetworkConnectorsInput">egressNetworkConnectorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts">LambdamicrovmsImageTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.additionalOsCapabilities">additionalOsCapabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.baseImageArn">baseImageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.baseImageVersion">baseImageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.buildRoleArn">buildRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.egressNetworkConnectors">egressNetworkConnectors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `codeArtifact`<sup>Required</sup> <a name="codeArtifact" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.codeArtifact"></a>

```typescript
public readonly codeArtifact: LambdamicrovmsImageCodeArtifactList;
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList">LambdamicrovmsImageCodeArtifactList</a>

---

##### `cpuConfiguration`<sup>Required</sup> <a name="cpuConfiguration" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.cpuConfiguration"></a>

```typescript
public readonly cpuConfiguration: LambdamicrovmsImageCpuConfigurationList;
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList">LambdamicrovmsImageCpuConfigurationList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `imageVersion`<sup>Required</sup> <a name="imageVersion" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.imageVersion"></a>

```typescript
public readonly imageVersion: string;
```

- *Type:* string

---

##### `latestActiveImageVersion`<sup>Required</sup> <a name="latestActiveImageVersion" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.latestActiveImageVersion"></a>

```typescript
public readonly latestActiveImageVersion: string;
```

- *Type:* string

---

##### `latestFailedImageVersion`<sup>Required</sup> <a name="latestFailedImageVersion" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.latestFailedImageVersion"></a>

```typescript
public readonly latestFailedImageVersion: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.timeouts"></a>

```typescript
public readonly timeouts: LambdamicrovmsImageTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference">LambdamicrovmsImageTimeoutsOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `additionalOsCapabilitiesInput`<sup>Optional</sup> <a name="additionalOsCapabilitiesInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.additionalOsCapabilitiesInput"></a>

```typescript
public readonly additionalOsCapabilitiesInput: string[];
```

- *Type:* string[]

---

##### `baseImageArnInput`<sup>Optional</sup> <a name="baseImageArnInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.baseImageArnInput"></a>

```typescript
public readonly baseImageArnInput: string;
```

- *Type:* string

---

##### `baseImageVersionInput`<sup>Optional</sup> <a name="baseImageVersionInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.baseImageVersionInput"></a>

```typescript
public readonly baseImageVersionInput: string;
```

- *Type:* string

---

##### `buildRoleArnInput`<sup>Optional</sup> <a name="buildRoleArnInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.buildRoleArnInput"></a>

```typescript
public readonly buildRoleArnInput: string;
```

- *Type:* string

---

##### `codeArtifactInput`<sup>Optional</sup> <a name="codeArtifactInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.codeArtifactInput"></a>

```typescript
public readonly codeArtifactInput: IResolvable | LambdamicrovmsImageCodeArtifact[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a>[]

---

##### `cpuConfigurationInput`<sup>Optional</sup> <a name="cpuConfigurationInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.cpuConfigurationInput"></a>

```typescript
public readonly cpuConfigurationInput: IResolvable | LambdamicrovmsImageCpuConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `egressNetworkConnectorsInput`<sup>Optional</sup> <a name="egressNetworkConnectorsInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.egressNetworkConnectorsInput"></a>

```typescript
public readonly egressNetworkConnectorsInput: string[];
```

- *Type:* string[]

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.environmentVariablesInput"></a>

```typescript
public readonly environmentVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LambdamicrovmsImageTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts">LambdamicrovmsImageTimeouts</a>

---

##### `additionalOsCapabilities`<sup>Required</sup> <a name="additionalOsCapabilities" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.additionalOsCapabilities"></a>

```typescript
public readonly additionalOsCapabilities: string[];
```

- *Type:* string[]

---

##### `baseImageArn`<sup>Required</sup> <a name="baseImageArn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.baseImageArn"></a>

```typescript
public readonly baseImageArn: string;
```

- *Type:* string

---

##### `baseImageVersion`<sup>Required</sup> <a name="baseImageVersion" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.baseImageVersion"></a>

```typescript
public readonly baseImageVersion: string;
```

- *Type:* string

---

##### `buildRoleArn`<sup>Required</sup> <a name="buildRoleArn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.buildRoleArn"></a>

```typescript
public readonly buildRoleArn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `egressNetworkConnectors`<sup>Required</sup> <a name="egressNetworkConnectors" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.egressNetworkConnectors"></a>

```typescript
public readonly egressNetworkConnectors: string[];
```

- *Type:* string[]

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdamicrovmsImageCodeArtifact <a name="LambdamicrovmsImageCodeArtifact" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact.Initializer"></a>

```typescript
import { lambdamicrovmsImage } from '@cdktn/provider-aws'

const lambdamicrovmsImageCodeArtifact: lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#uri LambdamicrovmsImage#uri}. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#uri LambdamicrovmsImage#uri}.

---

### LambdamicrovmsImageConfig <a name="LambdamicrovmsImageConfig" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.Initializer"></a>

```typescript
import { lambdamicrovmsImage } from '@cdktn/provider-aws'

const lambdamicrovmsImageConfig: lambdamicrovmsImage.LambdamicrovmsImageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.baseImageArn">baseImageArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#base_image_arn LambdamicrovmsImage#base_image_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.buildRoleArn">buildRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#build_role_arn LambdamicrovmsImage#build_role_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#name LambdamicrovmsImage#name}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.additionalOsCapabilities">additionalOsCapabilities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#additional_os_capabilities LambdamicrovmsImage#additional_os_capabilities}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.baseImageVersion">baseImageVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#base_image_version LambdamicrovmsImage#base_image_version}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.codeArtifact">codeArtifact</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a>[]</code> | code_artifact block. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.cpuConfiguration">cpuConfiguration</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a>[]</code> | cpu_configuration block. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#description LambdamicrovmsImage#description}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.egressNetworkConnectors">egressNetworkConnectors</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#egress_network_connectors LambdamicrovmsImage#egress_network_connectors}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#environment_variables LambdamicrovmsImage#environment_variables}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#tags LambdamicrovmsImage#tags}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts">LambdamicrovmsImageTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `baseImageArn`<sup>Required</sup> <a name="baseImageArn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.baseImageArn"></a>

```typescript
public readonly baseImageArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#base_image_arn LambdamicrovmsImage#base_image_arn}.

---

##### `buildRoleArn`<sup>Required</sup> <a name="buildRoleArn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.buildRoleArn"></a>

```typescript
public readonly buildRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#build_role_arn LambdamicrovmsImage#build_role_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#name LambdamicrovmsImage#name}.

---

##### `additionalOsCapabilities`<sup>Optional</sup> <a name="additionalOsCapabilities" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.additionalOsCapabilities"></a>

```typescript
public readonly additionalOsCapabilities: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#additional_os_capabilities LambdamicrovmsImage#additional_os_capabilities}.

---

##### `baseImageVersion`<sup>Optional</sup> <a name="baseImageVersion" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.baseImageVersion"></a>

```typescript
public readonly baseImageVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#base_image_version LambdamicrovmsImage#base_image_version}.

---

##### `codeArtifact`<sup>Optional</sup> <a name="codeArtifact" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.codeArtifact"></a>

```typescript
public readonly codeArtifact: IResolvable | LambdamicrovmsImageCodeArtifact[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a>[]

code_artifact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#code_artifact LambdamicrovmsImage#code_artifact}

---

##### `cpuConfiguration`<sup>Optional</sup> <a name="cpuConfiguration" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.cpuConfiguration"></a>

```typescript
public readonly cpuConfiguration: IResolvable | LambdamicrovmsImageCpuConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a>[]

cpu_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#cpu_configuration LambdamicrovmsImage#cpu_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#description LambdamicrovmsImage#description}.

---

##### `egressNetworkConnectors`<sup>Optional</sup> <a name="egressNetworkConnectors" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.egressNetworkConnectors"></a>

```typescript
public readonly egressNetworkConnectors: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#egress_network_connectors LambdamicrovmsImage#egress_network_connectors}.

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#environment_variables LambdamicrovmsImage#environment_variables}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#region LambdamicrovmsImage#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#tags LambdamicrovmsImage#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LambdamicrovmsImageTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts">LambdamicrovmsImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#timeouts LambdamicrovmsImage#timeouts}

---

### LambdamicrovmsImageCpuConfiguration <a name="LambdamicrovmsImageCpuConfiguration" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration.Initializer"></a>

```typescript
import { lambdamicrovmsImage } from '@cdktn/provider-aws'

const lambdamicrovmsImageCpuConfiguration: lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration.property.architecture">architecture</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#architecture LambdamicrovmsImage#architecture}. |

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration.property.architecture"></a>

```typescript
public readonly architecture: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#architecture LambdamicrovmsImage#architecture}.

---

### LambdamicrovmsImageTimeouts <a name="LambdamicrovmsImageTimeouts" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts.Initializer"></a>

```typescript
import { lambdamicrovmsImage } from '@cdktn/provider-aws'

const lambdamicrovmsImageTimeouts: lambdamicrovmsImage.LambdamicrovmsImageTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#create LambdamicrovmsImage#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#delete LambdamicrovmsImage#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#update LambdamicrovmsImage#update}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdamicrovmsImageCodeArtifactList <a name="LambdamicrovmsImageCodeArtifactList" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.Initializer"></a>

```typescript
import { lambdamicrovmsImage } from '@cdktn/provider-aws'

new lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.get"></a>

```typescript
public get(index: number): LambdamicrovmsImageCodeArtifactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdamicrovmsImageCodeArtifact[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a>[]

---


### LambdamicrovmsImageCodeArtifactOutputReference <a name="LambdamicrovmsImageCodeArtifactOutputReference" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.Initializer"></a>

```typescript
import { lambdamicrovmsImage } from '@cdktn/provider-aws'

new lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdamicrovmsImageCodeArtifact;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a>

---


### LambdamicrovmsImageCpuConfigurationList <a name="LambdamicrovmsImageCpuConfigurationList" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.Initializer"></a>

```typescript
import { lambdamicrovmsImage } from '@cdktn/provider-aws'

new lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.get"></a>

```typescript
public get(index: number): LambdamicrovmsImageCpuConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdamicrovmsImageCpuConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a>[]

---


### LambdamicrovmsImageCpuConfigurationOutputReference <a name="LambdamicrovmsImageCpuConfigurationOutputReference" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.Initializer"></a>

```typescript
import { lambdamicrovmsImage } from '@cdktn/provider-aws'

new lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.architectureInput">architectureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.architecture">architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `architectureInput`<sup>Optional</sup> <a name="architectureInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.architectureInput"></a>

```typescript
public readonly architectureInput: string;
```

- *Type:* string

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.architecture"></a>

```typescript
public readonly architecture: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdamicrovmsImageCpuConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a>

---


### LambdamicrovmsImageTimeoutsOutputReference <a name="LambdamicrovmsImageTimeoutsOutputReference" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.Initializer"></a>

```typescript
import { lambdamicrovmsImage } from '@cdktn/provider-aws'

new lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts">LambdamicrovmsImageTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdamicrovmsImageTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts">LambdamicrovmsImageTimeouts</a>

---



