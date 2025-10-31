# `transferWebAppCustomization` Submodule <a name="`transferWebAppCustomization` Submodule" id="@cdktf/provider-aws.transferWebAppCustomization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferWebAppCustomization <a name="TransferWebAppCustomization" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/resources/transfer_web_app_customization aws_transfer_web_app_customization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer"></a>

```typescript
import { transferWebAppCustomization } from '@cdktf/provider-aws'

new transferWebAppCustomization.TransferWebAppCustomization(scope: Construct, id: string, config: TransferWebAppCustomizationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig">TransferWebAppCustomizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig">TransferWebAppCustomizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetFaviconFile">resetFaviconFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetLogoFile">resetLogoFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetFaviconFile` <a name="resetFaviconFile" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetFaviconFile"></a>

```typescript
public resetFaviconFile(): void
```

##### `resetLogoFile` <a name="resetLogoFile" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetLogoFile"></a>

```typescript
public resetLogoFile(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.resetTitle"></a>

```typescript
public resetTitle(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TransferWebAppCustomization resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.isConstruct"></a>

```typescript
import { transferWebAppCustomization } from '@cdktf/provider-aws'

transferWebAppCustomization.TransferWebAppCustomization.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.isTerraformElement"></a>

```typescript
import { transferWebAppCustomization } from '@cdktf/provider-aws'

transferWebAppCustomization.TransferWebAppCustomization.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.isTerraformResource"></a>

```typescript
import { transferWebAppCustomization } from '@cdktf/provider-aws'

transferWebAppCustomization.TransferWebAppCustomization.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.generateConfigForImport"></a>

```typescript
import { transferWebAppCustomization } from '@cdktf/provider-aws'

transferWebAppCustomization.TransferWebAppCustomization.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a TransferWebAppCustomization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TransferWebAppCustomization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TransferWebAppCustomization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/resources/transfer_web_app_customization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TransferWebAppCustomization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.faviconFileInput">faviconFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.logoFileInput">logoFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.webAppIdInput">webAppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.faviconFile">faviconFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.logoFile">logoFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.webAppId">webAppId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `faviconFileInput`<sup>Optional</sup> <a name="faviconFileInput" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.faviconFileInput"></a>

```typescript
public readonly faviconFileInput: string;
```

- *Type:* string

---

##### `logoFileInput`<sup>Optional</sup> <a name="logoFileInput" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.logoFileInput"></a>

```typescript
public readonly logoFileInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `webAppIdInput`<sup>Optional</sup> <a name="webAppIdInput" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.webAppIdInput"></a>

```typescript
public readonly webAppIdInput: string;
```

- *Type:* string

---

##### `faviconFile`<sup>Required</sup> <a name="faviconFile" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.faviconFile"></a>

```typescript
public readonly faviconFile: string;
```

- *Type:* string

---

##### `logoFile`<sup>Required</sup> <a name="logoFile" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.logoFile"></a>

```typescript
public readonly logoFile: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `webAppId`<sup>Required</sup> <a name="webAppId" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.webAppId"></a>

```typescript
public readonly webAppId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomization.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TransferWebAppCustomizationConfig <a name="TransferWebAppCustomizationConfig" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.Initializer"></a>

```typescript
import { transferWebAppCustomization } from '@cdktf/provider-aws'

const transferWebAppCustomizationConfig: transferWebAppCustomization.TransferWebAppCustomizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.webAppId">webAppId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/resources/transfer_web_app_customization#web_app_id TransferWebAppCustomization#web_app_id}. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.faviconFile">faviconFile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/resources/transfer_web_app_customization#favicon_file TransferWebAppCustomization#favicon_file}. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.logoFile">logoFile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/resources/transfer_web_app_customization#logo_file TransferWebAppCustomization#logo_file}. |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/resources/transfer_web_app_customization#title TransferWebAppCustomization#title}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `webAppId`<sup>Required</sup> <a name="webAppId" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.webAppId"></a>

```typescript
public readonly webAppId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/resources/transfer_web_app_customization#web_app_id TransferWebAppCustomization#web_app_id}.

---

##### `faviconFile`<sup>Optional</sup> <a name="faviconFile" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.faviconFile"></a>

```typescript
public readonly faviconFile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/resources/transfer_web_app_customization#favicon_file TransferWebAppCustomization#favicon_file}.

---

##### `logoFile`<sup>Optional</sup> <a name="logoFile" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.logoFile"></a>

```typescript
public readonly logoFile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/resources/transfer_web_app_customization#logo_file TransferWebAppCustomization#logo_file}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/resources/transfer_web_app_customization#region TransferWebAppCustomization#region}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-aws.transferWebAppCustomization.TransferWebAppCustomizationConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/resources/transfer_web_app_customization#title TransferWebAppCustomization#title}.

---



