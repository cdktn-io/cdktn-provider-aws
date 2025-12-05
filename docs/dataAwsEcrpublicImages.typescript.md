# `dataAwsEcrpublicImages` Submodule <a name="`dataAwsEcrpublicImages` Submodule" id="@cdktf/provider-aws.dataAwsEcrpublicImages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEcrpublicImages <a name="DataAwsEcrpublicImages" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/data-sources/ecrpublic_images aws_ecrpublic_images}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer"></a>

```typescript
import { dataAwsEcrpublicImages } from '@cdktf/provider-aws'

new dataAwsEcrpublicImages.DataAwsEcrpublicImages(scope: Construct, id: string, config: DataAwsEcrpublicImagesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig">DataAwsEcrpublicImagesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig">DataAwsEcrpublicImagesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.putImageIds">putImageIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.resetImageIds">resetImageIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.resetRegistryId">resetRegistryId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putImageIds` <a name="putImageIds" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.putImageIds"></a>

```typescript
public putImageIds(value: IResolvable | DataAwsEcrpublicImagesImageIds[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.putImageIds.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds">DataAwsEcrpublicImagesImageIds</a>[]

---

##### `resetImageIds` <a name="resetImageIds" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.resetImageIds"></a>

```typescript
public resetImageIds(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRegistryId` <a name="resetRegistryId" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.resetRegistryId"></a>

```typescript
public resetRegistryId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsEcrpublicImages resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.isConstruct"></a>

```typescript
import { dataAwsEcrpublicImages } from '@cdktf/provider-aws'

dataAwsEcrpublicImages.DataAwsEcrpublicImages.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.isTerraformElement"></a>

```typescript
import { dataAwsEcrpublicImages } from '@cdktf/provider-aws'

dataAwsEcrpublicImages.DataAwsEcrpublicImages.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.isTerraformDataSource"></a>

```typescript
import { dataAwsEcrpublicImages } from '@cdktf/provider-aws'

dataAwsEcrpublicImages.DataAwsEcrpublicImages.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.generateConfigForImport"></a>

```typescript
import { dataAwsEcrpublicImages } from '@cdktf/provider-aws'

dataAwsEcrpublicImages.DataAwsEcrpublicImages.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsEcrpublicImages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsEcrpublicImages to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsEcrpublicImages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/data-sources/ecrpublic_images#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsEcrpublicImages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.imageIds">imageIds</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList">DataAwsEcrpublicImagesImageIdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.images">images</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList">DataAwsEcrpublicImagesImagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.imageIdsInput">imageIdsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds">DataAwsEcrpublicImagesImageIds</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.registryIdInput">registryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.repositoryNameInput">repositoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.registryId">registryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.repositoryName">repositoryName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `imageIds`<sup>Required</sup> <a name="imageIds" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.imageIds"></a>

```typescript
public readonly imageIds: DataAwsEcrpublicImagesImageIdsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList">DataAwsEcrpublicImagesImageIdsList</a>

---

##### `images`<sup>Required</sup> <a name="images" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.images"></a>

```typescript
public readonly images: DataAwsEcrpublicImagesImagesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList">DataAwsEcrpublicImagesImagesList</a>

---

##### `imageIdsInput`<sup>Optional</sup> <a name="imageIdsInput" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.imageIdsInput"></a>

```typescript
public readonly imageIdsInput: IResolvable | DataAwsEcrpublicImagesImageIds[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds">DataAwsEcrpublicImagesImageIds</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `registryIdInput`<sup>Optional</sup> <a name="registryIdInput" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.registryIdInput"></a>

```typescript
public readonly registryIdInput: string;
```

- *Type:* string

---

##### `repositoryNameInput`<sup>Optional</sup> <a name="repositoryNameInput" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.repositoryNameInput"></a>

```typescript
public readonly repositoryNameInput: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.registryId"></a>

```typescript
public readonly registryId: string;
```

- *Type:* string

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEcrpublicImagesConfig <a name="DataAwsEcrpublicImagesConfig" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.Initializer"></a>

```typescript
import { dataAwsEcrpublicImages } from '@cdktf/provider-aws'

const dataAwsEcrpublicImagesConfig: dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.repositoryName">repositoryName</a></code> | <code>string</code> | Name of the public repository. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.imageIds">imageIds</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds">DataAwsEcrpublicImagesImageIds</a>[]</code> | image_ids block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.registryId">registryId</a></code> | <code>string</code> | AWS account ID associated with the public registry that contains the repository. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

Name of the public repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/data-sources/ecrpublic_images#repository_name DataAwsEcrpublicImages#repository_name}

---

##### `imageIds`<sup>Optional</sup> <a name="imageIds" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.imageIds"></a>

```typescript
public readonly imageIds: IResolvable | DataAwsEcrpublicImagesImageIds[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds">DataAwsEcrpublicImagesImageIds</a>[]

image_ids block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/data-sources/ecrpublic_images#image_ids DataAwsEcrpublicImages#image_ids}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/data-sources/ecrpublic_images#region DataAwsEcrpublicImages#region}

---

##### `registryId`<sup>Optional</sup> <a name="registryId" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.registryId"></a>

```typescript
public readonly registryId: string;
```

- *Type:* string

AWS account ID associated with the public registry that contains the repository.

If not specified, the default public registry is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/data-sources/ecrpublic_images#registry_id DataAwsEcrpublicImages#registry_id}

---

### DataAwsEcrpublicImagesImageIds <a name="DataAwsEcrpublicImagesImageIds" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds.Initializer"></a>

```typescript
import { dataAwsEcrpublicImages } from '@cdktf/provider-aws'

const dataAwsEcrpublicImagesImageIds: dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds.property.imageDigest">imageDigest</a></code> | <code>string</code> | Image digest. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds.property.imageTag">imageTag</a></code> | <code>string</code> | Image tag. |

---

##### `imageDigest`<sup>Optional</sup> <a name="imageDigest" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds.property.imageDigest"></a>

```typescript
public readonly imageDigest: string;
```

- *Type:* string

Image digest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/data-sources/ecrpublic_images#image_digest DataAwsEcrpublicImages#image_digest}

---

##### `imageTag`<sup>Optional</sup> <a name="imageTag" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds.property.imageTag"></a>

```typescript
public readonly imageTag: string;
```

- *Type:* string

Image tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/data-sources/ecrpublic_images#image_tag DataAwsEcrpublicImages#image_tag}

---

### DataAwsEcrpublicImagesImages <a name="DataAwsEcrpublicImagesImages" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImages.Initializer"></a>

```typescript
import { dataAwsEcrpublicImages } from '@cdktf/provider-aws'

const dataAwsEcrpublicImagesImages: dataAwsEcrpublicImages.DataAwsEcrpublicImagesImages = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsEcrpublicImagesImageIdsList <a name="DataAwsEcrpublicImagesImageIdsList" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.Initializer"></a>

```typescript
import { dataAwsEcrpublicImages } from '@cdktf/provider-aws'

new dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.get"></a>

```typescript
public get(index: number): DataAwsEcrpublicImagesImageIdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds">DataAwsEcrpublicImagesImageIds</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEcrpublicImagesImageIds[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds">DataAwsEcrpublicImagesImageIds</a>[]

---


### DataAwsEcrpublicImagesImageIdsOutputReference <a name="DataAwsEcrpublicImagesImageIdsOutputReference" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.Initializer"></a>

```typescript
import { dataAwsEcrpublicImages } from '@cdktf/provider-aws'

new dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.resetImageDigest">resetImageDigest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.resetImageTag">resetImageTag</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImageDigest` <a name="resetImageDigest" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.resetImageDigest"></a>

```typescript
public resetImageDigest(): void
```

##### `resetImageTag` <a name="resetImageTag" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.resetImageTag"></a>

```typescript
public resetImageTag(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.imageDigestInput">imageDigestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.imageTagInput">imageTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.imageDigest">imageDigest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.imageTag">imageTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds">DataAwsEcrpublicImagesImageIds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageDigestInput`<sup>Optional</sup> <a name="imageDigestInput" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.imageDigestInput"></a>

```typescript
public readonly imageDigestInput: string;
```

- *Type:* string

---

##### `imageTagInput`<sup>Optional</sup> <a name="imageTagInput" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.imageTagInput"></a>

```typescript
public readonly imageTagInput: string;
```

- *Type:* string

---

##### `imageDigest`<sup>Required</sup> <a name="imageDigest" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.imageDigest"></a>

```typescript
public readonly imageDigest: string;
```

- *Type:* string

---

##### `imageTag`<sup>Required</sup> <a name="imageTag" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.imageTag"></a>

```typescript
public readonly imageTag: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEcrpublicImagesImageIds;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds">DataAwsEcrpublicImagesImageIds</a>

---


### DataAwsEcrpublicImagesImagesList <a name="DataAwsEcrpublicImagesImagesList" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.Initializer"></a>

```typescript
import { dataAwsEcrpublicImages } from '@cdktf/provider-aws'

new dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.get"></a>

```typescript
public get(index: number): DataAwsEcrpublicImagesImagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsEcrpublicImagesImagesOutputReference <a name="DataAwsEcrpublicImagesImagesOutputReference" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.Initializer"></a>

```typescript
import { dataAwsEcrpublicImages } from '@cdktf/provider-aws'

new dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.artifactMediaType">artifactMediaType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.imageDigest">imageDigest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.imageManifestMediaType">imageManifestMediaType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.imagePushedAt">imagePushedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.imageSizeInBytes">imageSizeInBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.imageTags">imageTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.registryId">registryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.repositoryName">repositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImages">DataAwsEcrpublicImagesImages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `artifactMediaType`<sup>Required</sup> <a name="artifactMediaType" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.artifactMediaType"></a>

```typescript
public readonly artifactMediaType: string;
```

- *Type:* string

---

##### `imageDigest`<sup>Required</sup> <a name="imageDigest" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.imageDigest"></a>

```typescript
public readonly imageDigest: string;
```

- *Type:* string

---

##### `imageManifestMediaType`<sup>Required</sup> <a name="imageManifestMediaType" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.imageManifestMediaType"></a>

```typescript
public readonly imageManifestMediaType: string;
```

- *Type:* string

---

##### `imagePushedAt`<sup>Required</sup> <a name="imagePushedAt" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.imagePushedAt"></a>

```typescript
public readonly imagePushedAt: string;
```

- *Type:* string

---

##### `imageSizeInBytes`<sup>Required</sup> <a name="imageSizeInBytes" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.imageSizeInBytes"></a>

```typescript
public readonly imageSizeInBytes: number;
```

- *Type:* number

---

##### `imageTags`<sup>Required</sup> <a name="imageTags" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.imageTags"></a>

```typescript
public readonly imageTags: string[];
```

- *Type:* string[]

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.registryId"></a>

```typescript
public readonly registryId: string;
```

- *Type:* string

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEcrpublicImagesImages;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImages">DataAwsEcrpublicImagesImages</a>

---



