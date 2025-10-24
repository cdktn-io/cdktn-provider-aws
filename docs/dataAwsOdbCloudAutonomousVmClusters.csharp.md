# `dataAwsOdbCloudAutonomousVmClusters` Submodule <a name="`dataAwsOdbCloudAutonomousVmClusters` Submodule" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOdbCloudAutonomousVmClusters <a name="DataAwsOdbCloudAutonomousVmClusters" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/data-sources/odb_cloud_autonomous_vm_clusters aws_odb_cloud_autonomous_vm_clusters}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsOdbCloudAutonomousVmClusters(Construct Scope, string Id, DataAwsOdbCloudAutonomousVmClustersConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersConfig">DataAwsOdbCloudAutonomousVmClustersConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersConfig">DataAwsOdbCloudAutonomousVmClustersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsOdbCloudAutonomousVmClusters resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsOdbCloudAutonomousVmClusters.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsOdbCloudAutonomousVmClusters.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsOdbCloudAutonomousVmClusters.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsOdbCloudAutonomousVmClusters.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsOdbCloudAutonomousVmClusters resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsOdbCloudAutonomousVmClusters to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsOdbCloudAutonomousVmClusters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/data-sources/odb_cloud_autonomous_vm_clusters#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsOdbCloudAutonomousVmClusters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.property.cloudAutonomousVmClusters">CloudAutonomousVmClusters</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersList">DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CloudAutonomousVmClusters`<sup>Required</sup> <a name="CloudAutonomousVmClusters" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.property.cloudAutonomousVmClusters"></a>

```csharp
public DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersList CloudAutonomousVmClusters { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersList">DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersList</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClusters.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClusters <a name="DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClusters" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClusters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClusters {

};
```


### DataAwsOdbCloudAutonomousVmClustersConfig <a name="DataAwsOdbCloudAutonomousVmClustersConfig" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsOdbCloudAutonomousVmClustersConfig {
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
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/data-sources/odb_cloud_autonomous_vm_clusters#region DataAwsOdbCloudAutonomousVmClusters#region}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersList <a name="DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersList" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersList.get"></a>

```csharp
private DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference <a name="DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.cloudExadataInfrastructureId">CloudExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.ociResourceAnchorName">OciResourceAnchorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.ociUrl">OciUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.odbNetworkId">OdbNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClusters">DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClusters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CloudExadataInfrastructureId`<sup>Required</sup> <a name="CloudExadataInfrastructureId" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.cloudExadataInfrastructureId"></a>

```csharp
public string CloudExadataInfrastructureId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `OciResourceAnchorName`<sup>Required</sup> <a name="OciResourceAnchorName" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.ociResourceAnchorName"></a>

```csharp
public string OciResourceAnchorName { get; }
```

- *Type:* string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.ociUrl"></a>

```csharp
public string OciUrl { get; }
```

- *Type:* string

---

##### `OdbNetworkId`<sup>Required</sup> <a name="OdbNetworkId" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.odbNetworkId"></a>

```csharp
public string OdbNetworkId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.internalValue"></a>

```csharp
public DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClusters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbCloudAutonomousVmClusters.DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClusters">DataAwsOdbCloudAutonomousVmClustersCloudAutonomousVmClusters</a>

---



