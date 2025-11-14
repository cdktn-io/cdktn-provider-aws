# `dataAwsOdbDbServer` Submodule <a name="`dataAwsOdbDbServer` Submodule" id="@cdktf/provider-aws.dataAwsOdbDbServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOdbDbServer <a name="DataAwsOdbDbServer" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/odb_db_server aws_odb_db_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsOdbDbServer(Construct Scope, string Id, DataAwsOdbDbServerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig">DataAwsOdbDbServerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig">DataAwsOdbDbServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsOdbDbServer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsOdbDbServer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsOdbDbServer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsOdbDbServer.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsOdbDbServer.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsOdbDbServer resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsOdbDbServer to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsOdbDbServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/odb_db_server#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsOdbDbServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.autonomousVirtualMachineIds">AutonomousVirtualMachineIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.autonomousVmClusterIds">AutonomousVmClusterIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.computeModel">ComputeModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.cpuCoreCount">CpuCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.dbNodeStorageSizeInGbs">DbNodeStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.dbServerPatchingDetails">DbServerPatchingDetails</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList">DataAwsOdbDbServerDbServerPatchingDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.exadataInfrastructureId">ExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.maxCpuCount">MaxCpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.maxDbNodeStorageInGbs">MaxDbNodeStorageInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.maxMemoryInGbs">MaxMemoryInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.memorySizeInGbs">MemorySizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.ociResourceAnchorName">OciResourceAnchorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.statusReason">StatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.vmClusterIds">VmClusterIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.cloudExadataInfrastructureIdInput">CloudExadataInfrastructureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.cloudExadataInfrastructureId">CloudExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AutonomousVirtualMachineIds`<sup>Required</sup> <a name="AutonomousVirtualMachineIds" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.autonomousVirtualMachineIds"></a>

```csharp
public string[] AutonomousVirtualMachineIds { get; }
```

- *Type:* string[]

---

##### `AutonomousVmClusterIds`<sup>Required</sup> <a name="AutonomousVmClusterIds" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.autonomousVmClusterIds"></a>

```csharp
public string[] AutonomousVmClusterIds { get; }
```

- *Type:* string[]

---

##### `ComputeModel`<sup>Required</sup> <a name="ComputeModel" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.computeModel"></a>

```csharp
public string ComputeModel { get; }
```

- *Type:* string

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.cpuCoreCount"></a>

```csharp
public double CpuCoreCount { get; }
```

- *Type:* double

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DbNodeStorageSizeInGbs`<sup>Required</sup> <a name="DbNodeStorageSizeInGbs" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.dbNodeStorageSizeInGbs"></a>

```csharp
public double DbNodeStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `DbServerPatchingDetails`<sup>Required</sup> <a name="DbServerPatchingDetails" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.dbServerPatchingDetails"></a>

```csharp
public DataAwsOdbDbServerDbServerPatchingDetailsList DbServerPatchingDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList">DataAwsOdbDbServerDbServerPatchingDetailsList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExadataInfrastructureId`<sup>Required</sup> <a name="ExadataInfrastructureId" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.exadataInfrastructureId"></a>

```csharp
public string ExadataInfrastructureId { get; }
```

- *Type:* string

---

##### `MaxCpuCount`<sup>Required</sup> <a name="MaxCpuCount" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.maxCpuCount"></a>

```csharp
public double MaxCpuCount { get; }
```

- *Type:* double

---

##### `MaxDbNodeStorageInGbs`<sup>Required</sup> <a name="MaxDbNodeStorageInGbs" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.maxDbNodeStorageInGbs"></a>

```csharp
public double MaxDbNodeStorageInGbs { get; }
```

- *Type:* double

---

##### `MaxMemoryInGbs`<sup>Required</sup> <a name="MaxMemoryInGbs" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.maxMemoryInGbs"></a>

```csharp
public double MaxMemoryInGbs { get; }
```

- *Type:* double

---

