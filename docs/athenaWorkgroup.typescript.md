# `athenaWorkgroup` Submodule <a name="`athenaWorkgroup` Submodule" id="@cdktn/provider-aws.athenaWorkgroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AthenaWorkgroup <a name="AthenaWorkgroup" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup aws_athena_workgroup}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer"></a>

```typescript
import { athenaWorkgroup } from '@cdktn/provider-aws'

new athenaWorkgroup.AthenaWorkgroup(scope: Construct, id: string, config: AthenaWorkgroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig">AthenaWorkgroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig">AthenaWorkgroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.putConfiguration"></a>

```typescript
public putConfiguration(value: AthenaWorkgroupConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a>

---

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetConfiguration"></a>

```typescript
public resetConfiguration(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetForceDestroy"></a>

```typescript
public resetForceDestroy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetState` <a name="resetState" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AthenaWorkgroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.isConstruct"></a>

```typescript
import { athenaWorkgroup } from '@cdktn/provider-aws'

athenaWorkgroup.AthenaWorkgroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.isTerraformElement"></a>

```typescript
import { athenaWorkgroup } from '@cdktn/provider-aws'

athenaWorkgroup.AthenaWorkgroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.isTerraformResource"></a>

```typescript
import { athenaWorkgroup } from '@cdktn/provider-aws'

athenaWorkgroup.AthenaWorkgroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.generateConfigForImport"></a>

```typescript
import { athenaWorkgroup } from '@cdktn/provider-aws'

athenaWorkgroup.AthenaWorkgroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AthenaWorkgroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AthenaWorkgroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AthenaWorkgroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AthenaWorkgroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference">AthenaWorkgroupConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.configurationInput">configurationInput</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.forceDestroyInput">forceDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.configuration"></a>

```typescript
public readonly configuration: AthenaWorkgroupConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference">AthenaWorkgroupConfigurationOutputReference</a>

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.configurationInput"></a>

```typescript
public readonly configurationInput: AthenaWorkgroupConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.forceDestroyInput"></a>

```typescript
public readonly forceDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AthenaWorkgroupConfig <a name="AthenaWorkgroupConfig" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.Initializer"></a>

```typescript
import { athenaWorkgroup } from '@cdktn/provider-aws'

const athenaWorkgroupConfig: athenaWorkgroup.AthenaWorkgroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#name AthenaWorkgroup#name}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#description AthenaWorkgroup#description}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#force_destroy AthenaWorkgroup#force_destroy}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#id AthenaWorkgroup#id}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#state AthenaWorkgroup#state}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#tags AthenaWorkgroup#tags}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#tags_all AthenaWorkgroup#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#name AthenaWorkgroup#name}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.configuration"></a>

```typescript
public readonly configuration: AthenaWorkgroupConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#configuration AthenaWorkgroup#configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#description AthenaWorkgroup#description}.

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#force_destroy AthenaWorkgroup#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#id AthenaWorkgroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#region AthenaWorkgroup#region}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#state AthenaWorkgroup#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#tags AthenaWorkgroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#tags_all AthenaWorkgroup#tags_all}.

---

### AthenaWorkgroupConfiguration <a name="AthenaWorkgroupConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.Initializer"></a>

```typescript
import { athenaWorkgroup } from '@cdktn/provider-aws'

const athenaWorkgroupConfiguration: athenaWorkgroup.AthenaWorkgroupConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.bytesScannedCutoffPerQuery">bytesScannedCutoffPerQuery</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#bytes_scanned_cutoff_per_query AthenaWorkgroup#bytes_scanned_cutoff_per_query}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.customerContentEncryptionConfiguration">customerContentEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration</a></code> | customer_content_encryption_configuration block. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.enableMinimumEncryptionConfiguration">enableMinimumEncryptionConfiguration</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#enable_minimum_encryption_configuration AthenaWorkgroup#enable_minimum_encryption_configuration}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.enforceWorkgroupConfiguration">enforceWorkgroupConfiguration</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#enforce_workgroup_configuration AthenaWorkgroup#enforce_workgroup_configuration}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.engineVersion">engineVersion</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion">AthenaWorkgroupConfigurationEngineVersion</a></code> | engine_version block. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.executionRole">executionRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#execution_role AthenaWorkgroup#execution_role}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.identityCenterConfiguration">identityCenterConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfiguration">AthenaWorkgroupConfigurationIdentityCenterConfiguration</a></code> | identity_center_configuration block. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.managedQueryResultsConfiguration">managedQueryResultsConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfiguration">AthenaWorkgroupConfigurationManagedQueryResultsConfiguration</a></code> | managed_query_results_configuration block. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.monitoringConfiguration">monitoringConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfiguration">AthenaWorkgroupConfigurationMonitoringConfiguration</a></code> | monitoring_configuration block. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.publishCloudwatchMetricsEnabled">publishCloudwatchMetricsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#publish_cloudwatch_metrics_enabled AthenaWorkgroup#publish_cloudwatch_metrics_enabled}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.requesterPaysEnabled">requesterPaysEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#requester_pays_enabled AthenaWorkgroup#requester_pays_enabled}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.resultConfiguration">resultConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration">AthenaWorkgroupConfigurationResultConfiguration</a></code> | result_configuration block. |

---

##### `bytesScannedCutoffPerQuery`<sup>Optional</sup> <a name="bytesScannedCutoffPerQuery" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.bytesScannedCutoffPerQuery"></a>

```typescript
public readonly bytesScannedCutoffPerQuery: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#bytes_scanned_cutoff_per_query AthenaWorkgroup#bytes_scanned_cutoff_per_query}.

---

##### `customerContentEncryptionConfiguration`<sup>Optional</sup> <a name="customerContentEncryptionConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.customerContentEncryptionConfiguration"></a>

```typescript
public readonly customerContentEncryptionConfiguration: AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration</a>

customer_content_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#customer_content_encryption_configuration AthenaWorkgroup#customer_content_encryption_configuration}

---

##### `enableMinimumEncryptionConfiguration`<sup>Optional</sup> <a name="enableMinimumEncryptionConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.enableMinimumEncryptionConfiguration"></a>

```typescript
public readonly enableMinimumEncryptionConfiguration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#enable_minimum_encryption_configuration AthenaWorkgroup#enable_minimum_encryption_configuration}.

---

##### `enforceWorkgroupConfiguration`<sup>Optional</sup> <a name="enforceWorkgroupConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.enforceWorkgroupConfiguration"></a>

```typescript
public readonly enforceWorkgroupConfiguration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#enforce_workgroup_configuration AthenaWorkgroup#enforce_workgroup_configuration}.

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.engineVersion"></a>

```typescript
public readonly engineVersion: AthenaWorkgroupConfigurationEngineVersion;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion">AthenaWorkgroupConfigurationEngineVersion</a>

engine_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#engine_version AthenaWorkgroup#engine_version}

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#execution_role AthenaWorkgroup#execution_role}.

---

##### `identityCenterConfiguration`<sup>Optional</sup> <a name="identityCenterConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.identityCenterConfiguration"></a>

```typescript
public readonly identityCenterConfiguration: AthenaWorkgroupConfigurationIdentityCenterConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfiguration">AthenaWorkgroupConfigurationIdentityCenterConfiguration</a>

identity_center_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#identity_center_configuration AthenaWorkgroup#identity_center_configuration}

---

##### `managedQueryResultsConfiguration`<sup>Optional</sup> <a name="managedQueryResultsConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.managedQueryResultsConfiguration"></a>

```typescript
public readonly managedQueryResultsConfiguration: AthenaWorkgroupConfigurationManagedQueryResultsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfiguration">AthenaWorkgroupConfigurationManagedQueryResultsConfiguration</a>

managed_query_results_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#managed_query_results_configuration AthenaWorkgroup#managed_query_results_configuration}

---

##### `monitoringConfiguration`<sup>Optional</sup> <a name="monitoringConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.monitoringConfiguration"></a>

```typescript
public readonly monitoringConfiguration: AthenaWorkgroupConfigurationMonitoringConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfiguration">AthenaWorkgroupConfigurationMonitoringConfiguration</a>

monitoring_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#monitoring_configuration AthenaWorkgroup#monitoring_configuration}

---

##### `publishCloudwatchMetricsEnabled`<sup>Optional</sup> <a name="publishCloudwatchMetricsEnabled" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.publishCloudwatchMetricsEnabled"></a>

```typescript
public readonly publishCloudwatchMetricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#publish_cloudwatch_metrics_enabled AthenaWorkgroup#publish_cloudwatch_metrics_enabled}.

---

##### `requesterPaysEnabled`<sup>Optional</sup> <a name="requesterPaysEnabled" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.requesterPaysEnabled"></a>

```typescript
public readonly requesterPaysEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#requester_pays_enabled AthenaWorkgroup#requester_pays_enabled}.

---

##### `resultConfiguration`<sup>Optional</sup> <a name="resultConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.resultConfiguration"></a>

```typescript
public readonly resultConfiguration: AthenaWorkgroupConfigurationResultConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration">AthenaWorkgroupConfigurationResultConfiguration</a>

result_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#result_configuration AthenaWorkgroup#result_configuration}

---

### AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration <a name="AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration.Initializer"></a>

```typescript
import { athenaWorkgroup } from '@cdktn/provider-aws'

const athenaWorkgroupConfigurationCustomerContentEncryptionConfiguration: athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration.property.kmsKey">kmsKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#kms_key AthenaWorkgroup#kms_key}. |

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#kms_key AthenaWorkgroup#kms_key}.

---

### AthenaWorkgroupConfigurationEngineVersion <a name="AthenaWorkgroupConfigurationEngineVersion" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion.Initializer"></a>

```typescript
import { athenaWorkgroup } from '@cdktn/provider-aws'

const athenaWorkgroupConfigurationEngineVersion: athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion.property.selectedEngineVersion">selectedEngineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#selected_engine_version AthenaWorkgroup#selected_engine_version}. |

---

##### `selectedEngineVersion`<sup>Optional</sup> <a name="selectedEngineVersion" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion.property.selectedEngineVersion"></a>

```typescript
public readonly selectedEngineVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#selected_engine_version AthenaWorkgroup#selected_engine_version}.

---

### AthenaWorkgroupConfigurationIdentityCenterConfiguration <a name="AthenaWorkgroupConfigurationIdentityCenterConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfiguration.Initializer"></a>

```typescript
import { athenaWorkgroup } from '@cdktn/provider-aws'

const athenaWorkgroupConfigurationIdentityCenterConfiguration: athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfiguration.property.enableIdentityCenter">enableIdentityCenter</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#enable_identity_center AthenaWorkgroup#enable_identity_center}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfiguration.property.identityCenterInstanceArn">identityCenterInstanceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#identity_center_instance_arn AthenaWorkgroup#identity_center_instance_arn}. |

---

##### `enableIdentityCenter`<sup>Optional</sup> <a name="enableIdentityCenter" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfiguration.property.enableIdentityCenter"></a>

```typescript
public readonly enableIdentityCenter: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#enable_identity_center AthenaWorkgroup#enable_identity_center}.

---

##### `identityCenterInstanceArn`<sup>Optional</sup> <a name="identityCenterInstanceArn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfiguration.property.identityCenterInstanceArn"></a>

```typescript
public readonly identityCenterInstanceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#identity_center_instance_arn AthenaWorkgroup#identity_center_instance_arn}.

---

### AthenaWorkgroupConfigurationManagedQueryResultsConfiguration <a name="AthenaWorkgroupConfigurationManagedQueryResultsConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfiguration.Initializer"></a>

```typescript
import { athenaWorkgroup } from '@cdktn/provider-aws'

const athenaWorkgroupConfigurationManagedQueryResultsConfiguration: athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfiguration.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#enabled AthenaWorkgroup#enabled}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfiguration.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a></code> | encryption_configuration block. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#enabled AthenaWorkgroup#enabled}.

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfiguration.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#encryption_configuration AthenaWorkgroup#encryption_configuration}

---

### AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration <a name="AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration.Initializer"></a>

```typescript
import { athenaWorkgroup } from '@cdktn/provider-aws'

const athenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration: athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration.property.kmsKey">kmsKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#kms_key AthenaWorkgroup#kms_key}. |

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#kms_key AthenaWorkgroup#kms_key}.

---

### AthenaWorkgroupConfigurationMonitoringConfiguration <a name="AthenaWorkgroupConfigurationMonitoringConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfiguration.Initializer"></a>

```typescript
import { athenaWorkgroup } from '@cdktn/provider-aws'

const athenaWorkgroupConfigurationMonitoringConfiguration: athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfiguration.property.cloudWatchLoggingConfiguration">cloudWatchLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration</a></code> | cloud_watch_logging_configuration block. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfiguration.property.managedLoggingConfiguration">managedLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a></code> | managed_logging_configuration block. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfiguration.property.s3LoggingConfiguration">s3LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a></code> | s3_logging_configuration block. |

---

##### `cloudWatchLoggingConfiguration`<sup>Optional</sup> <a name="cloudWatchLoggingConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfiguration.property.cloudWatchLoggingConfiguration"></a>

```typescript
public readonly cloudWatchLoggingConfiguration: AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration</a>

cloud_watch_logging_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#cloud_watch_logging_configuration AthenaWorkgroup#cloud_watch_logging_configuration}

---

##### `managedLoggingConfiguration`<sup>Optional</sup> <a name="managedLoggingConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfiguration.property.managedLoggingConfiguration"></a>

```typescript
public readonly managedLoggingConfiguration: AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a>

managed_logging_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#managed_logging_configuration AthenaWorkgroup#managed_logging_configuration}

---

##### `s3LoggingConfiguration`<sup>Optional</sup> <a name="s3LoggingConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfiguration.property.s3LoggingConfiguration"></a>

```typescript
public readonly s3LoggingConfiguration: AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a>

s3_logging_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#s3_logging_configuration AthenaWorkgroup#s3_logging_configuration}

---

### AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration <a name="AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration.Initializer"></a>

```typescript
import { athenaWorkgroup } from '@cdktn/provider-aws'

const athenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration: athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#enabled AthenaWorkgroup#enabled}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration.property.logGroup">logGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#log_group AthenaWorkgroup#log_group}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration.property.logStreamNamePrefix">logStreamNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#log_stream_name_prefix AthenaWorkgroup#log_stream_name_prefix}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration.property.logType">logType</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType</a>[]</code> | log_type block. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#enabled AthenaWorkgroup#enabled}.

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#log_group AthenaWorkgroup#log_group}.

---

##### `logStreamNamePrefix`<sup>Optional</sup> <a name="logStreamNamePrefix" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration.property.logStreamNamePrefix"></a>

```typescript
public readonly logStreamNamePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#log_stream_name_prefix AthenaWorkgroup#log_stream_name_prefix}.

---

##### `logType`<sup>Optional</sup> <a name="logType" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration.property.logType"></a>

```typescript
public readonly logType: IResolvable | AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType</a>[]

log_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#log_type AthenaWorkgroup#log_type}

---

### AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType <a name="AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType.Initializer"></a>

```typescript
import { athenaWorkgroup } from '@cdktn/provider-aws'

const athenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType: athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#key AthenaWorkgroup#key}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#values AthenaWorkgroup#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#key AthenaWorkgroup#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#values AthenaWorkgroup#values}.

---

### AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration <a name="AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration.Initializer"></a>

```typescript
import { athenaWorkgroup } from '@cdktn/provider-aws'

const athenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration: athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#enabled AthenaWorkgroup#enabled}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration.property.kmsKey">kmsKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#kms_key AthenaWorkgroup#kms_key}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#enabled AthenaWorkgroup#enabled}.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#kms_key AthenaWorkgroup#kms_key}.

---

### AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration <a name="AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration.Initializer"></a>

```typescript
import { athenaWorkgroup } from '@cdktn/provider-aws'

const athenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration: athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#enabled AthenaWorkgroup#enabled}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration.property.kmsKey">kmsKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#kms_key AthenaWorkgroup#kms_key}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration.property.logLocation">logLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#log_location AthenaWorkgroup#log_location}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#enabled AthenaWorkgroup#enabled}.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#kms_key AthenaWorkgroup#kms_key}.

---

##### `logLocation`<sup>Optional</sup> <a name="logLocation" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration.property.logLocation"></a>

```typescript
public readonly logLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#log_location AthenaWorkgroup#log_location}.

---

### AthenaWorkgroupConfigurationResultConfiguration <a name="AthenaWorkgroupConfigurationResultConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.Initializer"></a>

```typescript
import { athenaWorkgroup } from '@cdktn/provider-aws'

const athenaWorkgroupConfigurationResultConfiguration: athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.aclConfiguration">aclConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration">AthenaWorkgroupConfigurationResultConfigurationAclConfiguration</a></code> | acl_configuration block. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration</a></code> | encryption_configuration block. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#expected_bucket_owner AthenaWorkgroup#expected_bucket_owner}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.outputLocation">outputLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#output_location AthenaWorkgroup#output_location}. |

---

##### `aclConfiguration`<sup>Optional</sup> <a name="aclConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.aclConfiguration"></a>

```typescript
public readonly aclConfiguration: AthenaWorkgroupConfigurationResultConfigurationAclConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration">AthenaWorkgroupConfigurationResultConfigurationAclConfiguration</a>

acl_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#acl_configuration AthenaWorkgroup#acl_configuration}

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#encryption_configuration AthenaWorkgroup#encryption_configuration}

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="expectedBucketOwner" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.expectedBucketOwner"></a>

```typescript
public readonly expectedBucketOwner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#expected_bucket_owner AthenaWorkgroup#expected_bucket_owner}.

---

##### `outputLocation`<sup>Optional</sup> <a name="outputLocation" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.outputLocation"></a>

```typescript
public readonly outputLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#output_location AthenaWorkgroup#output_location}.

---

### AthenaWorkgroupConfigurationResultConfigurationAclConfiguration <a name="AthenaWorkgroupConfigurationResultConfigurationAclConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration.Initializer"></a>

```typescript
import { athenaWorkgroup } from '@cdktn/provider-aws'

const athenaWorkgroupConfigurationResultConfigurationAclConfiguration: athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration.property.s3AclOption">s3AclOption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#s3_acl_option AthenaWorkgroup#s3_acl_option}. |

---

##### `s3AclOption`<sup>Required</sup> <a name="s3AclOption" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration.property.s3AclOption"></a>

```typescript
public readonly s3AclOption: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#s3_acl_option AthenaWorkgroup#s3_acl_option}.

---

### AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration <a name="AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration.Initializer"></a>

```typescript
import { athenaWorkgroup } from '@cdktn/provider-aws'

const athenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration: athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration.property.encryptionOption">encryptionOption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#encryption_option AthenaWorkgroup#encryption_option}. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#kms_key_arn AthenaWorkgroup#kms_key_arn}. |

---

##### `encryptionOption`<sup>Optional</sup> <a name="encryptionOption" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration.property.encryptionOption"></a>

```typescript
public readonly encryptionOption: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#encryption_option AthenaWorkgroup#encryption_option}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#kms_key_arn AthenaWorkgroup#kms_key_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference <a name="AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { athenaWorkgroup } from '@cdktn/provider-aws'

new athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration</a>

---


### AthenaWorkgroupConfigurationEngineVersionOutputReference <a name="AthenaWorkgroupConfigurationEngineVersionOutputReference" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.Initializer"></a>

```typescript
import { athenaWorkgroup } from '@cdktn/provider-aws'

new athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.resetSelectedEngineVersion">resetSelectedEngineVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSelectedEngineVersion` <a name="resetSelectedEngineVersion" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.resetSelectedEngineVersion"></a>

```typescript
public resetSelectedEngineVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.effectiveEngineVersion">effectiveEngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.selectedEngineVersionInput">selectedEngineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.selectedEngineVersion">selectedEngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion">AthenaWorkgroupConfigurationEngineVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectiveEngineVersion`<sup>Required</sup> <a name="effectiveEngineVersion" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.effectiveEngineVersion"></a>

```typescript
public readonly effectiveEngineVersion: string;
```

- *Type:* string

---

##### `selectedEngineVersionInput`<sup>Optional</sup> <a name="selectedEngineVersionInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.selectedEngineVersionInput"></a>

```typescript
public readonly selectedEngineVersionInput: string;
```

- *Type:* string

---

##### `selectedEngineVersion`<sup>Required</sup> <a name="selectedEngineVersion" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.selectedEngineVersion"></a>

```typescript
public readonly selectedEngineVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AthenaWorkgroupConfigurationEngineVersion;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion">AthenaWorkgroupConfigurationEngineVersion</a>

---


### AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference <a name="AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.Initializer"></a>

```typescript
import { athenaWorkgroup } from '@cdktn/provider-aws'

new athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.resetEnableIdentityCenter">resetEnableIdentityCenter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.resetIdentityCenterInstanceArn">resetIdentityCenterInstanceArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableIdentityCenter` <a name="resetEnableIdentityCenter" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.resetEnableIdentityCenter"></a>

```typescript
public resetEnableIdentityCenter(): void
```

##### `resetIdentityCenterInstanceArn` <a name="resetIdentityCenterInstanceArn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.resetIdentityCenterInstanceArn"></a>

```typescript
public resetIdentityCenterInstanceArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.property.enableIdentityCenterInput">enableIdentityCenterInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.property.identityCenterInstanceArnInput">identityCenterInstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.property.enableIdentityCenter">enableIdentityCenter</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.property.identityCenterInstanceArn">identityCenterInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfiguration">AthenaWorkgroupConfigurationIdentityCenterConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableIdentityCenterInput`<sup>Optional</sup> <a name="enableIdentityCenterInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.property.enableIdentityCenterInput"></a>

```typescript
public readonly enableIdentityCenterInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `identityCenterInstanceArnInput`<sup>Optional</sup> <a name="identityCenterInstanceArnInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.property.identityCenterInstanceArnInput"></a>

```typescript
public readonly identityCenterInstanceArnInput: string;
```

- *Type:* string

---

##### `enableIdentityCenter`<sup>Required</sup> <a name="enableIdentityCenter" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.property.enableIdentityCenter"></a>

```typescript
public readonly enableIdentityCenter: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `identityCenterInstanceArn`<sup>Required</sup> <a name="identityCenterInstanceArn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.property.identityCenterInstanceArn"></a>

```typescript
public readonly identityCenterInstanceArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AthenaWorkgroupConfigurationIdentityCenterConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfiguration">AthenaWorkgroupConfigurationIdentityCenterConfiguration</a>

---


### AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference <a name="AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { athenaWorkgroup } from '@cdktn/provider-aws'

new athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a>

---


### AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference <a name="AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.Initializer"></a>

```typescript
import { athenaWorkgroup } from '@cdktn/provider-aws'

new athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.putEncryptionConfiguration"></a>

```typescript
public putEncryptionConfiguration(value: AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.resetEncryptionConfiguration"></a>

```typescript
public resetEncryptionConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference">AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfiguration">AthenaWorkgroupConfigurationManagedQueryResultsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference">AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.property.encryptionConfigurationInput"></a>

```typescript
public readonly encryptionConfigurationInput: AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AthenaWorkgroupConfigurationManagedQueryResultsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfiguration">AthenaWorkgroupConfigurationManagedQueryResultsConfiguration</a>

---


### AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList <a name="AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.Initializer"></a>

```typescript
import { athenaWorkgroup } from '@cdktn/provider-aws'

new athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.get"></a>

```typescript
public get(index: number): AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType</a>[]

---


### AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference <a name="AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.Initializer"></a>

```typescript
import { athenaWorkgroup } from '@cdktn/provider-aws'

new athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType</a>

---


### AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference <a name="AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.Initializer"></a>

```typescript
import { athenaWorkgroup } from '@cdktn/provider-aws'

new athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.putLogType">putLogType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.resetLogGroup">resetLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.resetLogStreamNamePrefix">resetLogStreamNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.resetLogType">resetLogType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLogType` <a name="putLogType" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.putLogType"></a>

```typescript
public putLogType(value: IResolvable | AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.putLogType.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType</a>[]

---

##### `resetLogGroup` <a name="resetLogGroup" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.resetLogGroup"></a>

```typescript
public resetLogGroup(): void
```

##### `resetLogStreamNamePrefix` <a name="resetLogStreamNamePrefix" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.resetLogStreamNamePrefix"></a>

```typescript
public resetLogStreamNamePrefix(): void
```

##### `resetLogType` <a name="resetLogType" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.resetLogType"></a>

```typescript
public resetLogType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.logType">logType</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.logGroupInput">logGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.logStreamNamePrefixInput">logStreamNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.logTypeInput">logTypeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.logGroup">logGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.logStreamNamePrefix">logStreamNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.logType"></a>

```typescript
public readonly logType: AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logGroupInput`<sup>Optional</sup> <a name="logGroupInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.logGroupInput"></a>

```typescript
public readonly logGroupInput: string;
```

- *Type:* string

---

##### `logStreamNamePrefixInput`<sup>Optional</sup> <a name="logStreamNamePrefixInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.logStreamNamePrefixInput"></a>

```typescript
public readonly logStreamNamePrefixInput: string;
```

- *Type:* string

---

##### `logTypeInput`<sup>Optional</sup> <a name="logTypeInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.logTypeInput"></a>

```typescript
public readonly logTypeInput: IResolvable | AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType</a>[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

---

##### `logStreamNamePrefix`<sup>Required</sup> <a name="logStreamNamePrefix" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.logStreamNamePrefix"></a>

```typescript
public readonly logStreamNamePrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration</a>

---


### AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference <a name="AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer"></a>

```typescript
import { athenaWorkgroup } from '@cdktn/provider-aws'

new athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a>

---


### AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference <a name="AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.Initializer"></a>

```typescript
import { athenaWorkgroup } from '@cdktn/provider-aws'

new athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.putCloudWatchLoggingConfiguration">putCloudWatchLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.putManagedLoggingConfiguration">putManagedLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.putS3LoggingConfiguration">putS3LoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.resetCloudWatchLoggingConfiguration">resetCloudWatchLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.resetManagedLoggingConfiguration">resetManagedLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.resetS3LoggingConfiguration">resetS3LoggingConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudWatchLoggingConfiguration` <a name="putCloudWatchLoggingConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.putCloudWatchLoggingConfiguration"></a>

```typescript
public putCloudWatchLoggingConfiguration(value: AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.putCloudWatchLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration</a>

---

##### `putManagedLoggingConfiguration` <a name="putManagedLoggingConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.putManagedLoggingConfiguration"></a>

```typescript
public putManagedLoggingConfiguration(value: AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.putManagedLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a>

---

##### `putS3LoggingConfiguration` <a name="putS3LoggingConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.putS3LoggingConfiguration"></a>

```typescript
public putS3LoggingConfiguration(value: AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.putS3LoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a>

---

##### `resetCloudWatchLoggingConfiguration` <a name="resetCloudWatchLoggingConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.resetCloudWatchLoggingConfiguration"></a>

```typescript
public resetCloudWatchLoggingConfiguration(): void
```

##### `resetManagedLoggingConfiguration` <a name="resetManagedLoggingConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.resetManagedLoggingConfiguration"></a>

```typescript
public resetManagedLoggingConfiguration(): void
```

##### `resetS3LoggingConfiguration` <a name="resetS3LoggingConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.resetS3LoggingConfiguration"></a>

```typescript
public resetS3LoggingConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.property.cloudWatchLoggingConfiguration">cloudWatchLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.property.managedLoggingConfiguration">managedLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference">AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.property.s3LoggingConfiguration">s3LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference">AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.property.cloudWatchLoggingConfigurationInput">cloudWatchLoggingConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.property.managedLoggingConfigurationInput">managedLoggingConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.property.s3LoggingConfigurationInput">s3LoggingConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfiguration">AthenaWorkgroupConfigurationMonitoringConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudWatchLoggingConfiguration`<sup>Required</sup> <a name="cloudWatchLoggingConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.property.cloudWatchLoggingConfiguration"></a>

```typescript
public readonly cloudWatchLoggingConfiguration: AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference</a>

---

##### `managedLoggingConfiguration`<sup>Required</sup> <a name="managedLoggingConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.property.managedLoggingConfiguration"></a>

```typescript
public readonly managedLoggingConfiguration: AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference">AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference</a>

---

##### `s3LoggingConfiguration`<sup>Required</sup> <a name="s3LoggingConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.property.s3LoggingConfiguration"></a>

```typescript
public readonly s3LoggingConfiguration: AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference">AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference</a>

---

##### `cloudWatchLoggingConfigurationInput`<sup>Optional</sup> <a name="cloudWatchLoggingConfigurationInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.property.cloudWatchLoggingConfigurationInput"></a>

```typescript
public readonly cloudWatchLoggingConfigurationInput: AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration</a>

---

##### `managedLoggingConfigurationInput`<sup>Optional</sup> <a name="managedLoggingConfigurationInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.property.managedLoggingConfigurationInput"></a>

```typescript
public readonly managedLoggingConfigurationInput: AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a>

---

##### `s3LoggingConfigurationInput`<sup>Optional</sup> <a name="s3LoggingConfigurationInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.property.s3LoggingConfigurationInput"></a>

```typescript
public readonly s3LoggingConfigurationInput: AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AthenaWorkgroupConfigurationMonitoringConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfiguration">AthenaWorkgroupConfigurationMonitoringConfiguration</a>

---


### AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference <a name="AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer"></a>

```typescript
import { athenaWorkgroup } from '@cdktn/provider-aws'

new athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resetLogLocation">resetLogLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```

##### `resetLogLocation` <a name="resetLogLocation" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resetLogLocation"></a>

```typescript
public resetLogLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocationInput">logLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocation">logLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `logLocationInput`<sup>Optional</sup> <a name="logLocationInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocationInput"></a>

```typescript
public readonly logLocationInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `logLocation`<sup>Required</sup> <a name="logLocation" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocation"></a>

```typescript
public readonly logLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a>

---


### AthenaWorkgroupConfigurationOutputReference <a name="AthenaWorkgroupConfigurationOutputReference" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.Initializer"></a>

```typescript
import { athenaWorkgroup } from '@cdktn/provider-aws'

new athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putCustomerContentEncryptionConfiguration">putCustomerContentEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putEngineVersion">putEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putIdentityCenterConfiguration">putIdentityCenterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putManagedQueryResultsConfiguration">putManagedQueryResultsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putMonitoringConfiguration">putMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putResultConfiguration">putResultConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetBytesScannedCutoffPerQuery">resetBytesScannedCutoffPerQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetCustomerContentEncryptionConfiguration">resetCustomerContentEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetEnableMinimumEncryptionConfiguration">resetEnableMinimumEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetEnforceWorkgroupConfiguration">resetEnforceWorkgroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetExecutionRole">resetExecutionRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetIdentityCenterConfiguration">resetIdentityCenterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetManagedQueryResultsConfiguration">resetManagedQueryResultsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetMonitoringConfiguration">resetMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetPublishCloudwatchMetricsEnabled">resetPublishCloudwatchMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetRequesterPaysEnabled">resetRequesterPaysEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetResultConfiguration">resetResultConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomerContentEncryptionConfiguration` <a name="putCustomerContentEncryptionConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putCustomerContentEncryptionConfiguration"></a>

```typescript
public putCustomerContentEncryptionConfiguration(value: AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putCustomerContentEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration</a>

---

##### `putEngineVersion` <a name="putEngineVersion" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putEngineVersion"></a>

```typescript
public putEngineVersion(value: AthenaWorkgroupConfigurationEngineVersion): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putEngineVersion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion">AthenaWorkgroupConfigurationEngineVersion</a>

---

##### `putIdentityCenterConfiguration` <a name="putIdentityCenterConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putIdentityCenterConfiguration"></a>

```typescript
public putIdentityCenterConfiguration(value: AthenaWorkgroupConfigurationIdentityCenterConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putIdentityCenterConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfiguration">AthenaWorkgroupConfigurationIdentityCenterConfiguration</a>

---

##### `putManagedQueryResultsConfiguration` <a name="putManagedQueryResultsConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putManagedQueryResultsConfiguration"></a>

```typescript
public putManagedQueryResultsConfiguration(value: AthenaWorkgroupConfigurationManagedQueryResultsConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putManagedQueryResultsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfiguration">AthenaWorkgroupConfigurationManagedQueryResultsConfiguration</a>

---

##### `putMonitoringConfiguration` <a name="putMonitoringConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putMonitoringConfiguration"></a>

```typescript
public putMonitoringConfiguration(value: AthenaWorkgroupConfigurationMonitoringConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putMonitoringConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfiguration">AthenaWorkgroupConfigurationMonitoringConfiguration</a>

---

##### `putResultConfiguration` <a name="putResultConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putResultConfiguration"></a>

```typescript
public putResultConfiguration(value: AthenaWorkgroupConfigurationResultConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putResultConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration">AthenaWorkgroupConfigurationResultConfiguration</a>

---

##### `resetBytesScannedCutoffPerQuery` <a name="resetBytesScannedCutoffPerQuery" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetBytesScannedCutoffPerQuery"></a>

```typescript
public resetBytesScannedCutoffPerQuery(): void
```

##### `resetCustomerContentEncryptionConfiguration` <a name="resetCustomerContentEncryptionConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetCustomerContentEncryptionConfiguration"></a>

```typescript
public resetCustomerContentEncryptionConfiguration(): void
```

##### `resetEnableMinimumEncryptionConfiguration` <a name="resetEnableMinimumEncryptionConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetEnableMinimumEncryptionConfiguration"></a>

```typescript
public resetEnableMinimumEncryptionConfiguration(): void
```

##### `resetEnforceWorkgroupConfiguration` <a name="resetEnforceWorkgroupConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetEnforceWorkgroupConfiguration"></a>

```typescript
public resetEnforceWorkgroupConfiguration(): void
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetEngineVersion"></a>

```typescript
public resetEngineVersion(): void
```

##### `resetExecutionRole` <a name="resetExecutionRole" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetExecutionRole"></a>

```typescript
public resetExecutionRole(): void
```

##### `resetIdentityCenterConfiguration` <a name="resetIdentityCenterConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetIdentityCenterConfiguration"></a>

```typescript
public resetIdentityCenterConfiguration(): void
```

##### `resetManagedQueryResultsConfiguration` <a name="resetManagedQueryResultsConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetManagedQueryResultsConfiguration"></a>

```typescript
public resetManagedQueryResultsConfiguration(): void
```

##### `resetMonitoringConfiguration` <a name="resetMonitoringConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetMonitoringConfiguration"></a>

```typescript
public resetMonitoringConfiguration(): void
```

##### `resetPublishCloudwatchMetricsEnabled` <a name="resetPublishCloudwatchMetricsEnabled" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetPublishCloudwatchMetricsEnabled"></a>

```typescript
public resetPublishCloudwatchMetricsEnabled(): void
```

##### `resetRequesterPaysEnabled` <a name="resetRequesterPaysEnabled" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetRequesterPaysEnabled"></a>

```typescript
public resetRequesterPaysEnabled(): void
```

##### `resetResultConfiguration` <a name="resetResultConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetResultConfiguration"></a>

```typescript
public resetResultConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.customerContentEncryptionConfiguration">customerContentEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference">AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.engineVersion">engineVersion</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference">AthenaWorkgroupConfigurationEngineVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.identityCenterConfiguration">identityCenterConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference">AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.managedQueryResultsConfiguration">managedQueryResultsConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference">AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.monitoringConfiguration">monitoringConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference">AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.resultConfiguration">resultConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference">AthenaWorkgroupConfigurationResultConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.bytesScannedCutoffPerQueryInput">bytesScannedCutoffPerQueryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.customerContentEncryptionConfigurationInput">customerContentEncryptionConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.enableMinimumEncryptionConfigurationInput">enableMinimumEncryptionConfigurationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.enforceWorkgroupConfigurationInput">enforceWorkgroupConfigurationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.engineVersionInput">engineVersionInput</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion">AthenaWorkgroupConfigurationEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.executionRoleInput">executionRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.identityCenterConfigurationInput">identityCenterConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfiguration">AthenaWorkgroupConfigurationIdentityCenterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.managedQueryResultsConfigurationInput">managedQueryResultsConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfiguration">AthenaWorkgroupConfigurationManagedQueryResultsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.monitoringConfigurationInput">monitoringConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfiguration">AthenaWorkgroupConfigurationMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabledInput">publishCloudwatchMetricsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.requesterPaysEnabledInput">requesterPaysEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.resultConfigurationInput">resultConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration">AthenaWorkgroupConfigurationResultConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.bytesScannedCutoffPerQuery">bytesScannedCutoffPerQuery</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.enableMinimumEncryptionConfiguration">enableMinimumEncryptionConfiguration</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.enforceWorkgroupConfiguration">enforceWorkgroupConfiguration</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.executionRole">executionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabled">publishCloudwatchMetricsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.requesterPaysEnabled">requesterPaysEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerContentEncryptionConfiguration`<sup>Required</sup> <a name="customerContentEncryptionConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.customerContentEncryptionConfiguration"></a>

```typescript
public readonly customerContentEncryptionConfiguration: AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference">AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference</a>

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.engineVersion"></a>

```typescript
public readonly engineVersion: AthenaWorkgroupConfigurationEngineVersionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference">AthenaWorkgroupConfigurationEngineVersionOutputReference</a>

---

##### `identityCenterConfiguration`<sup>Required</sup> <a name="identityCenterConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.identityCenterConfiguration"></a>

```typescript
public readonly identityCenterConfiguration: AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference">AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference</a>

---

##### `managedQueryResultsConfiguration`<sup>Required</sup> <a name="managedQueryResultsConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.managedQueryResultsConfiguration"></a>

```typescript
public readonly managedQueryResultsConfiguration: AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference">AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference</a>

---

##### `monitoringConfiguration`<sup>Required</sup> <a name="monitoringConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.monitoringConfiguration"></a>

```typescript
public readonly monitoringConfiguration: AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference">AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference</a>

---

##### `resultConfiguration`<sup>Required</sup> <a name="resultConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.resultConfiguration"></a>

```typescript
public readonly resultConfiguration: AthenaWorkgroupConfigurationResultConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference">AthenaWorkgroupConfigurationResultConfigurationOutputReference</a>

---

##### `bytesScannedCutoffPerQueryInput`<sup>Optional</sup> <a name="bytesScannedCutoffPerQueryInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.bytesScannedCutoffPerQueryInput"></a>

```typescript
public readonly bytesScannedCutoffPerQueryInput: number;
```

- *Type:* number

---

##### `customerContentEncryptionConfigurationInput`<sup>Optional</sup> <a name="customerContentEncryptionConfigurationInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.customerContentEncryptionConfigurationInput"></a>

```typescript
public readonly customerContentEncryptionConfigurationInput: AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration</a>

---

##### `enableMinimumEncryptionConfigurationInput`<sup>Optional</sup> <a name="enableMinimumEncryptionConfigurationInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.enableMinimumEncryptionConfigurationInput"></a>

```typescript
public readonly enableMinimumEncryptionConfigurationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enforceWorkgroupConfigurationInput`<sup>Optional</sup> <a name="enforceWorkgroupConfigurationInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.enforceWorkgroupConfigurationInput"></a>

```typescript
public readonly enforceWorkgroupConfigurationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.engineVersionInput"></a>

```typescript
public readonly engineVersionInput: AthenaWorkgroupConfigurationEngineVersion;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion">AthenaWorkgroupConfigurationEngineVersion</a>

---

##### `executionRoleInput`<sup>Optional</sup> <a name="executionRoleInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.executionRoleInput"></a>

```typescript
public readonly executionRoleInput: string;
```

- *Type:* string

---

##### `identityCenterConfigurationInput`<sup>Optional</sup> <a name="identityCenterConfigurationInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.identityCenterConfigurationInput"></a>

```typescript
public readonly identityCenterConfigurationInput: AthenaWorkgroupConfigurationIdentityCenterConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationIdentityCenterConfiguration">AthenaWorkgroupConfigurationIdentityCenterConfiguration</a>

---

##### `managedQueryResultsConfigurationInput`<sup>Optional</sup> <a name="managedQueryResultsConfigurationInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.managedQueryResultsConfigurationInput"></a>

```typescript
public readonly managedQueryResultsConfigurationInput: AthenaWorkgroupConfigurationManagedQueryResultsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationManagedQueryResultsConfiguration">AthenaWorkgroupConfigurationManagedQueryResultsConfiguration</a>

---

##### `monitoringConfigurationInput`<sup>Optional</sup> <a name="monitoringConfigurationInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.monitoringConfigurationInput"></a>

```typescript
public readonly monitoringConfigurationInput: AthenaWorkgroupConfigurationMonitoringConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationMonitoringConfiguration">AthenaWorkgroupConfigurationMonitoringConfiguration</a>

---

##### `publishCloudwatchMetricsEnabledInput`<sup>Optional</sup> <a name="publishCloudwatchMetricsEnabledInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabledInput"></a>

```typescript
public readonly publishCloudwatchMetricsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requesterPaysEnabledInput`<sup>Optional</sup> <a name="requesterPaysEnabledInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.requesterPaysEnabledInput"></a>

```typescript
public readonly requesterPaysEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resultConfigurationInput`<sup>Optional</sup> <a name="resultConfigurationInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.resultConfigurationInput"></a>

```typescript
public readonly resultConfigurationInput: AthenaWorkgroupConfigurationResultConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration">AthenaWorkgroupConfigurationResultConfiguration</a>

---

##### `bytesScannedCutoffPerQuery`<sup>Required</sup> <a name="bytesScannedCutoffPerQuery" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.bytesScannedCutoffPerQuery"></a>

```typescript
public readonly bytesScannedCutoffPerQuery: number;
```

- *Type:* number

---

##### `enableMinimumEncryptionConfiguration`<sup>Required</sup> <a name="enableMinimumEncryptionConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.enableMinimumEncryptionConfiguration"></a>

```typescript
public readonly enableMinimumEncryptionConfiguration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enforceWorkgroupConfiguration`<sup>Required</sup> <a name="enforceWorkgroupConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.enforceWorkgroupConfiguration"></a>

```typescript
public readonly enforceWorkgroupConfiguration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

---

##### `publishCloudwatchMetricsEnabled`<sup>Required</sup> <a name="publishCloudwatchMetricsEnabled" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabled"></a>

```typescript
public readonly publishCloudwatchMetricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requesterPaysEnabled`<sup>Required</sup> <a name="requesterPaysEnabled" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.requesterPaysEnabled"></a>

```typescript
public readonly requesterPaysEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AthenaWorkgroupConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a>

---


### AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference <a name="AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer"></a>

```typescript
import { athenaWorkgroup } from '@cdktn/provider-aws'

new athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOptionInput">s3AclOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOption">s3AclOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration">AthenaWorkgroupConfigurationResultConfigurationAclConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3AclOptionInput`<sup>Optional</sup> <a name="s3AclOptionInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOptionInput"></a>

```typescript
public readonly s3AclOptionInput: string;
```

- *Type:* string

---

##### `s3AclOption`<sup>Required</sup> <a name="s3AclOption" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOption"></a>

```typescript
public readonly s3AclOption: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AthenaWorkgroupConfigurationResultConfigurationAclConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration">AthenaWorkgroupConfigurationResultConfigurationAclConfiguration</a>

---


### AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference <a name="AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { athenaWorkgroup } from '@cdktn/provider-aws'

new athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resetEncryptionOption">resetEncryptionOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionOption` <a name="resetEncryptionOption" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resetEncryptionOption"></a>

```typescript
public resetEncryptionOption(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOptionInput">encryptionOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOption">encryptionOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionOptionInput`<sup>Optional</sup> <a name="encryptionOptionInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOptionInput"></a>

```typescript
public readonly encryptionOptionInput: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `encryptionOption`<sup>Required</sup> <a name="encryptionOption" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOption"></a>

```typescript
public readonly encryptionOption: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration</a>

---


### AthenaWorkgroupConfigurationResultConfigurationOutputReference <a name="AthenaWorkgroupConfigurationResultConfigurationOutputReference" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.Initializer"></a>

```typescript
import { athenaWorkgroup } from '@cdktn/provider-aws'

new athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.putAclConfiguration">putAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetAclConfiguration">resetAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetExpectedBucketOwner">resetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetOutputLocation">resetOutputLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAclConfiguration` <a name="putAclConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.putAclConfiguration"></a>

```typescript
public putAclConfiguration(value: AthenaWorkgroupConfigurationResultConfigurationAclConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.putAclConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration">AthenaWorkgroupConfigurationResultConfigurationAclConfiguration</a>

---

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.putEncryptionConfiguration"></a>

```typescript
public putEncryptionConfiguration(value: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration</a>

---

##### `resetAclConfiguration` <a name="resetAclConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetAclConfiguration"></a>

```typescript
public resetAclConfiguration(): void
```

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetEncryptionConfiguration"></a>

```typescript
public resetEncryptionConfiguration(): void
```

##### `resetExpectedBucketOwner` <a name="resetExpectedBucketOwner" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetExpectedBucketOwner"></a>

```typescript
public resetExpectedBucketOwner(): void
```

##### `resetOutputLocation` <a name="resetOutputLocation" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetOutputLocation"></a>

```typescript
public resetOutputLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.aclConfiguration">aclConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference">AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.aclConfigurationInput">aclConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration">AthenaWorkgroupConfigurationResultConfigurationAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwnerInput">expectedBucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.outputLocationInput">outputLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.outputLocation">outputLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration">AthenaWorkgroupConfigurationResultConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aclConfiguration`<sup>Required</sup> <a name="aclConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.aclConfiguration"></a>

```typescript
public readonly aclConfiguration: AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference">AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference</a>

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference</a>

---

##### `aclConfigurationInput`<sup>Optional</sup> <a name="aclConfigurationInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.aclConfigurationInput"></a>

```typescript
public readonly aclConfigurationInput: AthenaWorkgroupConfigurationResultConfigurationAclConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration">AthenaWorkgroupConfigurationResultConfigurationAclConfiguration</a>

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.encryptionConfigurationInput"></a>

```typescript
public readonly encryptionConfigurationInput: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration</a>

---

##### `expectedBucketOwnerInput`<sup>Optional</sup> <a name="expectedBucketOwnerInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwnerInput"></a>

```typescript
public readonly expectedBucketOwnerInput: string;
```

- *Type:* string

---

##### `outputLocationInput`<sup>Optional</sup> <a name="outputLocationInput" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.outputLocationInput"></a>

```typescript
public readonly outputLocationInput: string;
```

- *Type:* string

---

##### `expectedBucketOwner`<sup>Required</sup> <a name="expectedBucketOwner" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwner"></a>

```typescript
public readonly expectedBucketOwner: string;
```

- *Type:* string

---

##### `outputLocation`<sup>Required</sup> <a name="outputLocation" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.outputLocation"></a>

```typescript
public readonly outputLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AthenaWorkgroupConfigurationResultConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration">AthenaWorkgroupConfigurationResultConfiguration</a>

---



