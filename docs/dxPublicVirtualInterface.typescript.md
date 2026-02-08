# `dxPublicVirtualInterface` Submodule <a name="`dxPublicVirtualInterface` Submodule" id="@cdktn/provider-aws.dxPublicVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DxPublicVirtualInterface <a name="DxPublicVirtualInterface" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_public_virtual_interface aws_dx_public_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer"></a>

```typescript
import { dxPublicVirtualInterface } from '@cdktn/provider-aws'

new dxPublicVirtualInterface.DxPublicVirtualInterface(scope: Construct, id: string, config: DxPublicVirtualInterfaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig">DxPublicVirtualInterfaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig">DxPublicVirtualInterfaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.resetAmazonAddress">resetAmazonAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.resetBgpAuthKey">resetBgpAuthKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.resetCustomerAddress">resetCustomerAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.putTimeouts"></a>

```typescript
public putTimeouts(value: DxPublicVirtualInterfaceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts">DxPublicVirtualInterfaceTimeouts</a>

---

##### `resetAmazonAddress` <a name="resetAmazonAddress" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.resetAmazonAddress"></a>

```typescript
public resetAmazonAddress(): void
```

##### `resetBgpAuthKey` <a name="resetBgpAuthKey" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.resetBgpAuthKey"></a>

```typescript
public resetBgpAuthKey(): void
```

##### `resetCustomerAddress` <a name="resetCustomerAddress" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.resetCustomerAddress"></a>

```typescript
public resetCustomerAddress(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DxPublicVirtualInterface resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.isConstruct"></a>

```typescript
import { dxPublicVirtualInterface } from '@cdktn/provider-aws'

dxPublicVirtualInterface.DxPublicVirtualInterface.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.isTerraformElement"></a>

```typescript
import { dxPublicVirtualInterface } from '@cdktn/provider-aws'

dxPublicVirtualInterface.DxPublicVirtualInterface.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.isTerraformResource"></a>

```typescript
import { dxPublicVirtualInterface } from '@cdktn/provider-aws'

dxPublicVirtualInterface.DxPublicVirtualInterface.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.generateConfigForImport"></a>

```typescript
import { dxPublicVirtualInterface } from '@cdktn/provider-aws'

dxPublicVirtualInterface.DxPublicVirtualInterface.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DxPublicVirtualInterface resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DxPublicVirtualInterface to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DxPublicVirtualInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_public_virtual_interface#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DxPublicVirtualInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.amazonSideAsn">amazonSideAsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.awsDevice">awsDevice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference">DxPublicVirtualInterfaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.addressFamilyInput">addressFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.amazonAddressInput">amazonAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.bgpAsnInput">bgpAsnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.bgpAuthKeyInput">bgpAuthKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.connectionIdInput">connectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.customerAddressInput">customerAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.routeFilterPrefixesInput">routeFilterPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts">DxPublicVirtualInterfaceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.vlanInput">vlanInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.addressFamily">addressFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.amazonAddress">amazonAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.bgpAsn">bgpAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.bgpAuthKey">bgpAuthKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.customerAddress">customerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.routeFilterPrefixes">routeFilterPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.vlan">vlan</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `amazonSideAsn`<sup>Required</sup> <a name="amazonSideAsn" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.amazonSideAsn"></a>

```typescript
public readonly amazonSideAsn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `awsDevice`<sup>Required</sup> <a name="awsDevice" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.awsDevice"></a>

```typescript
public readonly awsDevice: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.timeouts"></a>

```typescript
public readonly timeouts: DxPublicVirtualInterfaceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference">DxPublicVirtualInterfaceTimeoutsOutputReference</a>

---

##### `addressFamilyInput`<sup>Optional</sup> <a name="addressFamilyInput" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.addressFamilyInput"></a>

```typescript
public readonly addressFamilyInput: string;
```

- *Type:* string

---

##### `amazonAddressInput`<sup>Optional</sup> <a name="amazonAddressInput" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.amazonAddressInput"></a>

```typescript
public readonly amazonAddressInput: string;
```

- *Type:* string

---

##### `bgpAsnInput`<sup>Optional</sup> <a name="bgpAsnInput" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.bgpAsnInput"></a>

```typescript
public readonly bgpAsnInput: number;
```

- *Type:* number

---

##### `bgpAuthKeyInput`<sup>Optional</sup> <a name="bgpAuthKeyInput" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.bgpAuthKeyInput"></a>

```typescript
public readonly bgpAuthKeyInput: string;
```

- *Type:* string

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.connectionIdInput"></a>

```typescript
public readonly connectionIdInput: string;
```

- *Type:* string

---

##### `customerAddressInput`<sup>Optional</sup> <a name="customerAddressInput" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.customerAddressInput"></a>

```typescript
public readonly customerAddressInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `routeFilterPrefixesInput`<sup>Optional</sup> <a name="routeFilterPrefixesInput" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.routeFilterPrefixesInput"></a>

```typescript
public readonly routeFilterPrefixesInput: string[];
```

- *Type:* string[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DxPublicVirtualInterfaceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts">DxPublicVirtualInterfaceTimeouts</a>

---

##### `vlanInput`<sup>Optional</sup> <a name="vlanInput" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.vlanInput"></a>

```typescript
public readonly vlanInput: number;
```

- *Type:* number

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.addressFamily"></a>

```typescript
public readonly addressFamily: string;
```

- *Type:* string

---

##### `amazonAddress`<sup>Required</sup> <a name="amazonAddress" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.amazonAddress"></a>

```typescript
public readonly amazonAddress: string;
```

- *Type:* string

---

##### `bgpAsn`<sup>Required</sup> <a name="bgpAsn" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.bgpAsn"></a>

```typescript
public readonly bgpAsn: number;
```

- *Type:* number

---

##### `bgpAuthKey`<sup>Required</sup> <a name="bgpAuthKey" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.bgpAuthKey"></a>

```typescript
public readonly bgpAuthKey: string;
```

- *Type:* string

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `customerAddress`<sup>Required</sup> <a name="customerAddress" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.customerAddress"></a>

```typescript
public readonly customerAddress: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `routeFilterPrefixes`<sup>Required</sup> <a name="routeFilterPrefixes" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.routeFilterPrefixes"></a>

```typescript
public readonly routeFilterPrefixes: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.vlan"></a>

```typescript
public readonly vlan: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterface.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DxPublicVirtualInterfaceConfig <a name="DxPublicVirtualInterfaceConfig" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.Initializer"></a>

```typescript
import { dxPublicVirtualInterface } from '@cdktn/provider-aws'

const dxPublicVirtualInterfaceConfig: dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.addressFamily">addressFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_public_virtual_interface#address_family DxPublicVirtualInterface#address_family}. |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.bgpAsn">bgpAsn</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_public_virtual_interface#bgp_asn DxPublicVirtualInterface#bgp_asn}. |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.connectionId">connectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_public_virtual_interface#connection_id DxPublicVirtualInterface#connection_id}. |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_public_virtual_interface#name DxPublicVirtualInterface#name}. |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.routeFilterPrefixes">routeFilterPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_public_virtual_interface#route_filter_prefixes DxPublicVirtualInterface#route_filter_prefixes}. |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.vlan">vlan</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_public_virtual_interface#vlan DxPublicVirtualInterface#vlan}. |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.amazonAddress">amazonAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_public_virtual_interface#amazon_address DxPublicVirtualInterface#amazon_address}. |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.bgpAuthKey">bgpAuthKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_public_virtual_interface#bgp_auth_key DxPublicVirtualInterface#bgp_auth_key}. |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.customerAddress">customerAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_public_virtual_interface#customer_address DxPublicVirtualInterface#customer_address}. |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_public_virtual_interface#id DxPublicVirtualInterface#id}. |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_public_virtual_interface#tags DxPublicVirtualInterface#tags}. |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_public_virtual_interface#tags_all DxPublicVirtualInterface#tags_all}. |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts">DxPublicVirtualInterfaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.addressFamily"></a>

```typescript
public readonly addressFamily: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_public_virtual_interface#address_family DxPublicVirtualInterface#address_family}.

---

##### `bgpAsn`<sup>Required</sup> <a name="bgpAsn" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.bgpAsn"></a>

```typescript
public readonly bgpAsn: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_public_virtual_interface#bgp_asn DxPublicVirtualInterface#bgp_asn}.

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_public_virtual_interface#connection_id DxPublicVirtualInterface#connection_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_public_virtual_interface#name DxPublicVirtualInterface#name}.

---

##### `routeFilterPrefixes`<sup>Required</sup> <a name="routeFilterPrefixes" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.routeFilterPrefixes"></a>

```typescript
public readonly routeFilterPrefixes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_public_virtual_interface#route_filter_prefixes DxPublicVirtualInterface#route_filter_prefixes}.

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.vlan"></a>

```typescript
public readonly vlan: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_public_virtual_interface#vlan DxPublicVirtualInterface#vlan}.

---

##### `amazonAddress`<sup>Optional</sup> <a name="amazonAddress" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.amazonAddress"></a>

```typescript
public readonly amazonAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_public_virtual_interface#amazon_address DxPublicVirtualInterface#amazon_address}.

---

##### `bgpAuthKey`<sup>Optional</sup> <a name="bgpAuthKey" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.bgpAuthKey"></a>

```typescript
public readonly bgpAuthKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_public_virtual_interface#bgp_auth_key DxPublicVirtualInterface#bgp_auth_key}.

---

##### `customerAddress`<sup>Optional</sup> <a name="customerAddress" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.customerAddress"></a>

```typescript
public readonly customerAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_public_virtual_interface#customer_address DxPublicVirtualInterface#customer_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_public_virtual_interface#id DxPublicVirtualInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_public_virtual_interface#region DxPublicVirtualInterface#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_public_virtual_interface#tags DxPublicVirtualInterface#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_public_virtual_interface#tags_all DxPublicVirtualInterface#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DxPublicVirtualInterfaceTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts">DxPublicVirtualInterfaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_public_virtual_interface#timeouts DxPublicVirtualInterface#timeouts}

---

### DxPublicVirtualInterfaceTimeouts <a name="DxPublicVirtualInterfaceTimeouts" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts.Initializer"></a>

```typescript
import { dxPublicVirtualInterface } from '@cdktn/provider-aws'

const dxPublicVirtualInterfaceTimeouts: dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_public_virtual_interface#create DxPublicVirtualInterface#create}. |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_public_virtual_interface#delete DxPublicVirtualInterface#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_public_virtual_interface#create DxPublicVirtualInterface#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_public_virtual_interface#delete DxPublicVirtualInterface#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DxPublicVirtualInterfaceTimeoutsOutputReference <a name="DxPublicVirtualInterfaceTimeoutsOutputReference" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.Initializer"></a>

```typescript
import { dxPublicVirtualInterface } from '@cdktn/provider-aws'

new dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts">DxPublicVirtualInterfaceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DxPublicVirtualInterfaceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts">DxPublicVirtualInterfaceTimeouts</a>

---



