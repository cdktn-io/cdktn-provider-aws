# `dataAwsEcrpublicImages` Submodule <a name="`dataAwsEcrpublicImages` Submodule" id="@cdktf/provider-aws.dataAwsEcrpublicImages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEcrpublicImages <a name="DataAwsEcrpublicImages" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/data-sources/ecrpublic_images aws_ecrpublic_images}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcrpublicImages(Construct Scope, string Id, DataAwsEcrpublicImagesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig">DataAwsEcrpublicImagesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig">DataAwsEcrpublicImagesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.putImageIds">PutImageIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.resetImageIds">ResetImageIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.resetRegistryId">ResetRegistryId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutImageIds` <a name="PutImageIds" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.putImageIds"></a>

```csharp
private void PutImageIds(IResolvable|DataAwsEcrpublicImagesImageIds[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.putImageIds.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds">DataAwsEcrpublicImagesImageIds</a>[]

---

##### `ResetImageIds` <a name="ResetImageIds" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.resetImageIds"></a>

```csharp
private void ResetImageIds()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRegistryId` <a name="ResetRegistryId" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.resetRegistryId"></a>

```csharp
private void ResetRegistryId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsEcrpublicImages resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEcrpublicImages.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEcrpublicImages.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEcrpublicImages.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEcrpublicImages.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsEcrpublicImages resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsEcrpublicImages to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsEcrpublicImages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/data-sources/ecrpublic_images#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsEcrpublicImages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.imageIds">ImageIds</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList">DataAwsEcrpublicImagesImageIdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.images">Images</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList">DataAwsEcrpublicImagesImagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.imageIdsInput">ImageIdsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds">DataAwsEcrpublicImagesImageIds</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.registryIdInput">RegistryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.repositoryNameInput">RepositoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.registryId">RegistryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.repositoryName">RepositoryName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ImageIds`<sup>Required</sup> <a name="ImageIds" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.imageIds"></a>