##### `MemorySizeInGbs`<sup>Required</sup> <a name="MemorySizeInGbs" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.memorySizeInGbs"></a>

```csharp
public double MemorySizeInGbs { get; }
```

- *Type:* double

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `OciResourceAnchorName`<sup>Required</sup> <a name="OciResourceAnchorName" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.ociResourceAnchorName"></a>

```csharp
public string OciResourceAnchorName { get; }
```

- *Type:* string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.statusReason"></a>

```csharp
public string StatusReason { get; }
```

- *Type:* string

---

##### `VmClusterIds`<sup>Required</sup> <a name="VmClusterIds" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.vmClusterIds"></a>

```csharp
public string[] VmClusterIds { get; }
```

- *Type:* string[]

---

##### `CloudExadataInfrastructureIdInput`<sup>Optional</sup> <a name="CloudExadataInfrastructureIdInput" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.cloudExadataInfrastructureIdInput"></a>

```csharp
public string CloudExadataInfrastructureIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `CloudExadataInfrastructureId`<sup>Required</sup> <a name="CloudExadataInfrastructureId" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.cloudExadataInfrastructureId"></a>

```csharp
public string CloudExadataInfrastructureId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOdbDbServerConfig <a name="DataAwsOdbDbServerConfig" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsOdbDbServerConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CloudExadataInfrastructureId,
    string Id,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.cloudExadataInfrastructureId">CloudExadataInfrastructureId</a></code> | <code>string</code> | The identifier of the database server to retrieve information about. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.id">Id</a></code> | <code>string</code> | The identifier of the the database server. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `CloudExadataInfrastructureId`<sup>Required</sup> <a name="CloudExadataInfrastructureId" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.cloudExadataInfrastructureId"></a>

```csharp
public string CloudExadataInfrastructureId { get; set; }
```

- *Type:* string

The identifier of the database server to retrieve information about.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/odb_db_server#cloud_exadata_infrastructure_id DataAwsOdbDbServer#cloud_exadata_infrastructure_id}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The identifier of the the database server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/odb_db_server#id DataAwsOdbDbServer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/odb_db_server#region DataAwsOdbDbServer#region}

---

### DataAwsOdbDbServerDbServerPatchingDetails <a name="DataAwsOdbDbServerDbServerPatchingDetails" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsOdbDbServerDbServerPatchingDetails {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsOdbDbServerDbServerPatchingDetailsList <a name="DataAwsOdbDbServerDbServerPatchingDetailsList" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsOdbDbServerDbServerPatchingDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.get"></a>

```csharp
private DataAwsOdbDbServerDbServerPatchingDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsOdbDbServerDbServerPatchingDetailsOutputReference <a name="DataAwsOdbDbServerDbServerPatchingDetailsOutputReference" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsOdbDbServerDbServerPatchingDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.estimatedPatchDuration">EstimatedPatchDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.patchingStatus">PatchingStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.timePatchingEnded">TimePatchingEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.timePatchingStarted">TimePatchingStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetails">DataAwsOdbDbServerDbServerPatchingDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EstimatedPatchDuration`<sup>Required</sup> <a name="EstimatedPatchDuration" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.estimatedPatchDuration"></a>

```csharp
public double EstimatedPatchDuration { get; }
```

- *Type:* double

---

##### `PatchingStatus`<sup>Required</sup> <a name="PatchingStatus" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.patchingStatus"></a>

```csharp
public string PatchingStatus { get; }
```

- *Type:* string

---

##### `TimePatchingEnded`<sup>Required</sup> <a name="TimePatchingEnded" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.timePatchingEnded"></a>

```csharp
public string TimePatchingEnded { get; }
```

- *Type:* string

---

##### `TimePatchingStarted`<sup>Required</sup> <a name="TimePatchingStarted" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.timePatchingStarted"></a>

```csharp
public string TimePatchingStarted { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.internalValue"></a>

```csharp
public DataAwsOdbDbServerDbServerPatchingDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetails">DataAwsOdbDbServerDbServerPatchingDetails</a>

---



