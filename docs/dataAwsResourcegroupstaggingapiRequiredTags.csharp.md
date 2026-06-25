# `dataAwsResourcegroupstaggingapiRequiredTags` Submodule <a name="`dataAwsResourcegroupstaggingapiRequiredTags` Submodule" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsResourcegroupstaggingapiRequiredTags <a name="DataAwsResourcegroupstaggingapiRequiredTags" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/resourcegroupstaggingapi_required_tags aws_resourcegroupstaggingapi_required_tags}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsResourcegroupstaggingapiRequiredTags(Construct Scope, string Id, DataAwsResourcegroupstaggingapiRequiredTagsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig">DataAwsResourcegroupstaggingapiRequiredTagsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig">DataAwsResourcegroupstaggingapiRequiredTagsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsResourcegroupstaggingapiRequiredTags resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsResourcegroupstaggingapiRequiredTags.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsResourcegroupstaggingapiRequiredTags.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsResourcegroupstaggingapiRequiredTags.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsResourcegroupstaggingapiRequiredTags.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsResourcegroupstaggingapiRequiredTags resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsResourcegroupstaggingapiRequiredTags to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsResourcegroupstaggingapiRequiredTags that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/resourcegroupstaggingapi_required_tags#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsResourcegroupstaggingapiRequiredTags to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.requiredTags">RequiredTags</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList">DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `RequiredTags`<sup>Required</sup> <a name="RequiredTags" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.requiredTags"></a>

```csharp
public DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList RequiredTags { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList">DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsResourcegroupstaggingapiRequiredTagsConfig <a name="DataAwsResourcegroupstaggingapiRequiredTagsConfig" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsResourcegroupstaggingapiRequiredTagsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/resourcegroupstaggingapi_required_tags#region DataAwsResourcegroupstaggingapiRequiredTags#region}

---

### DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags <a name="DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList <a name="DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.get"></a>

```csharp
private DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference <a name="DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.cloudFormationResourceTypes">CloudFormationResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.reportingTagKeys">ReportingTagKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags">DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudFormationResourceTypes`<sup>Required</sup> <a name="CloudFormationResourceTypes" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.cloudFormationResourceTypes"></a>

```csharp
public string[] CloudFormationResourceTypes { get; }
```

- *Type:* string[]

---

##### `ReportingTagKeys`<sup>Required</sup> <a name="ReportingTagKeys" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.reportingTagKeys"></a>

```csharp
public string[] ReportingTagKeys { get; }
```

- *Type:* string[]

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags">DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags</a>

---