```csharp
public DataAwsEcrpublicImagesImageIdsList ImageIds { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList">DataAwsEcrpublicImagesImageIdsList</a>

---

##### `Images`<sup>Required</sup> <a name="Images" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.images"></a>

```csharp
public DataAwsEcrpublicImagesImagesList Images { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList">DataAwsEcrpublicImagesImagesList</a>

---

##### `ImageIdsInput`<sup>Optional</sup> <a name="ImageIdsInput" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.imageIdsInput"></a>

```csharp
public IResolvable|DataAwsEcrpublicImagesImageIds[] ImageIdsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds">DataAwsEcrpublicImagesImageIds</a>[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RegistryIdInput`<sup>Optional</sup> <a name="RegistryIdInput" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.registryIdInput"></a>

```csharp
public string RegistryIdInput { get; }
```

- *Type:* string

---

##### `RepositoryNameInput`<sup>Optional</sup> <a name="RepositoryNameInput" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.repositoryNameInput"></a>

```csharp
public string RepositoryNameInput { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RegistryId`<sup>Required</sup> <a name="RegistryId" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.registryId"></a>

```csharp
public string RegistryId { get; }
```

- *Type:* string

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.repositoryName"></a>

```csharp
public string RepositoryName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImages.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEcrpublicImagesConfig <a name="DataAwsEcrpublicImagesConfig" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcrpublicImagesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string RepositoryName,
    IResolvable|DataAwsEcrpublicImagesImageIds[] ImageIds = null,
    string Region = null,
    string RegistryId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.repositoryName">RepositoryName</a></code> | <code>string</code> | Name of the public repository. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.imageIds">ImageIds</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds">DataAwsEcrpublicImagesImageIds</a>[]</code> | image_ids block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.registryId">RegistryId</a></code> | <code>string</code> | AWS account ID associated with the public registry that contains the repository. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.repositoryName"></a>

```csharp
public string RepositoryName { get; set; }
```

- *Type:* string

Name of the public repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/data-sources/ecrpublic_images#repository_name DataAwsEcrpublicImages#repository_name}

---

##### `ImageIds`<sup>Optional</sup> <a name="ImageIds" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.imageIds"></a>

```csharp
public IResolvable|DataAwsEcrpublicImagesImageIds[] ImageIds { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds">DataAwsEcrpublicImagesImageIds</a>[]

image_ids block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/data-sources/ecrpublic_images#image_ids DataAwsEcrpublicImages#image_ids}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/data-sources/ecrpublic_images#region DataAwsEcrpublicImages#region}

---

##### `RegistryId`<sup>Optional</sup> <a name="RegistryId" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesConfig.property.registryId"></a>

```csharp
public string RegistryId { get; set; }
```

- *Type:* string

AWS account ID associated with the public registry that contains the repository.

If not specified, the default public registry is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/data-sources/ecrpublic_images#registry_id DataAwsEcrpublicImages#registry_id}

---

### DataAwsEcrpublicImagesImageIds <a name="DataAwsEcrpublicImagesImageIds" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcrpublicImagesImageIds {
    string ImageDigest = null,
    string ImageTag = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds.property.imageDigest">ImageDigest</a></code> | <code>string</code> | Image digest. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds.property.imageTag">ImageTag</a></code> | <code>string</code> | Image tag. |

---

##### `ImageDigest`<sup>Optional</sup> <a name="ImageDigest" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds.property.imageDigest"></a>

```csharp
public string ImageDigest { get; set; }
```

- *Type:* string

Image digest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/data-sources/ecrpublic_images#image_digest DataAwsEcrpublicImages#image_digest}

---

##### `ImageTag`<sup>Optional</sup> <a name="ImageTag" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds.property.imageTag"></a>

```csharp
public string ImageTag { get; set; }
```

- *Type:* string

Image tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/data-sources/ecrpublic_images#image_tag DataAwsEcrpublicImages#image_tag}

---

### DataAwsEcrpublicImagesImages <a name="DataAwsEcrpublicImagesImages" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcrpublicImagesImages {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsEcrpublicImagesImageIdsList <a name="DataAwsEcrpublicImagesImageIdsList" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcrpublicImagesImageIdsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.get"></a>

```csharp
private DataAwsEcrpublicImagesImageIdsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds">DataAwsEcrpublicImagesImageIds</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsList.property.internalValue"></a>

```csharp
public IResolvable|DataAwsEcrpublicImagesImageIds[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds">DataAwsEcrpublicImagesImageIds</a>[]

---


### DataAwsEcrpublicImagesImageIdsOutputReference <a name="DataAwsEcrpublicImagesImageIdsOutputReference" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcrpublicImagesImageIdsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.resetImageDigest">ResetImageDigest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.resetImageTag">ResetImageTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImageDigest` <a name="ResetImageDigest" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.resetImageDigest"></a>

```csharp
private void ResetImageDigest()
```

##### `ResetImageTag` <a name="ResetImageTag" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.resetImageTag"></a>

```csharp
private void ResetImageTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.imageDigestInput">ImageDigestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.imageTagInput">ImageTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.imageDigest">ImageDigest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.imageTag">ImageTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds">DataAwsEcrpublicImagesImageIds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImageDigestInput`<sup>Optional</sup> <a name="ImageDigestInput" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.imageDigestInput"></a>

```csharp
public string ImageDigestInput { get; }
```

- *Type:* string

---

##### `ImageTagInput`<sup>Optional</sup> <a name="ImageTagInput" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.imageTagInput"></a>

```csharp
public string ImageTagInput { get; }
```

- *Type:* string

---

##### `ImageDigest`<sup>Required</sup> <a name="ImageDigest" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.imageDigest"></a>

```csharp
public string ImageDigest { get; }
```

- *Type:* string

---

##### `ImageTag`<sup>Required</sup> <a name="ImageTag" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.imageTag"></a>

```csharp
public string ImageTag { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIdsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsEcrpublicImagesImageIds InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImageIds">DataAwsEcrpublicImagesImageIds</a>

---


### DataAwsEcrpublicImagesImagesList <a name="DataAwsEcrpublicImagesImagesList" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcrpublicImagesImagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.get"></a>

```csharp
private DataAwsEcrpublicImagesImagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsEcrpublicImagesImagesOutputReference <a name="DataAwsEcrpublicImagesImagesOutputReference" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcrpublicImagesImagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.artifactMediaType">ArtifactMediaType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.imageDigest">ImageDigest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.imageManifestMediaType">ImageManifestMediaType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.imagePushedAt">ImagePushedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.imageSizeInBytes">ImageSizeInBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.imageTags">ImageTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.registryId">RegistryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.repositoryName">RepositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImages">DataAwsEcrpublicImagesImages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArtifactMediaType`<sup>Required</sup> <a name="ArtifactMediaType" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.artifactMediaType"></a>

```csharp
public string ArtifactMediaType { get; }
```

- *Type:* string

---

##### `ImageDigest`<sup>Required</sup> <a name="ImageDigest" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.imageDigest"></a>

```csharp
public string ImageDigest { get; }
```

- *Type:* string

---

##### `ImageManifestMediaType`<sup>Required</sup> <a name="ImageManifestMediaType" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.imageManifestMediaType"></a>

```csharp
public string ImageManifestMediaType { get; }
```

- *Type:* string

---

##### `ImagePushedAt`<sup>Required</sup> <a name="ImagePushedAt" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.imagePushedAt"></a>

```csharp
public string ImagePushedAt { get; }
```

- *Type:* string

---

##### `ImageSizeInBytes`<sup>Required</sup> <a name="ImageSizeInBytes" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.imageSizeInBytes"></a>

```csharp
public double ImageSizeInBytes { get; }
```

- *Type:* double

---

##### `ImageTags`<sup>Required</sup> <a name="ImageTags" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.imageTags"></a>

```csharp
public string[] ImageTags { get; }
```

- *Type:* string[]

---

##### `RegistryId`<sup>Required</sup> <a name="RegistryId" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.registryId"></a>

```csharp
public string RegistryId { get; }
```

- *Type:* string

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.repositoryName"></a>

```csharp
public string RepositoryName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImagesOutputReference.property.internalValue"></a>

```csharp
public DataAwsEcrpublicImagesImages InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcrpublicImages.DataAwsEcrpublicImagesImages">DataAwsEcrpublicImagesImages</a>

---



