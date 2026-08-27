# `dataAwsS3ControlMultiRegionAccessPoints` Submodule <a name="`dataAwsS3ControlMultiRegionAccessPoints` Submodule" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsS3ControlMultiRegionAccessPoints <a name="DataAwsS3ControlMultiRegionAccessPoints" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/s3control_multi_region_access_points aws_s3control_multi_region_access_points}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3ControlMultiRegionAccessPoints(Construct Scope, string Id, DataAwsS3ControlMultiRegionAccessPointsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig">DataAwsS3ControlMultiRegionAccessPointsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig">DataAwsS3ControlMultiRegionAccessPointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsS3ControlMultiRegionAccessPoints resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsS3ControlMultiRegionAccessPoints.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsS3ControlMultiRegionAccessPoints.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsS3ControlMultiRegionAccessPoints.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsS3ControlMultiRegionAccessPoints.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsS3ControlMultiRegionAccessPoints resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsS3ControlMultiRegionAccessPoints to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsS3ControlMultiRegionAccessPoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/s3control_multi_region_access_points#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsS3ControlMultiRegionAccessPoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.accessPoints">AccessPoints</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList">DataAwsS3ControlMultiRegionAccessPointsAccessPointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AccessPoints`<sup>Required</sup> <a name="AccessPoints" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.accessPoints"></a>

```csharp
public DataAwsS3ControlMultiRegionAccessPointsAccessPointsList AccessPoints { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList">DataAwsS3ControlMultiRegionAccessPointsAccessPointsList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsS3ControlMultiRegionAccessPointsAccessPoints <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPoints" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPoints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3ControlMultiRegionAccessPointsAccessPoints {

};
```


### DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock {

};
```


### DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions {

};
```


### DataAwsS3ControlMultiRegionAccessPointsConfig <a name="DataAwsS3ControlMultiRegionAccessPointsConfig" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3ControlMultiRegionAccessPointsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/s3control_multi_region_access_points#account_id DataAwsS3ControlMultiRegionAccessPoints#account_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/s3control_multi_region_access_points#account_id DataAwsS3ControlMultiRegionAccessPoints#account_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/s3control_multi_region_access_points#region DataAwsS3ControlMultiRegionAccessPoints#region}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsS3ControlMultiRegionAccessPointsAccessPointsList <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsList" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3ControlMultiRegionAccessPointsAccessPointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.get"></a>

```csharp
private DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.publicAccessBlock">PublicAccessBlock</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList">DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.regions">Regions</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList">DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPoints">DataAwsS3ControlMultiRegionAccessPointsAccessPoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PublicAccessBlock`<sup>Required</sup> <a name="PublicAccessBlock" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.publicAccessBlock"></a>

```csharp
public DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList PublicAccessBlock { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList">DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList</a>

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.regions"></a>

```csharp
public DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList Regions { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList">DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.internalValue"></a>

```csharp
public DataAwsS3ControlMultiRegionAccessPointsAccessPoints InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPoints">DataAwsS3ControlMultiRegionAccessPointsAccessPoints</a>

---


### DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.get"></a>

```csharp
private DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.blockPublicAcls">BlockPublicAcls</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.blockPublicPolicy">BlockPublicPolicy</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.ignorePublicAcls">IgnorePublicAcls</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.restrictPublicBuckets">RestrictPublicBuckets</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock">DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlockPublicAcls`<sup>Required</sup> <a name="BlockPublicAcls" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.blockPublicAcls"></a>

```csharp
public IResolvable BlockPublicAcls { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `BlockPublicPolicy`<sup>Required</sup> <a name="BlockPublicPolicy" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.blockPublicPolicy"></a>

```csharp
public IResolvable BlockPublicPolicy { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IgnorePublicAcls`<sup>Required</sup> <a name="IgnorePublicAcls" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.ignorePublicAcls"></a>

```csharp
public IResolvable IgnorePublicAcls { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RestrictPublicBuckets`<sup>Required</sup> <a name="RestrictPublicBuckets" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.restrictPublicBuckets"></a>

```csharp
public IResolvable RestrictPublicBuckets { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.internalValue"></a>

```csharp
public DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock">DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock</a>

---


### DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.get"></a>

```csharp
private DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.bucketAccountId">BucketAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions">DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `BucketAccountId`<sup>Required</sup> <a name="BucketAccountId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.bucketAccountId"></a>

```csharp
public string BucketAccountId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions">DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions</a>

---



