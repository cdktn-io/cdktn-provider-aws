# `lakeformationIdentityCenterConfiguration` Submodule <a name="`lakeformationIdentityCenterConfiguration` Submodule" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationIdentityCenterConfiguration <a name="LakeformationIdentityCenterConfiguration" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/lakeformation_identity_center_configuration aws_lakeformation_identity_center_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.Initializer"></a>

```typescript
import { lakeformationIdentityCenterConfiguration } from '@cdktf/provider-aws'

new lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration(scope: Construct, id: string, config: LakeformationIdentityCenterConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig">LakeformationIdentityCenterConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig">LakeformationIdentityCenterConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LakeformationIdentityCenterConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.isConstruct"></a>

```typescript
import { lakeformationIdentityCenterConfiguration } from '@cdktf/provider-aws'

lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.isTerraformElement"></a>

```typescript
import { lakeformationIdentityCenterConfiguration } from '@cdktf/provider-aws'

lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.isTerraformResource"></a>

```typescript
import { lakeformationIdentityCenterConfiguration } from '@cdktf/provider-aws'

lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.generateConfigForImport"></a>

```typescript
import { lakeformationIdentityCenterConfiguration } from '@cdktf/provider-aws'

lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LakeformationIdentityCenterConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LakeformationIdentityCenterConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LakeformationIdentityCenterConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/lakeformation_identity_center_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LakeformationIdentityCenterConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.applicationArn">applicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.resourceShare">resourceShare</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.instanceArnInput">instanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.applicationArn"></a>

```typescript
public readonly applicationArn: string;
```

- *Type:* string

---

##### `resourceShare`<sup>Required</sup> <a name="resourceShare" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.resourceShare"></a>

```typescript
public readonly resourceShare: string;
```

- *Type:* string

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.instanceArnInput"></a>

```typescript
public readonly instanceArnInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationIdentityCenterConfigurationConfig <a name="LakeformationIdentityCenterConfigurationConfig" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.Initializer"></a>

```typescript
import { lakeformationIdentityCenterConfiguration } from '@cdktf/provider-aws'

const lakeformationIdentityCenterConfigurationConfig: lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.instanceArn">instanceArn</a></code> | <code>string</code> | The ARN of the Identity Center instance. |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.catalogId">catalogId</a></code> | <code>string</code> | The ID of the Data Catalog. |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

The ARN of the Identity Center instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/lakeformation_identity_center_configuration#instance_arn LakeformationIdentityCenterConfiguration#instance_arn}

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

The ID of the Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/lakeformation_identity_center_configuration#catalog_id LakeformationIdentityCenterConfiguration#catalog_id}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/lakeformation_identity_center_configuration#region LakeformationIdentityCenterConfiguration#region}

---



