# `dataAwsS3ControlMultiRegionAccessPoint` Submodule <a name="`dataAwsS3ControlMultiRegionAccessPoint` Submodule" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsS3ControlMultiRegionAccessPoint <a name="DataAwsS3ControlMultiRegionAccessPoint" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/s3control_multi_region_access_point aws_s3control_multi_region_access_point}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3ControlMultiRegionAccessPoint(Construct Scope, string Id, DataAwsS3ControlMultiRegionAccessPointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig">DataAwsS3ControlMultiRegionAccessPointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig">DataAwsS3ControlMultiRegionAccessPointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsS3ControlMultiRegionAccessPoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsS3ControlMultiRegionAccessPoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsS3ControlMultiRegionAccessPoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsS3ControlMultiRegionAccessPoint.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsS3ControlMultiRegionAccessPoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsS3ControlMultiRegionAccessPoint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsS3ControlMultiRegionAccessPoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsS3ControlMultiRegionAccessPoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/s3control_multi_region_access_point#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsS3ControlMultiRegionAccessPoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.publicAccessBlock">PublicAccessBlock</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList">DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.regions">Regions</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList">DataAwsS3ControlMultiRegionAccessPointRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `PublicAccessBlock`<sup>Required</sup> <a name="PublicAccessBlock" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.publicAccessBlock"></a>

```csharp
public DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList PublicAccessBlock { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList">DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList</a>

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.regions"></a>

```csharp
public DataAwsS3ControlMultiRegionAccessPointRegionsList Regions { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList">DataAwsS3ControlMultiRegionAccessPointRegionsList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsS3ControlMultiRegionAccessPointConfig <a name="DataAwsS3ControlMultiRegionAccessPointConfig" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3ControlMultiRegionAccessPointConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string AccountId = null,
    string Id = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/s3control_multi_region_access_point#name DataAwsS3ControlMultiRegionAccessPoint#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/s3control_multi_region_access_point#account_id DataAwsS3ControlMultiRegionAccessPoint#account_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/s3control_multi_region_access_point#id DataAwsS3ControlMultiRegionAccessPoint#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/s3control_multi_region_access_point#name DataAwsS3ControlMultiRegionAccessPoint#name}.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/s3control_multi_region_access_point#account_id DataAwsS3ControlMultiRegionAccessPoint#account_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/s3control_multi_region_access_point#id DataAwsS3ControlMultiRegionAccessPoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/s3control_multi_region_access_point#region DataAwsS3ControlMultiRegionAccessPoint#region}

---

### DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock <a name="DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock {

};
```


### DataAwsS3ControlMultiRegionAccessPointRegions <a name="DataAwsS3ControlMultiRegionAccessPointRegions" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3ControlMultiRegionAccessPointRegions {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList <a name="DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.get"></a>

```csharp
private DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference <a name="DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.blockPublicAcls">BlockPublicAcls</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.blockPublicPolicy">BlockPublicPolicy</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.ignorePublicAcls">IgnorePublicAcls</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.restrictPublicBuckets">RestrictPublicBuckets</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock">DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlockPublicAcls`<sup>Required</sup> <a name="BlockPublicAcls" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.blockPublicAcls"></a>

```csharp
public IResolvable BlockPublicAcls { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `BlockPublicPolicy`<sup>Required</sup> <a name="BlockPublicPolicy" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.blockPublicPolicy"></a>

```csharp
public IResolvable BlockPublicPolicy { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IgnorePublicAcls`<sup>Required</sup> <a name="IgnorePublicAcls" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.ignorePublicAcls"></a>

```csharp
public IResolvable IgnorePublicAcls { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RestrictPublicBuckets`<sup>Required</sup> <a name="RestrictPublicBuckets" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.restrictPublicBuckets"></a>

```csharp
public IResolvable RestrictPublicBuckets { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.internalValue"></a>

```csharp
public DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock">DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock</a>

---


### DataAwsS3ControlMultiRegionAccessPointRegionsList <a name="DataAwsS3ControlMultiRegionAccessPointRegionsList" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3ControlMultiRegionAccessPointRegionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.get"></a>

```csharp
private DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference <a name="DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.bucketAccountId">BucketAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegions">DataAwsS3ControlMultiRegionAccessPointRegions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `BucketAccountId`<sup>Required</sup> <a name="BucketAccountId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.bucketAccountId"></a>

```csharp
public string BucketAccountId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsS3ControlMultiRegionAccessPointRegions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegions">DataAwsS3ControlMultiRegionAccessPointRegions</a>

---



