# `dataAwsOdbCloudAutonomousVmCluster` Submodule <a name="`dataAwsOdbCloudAutonomousVmCluster` Submodule" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOdbCloudAutonomousVmCluster <a name="DataAwsOdbCloudAutonomousVmCluster" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/odb_cloud_autonomous_vm_cluster aws_odb_cloud_autonomous_vm_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbCloudAutonomousVmCluster(Construct Scope, string Id, DataAwsOdbCloudAutonomousVmClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterConfig">DataAwsOdbCloudAutonomousVmClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterConfig">DataAwsOdbCloudAutonomousVmClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsOdbCloudAutonomousVmCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsOdbCloudAutonomousVmCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsOdbCloudAutonomousVmCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsOdbCloudAutonomousVmCluster.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsOdbCloudAutonomousVmCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsOdbCloudAutonomousVmCluster resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsOdbCloudAutonomousVmCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsOdbCloudAutonomousVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/odb_cloud_autonomous_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsOdbCloudAutonomousVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.autonomousDataStoragePercentage">AutonomousDataStoragePercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.autonomousDataStorageSizeInTbs">AutonomousDataStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.availableAutonomousDataStorageSizeInTbs">AvailableAutonomousDataStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.availableContainerDatabases">AvailableContainerDatabases</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.availableCpus">AvailableCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.cloudExadataInfrastructureArn">CloudExadataInfrastructureArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.cloudExadataInfrastructureId">CloudExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.computeModel">ComputeModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.cpuCoreCount">CpuCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.cpuCoreCountPerNode">CpuCoreCountPerNode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.cpuPercentage">CpuPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.dataStorageSizeInGbs">DataStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.dataStorageSizeInTbs">DataStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.dbServers">DbServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.exadataStorageInTbsLowestScaledValue">ExadataStorageInTbsLowestScaledValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.isMtlsEnabledVmCluster">IsMtlsEnabledVmCluster</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowList">DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.maxAcdsLowestScaledValue">MaxAcdsLowestScaledValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.memoryPerOracleComputeUnitInGbs">MemoryPerOracleComputeUnitInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.memorySizeInGbs">MemorySizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.nonProvisionableAutonomousContainerDatabases">NonProvisionableAutonomousContainerDatabases</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.ociResourceAnchorName">OciResourceAnchorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.ociUrl">OciUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.odbNetworkArn">OdbNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.odbNetworkId">OdbNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.odbNodeStorageSizeInGbs">OdbNodeStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.percentProgress">PercentProgress</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.provisionableAutonomousContainerDatabases">ProvisionableAutonomousContainerDatabases</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.provisionedAutonomousContainerDatabases">ProvisionedAutonomousContainerDatabases</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.provisionedCpus">ProvisionedCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.reclaimableCpus">ReclaimableCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.reservedCpus">ReservedCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.scanListenerPortNonTls">ScanListenerPortNonTls</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.scanListenerPortTls">ScanListenerPortTls</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.statusReason">StatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.timeDatabaseSslCertificateExpires">TimeDatabaseSslCertificateExpires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.timeOrdsCertificateExpires">TimeOrdsCertificateExpires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.totalContainerDatabases">TotalContainerDatabases</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AutonomousDataStoragePercentage`<sup>Required</sup> <a name="AutonomousDataStoragePercentage" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.autonomousDataStoragePercentage"></a>

```csharp
public double AutonomousDataStoragePercentage { get; }
```

- *Type:* double

---

##### `AutonomousDataStorageSizeInTbs`<sup>Required</sup> <a name="AutonomousDataStorageSizeInTbs" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.autonomousDataStorageSizeInTbs"></a>

```csharp
public double AutonomousDataStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `AvailableAutonomousDataStorageSizeInTbs`<sup>Required</sup> <a name="AvailableAutonomousDataStorageSizeInTbs" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.availableAutonomousDataStorageSizeInTbs"></a>

```csharp
public double AvailableAutonomousDataStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `AvailableContainerDatabases`<sup>Required</sup> <a name="AvailableContainerDatabases" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.availableContainerDatabases"></a>

```csharp
public double AvailableContainerDatabases { get; }
```

- *Type:* double

---

##### `AvailableCpus`<sup>Required</sup> <a name="AvailableCpus" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.availableCpus"></a>

```csharp
public double AvailableCpus { get; }
```

- *Type:* double

---

##### `CloudExadataInfrastructureArn`<sup>Required</sup> <a name="CloudExadataInfrastructureArn" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.cloudExadataInfrastructureArn"></a>

```csharp
public string CloudExadataInfrastructureArn { get; }
```

- *Type:* string

---

##### `CloudExadataInfrastructureId`<sup>Required</sup> <a name="CloudExadataInfrastructureId" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.cloudExadataInfrastructureId"></a>

```csharp
public string CloudExadataInfrastructureId { get; }
```

- *Type:* string

---

##### `ComputeModel`<sup>Required</sup> <a name="ComputeModel" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.computeModel"></a>

```csharp
public string ComputeModel { get; }
```

- *Type:* string

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.cpuCoreCount"></a>

```csharp
public double CpuCoreCount { get; }
```

- *Type:* double

---

##### `CpuCoreCountPerNode`<sup>Required</sup> <a name="CpuCoreCountPerNode" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.cpuCoreCountPerNode"></a>

```csharp
public double CpuCoreCountPerNode { get; }
```

- *Type:* double

---

##### `CpuPercentage`<sup>Required</sup> <a name="CpuPercentage" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.cpuPercentage"></a>

```csharp
public double CpuPercentage { get; }
```

- *Type:* double

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DataStorageSizeInGbs`<sup>Required</sup> <a name="DataStorageSizeInGbs" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.dataStorageSizeInGbs"></a>

```csharp
public double DataStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `DataStorageSizeInTbs`<sup>Required</sup> <a name="DataStorageSizeInTbs" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.dataStorageSizeInTbs"></a>

```csharp
public double DataStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `DbServers`<sup>Required</sup> <a name="DbServers" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.dbServers"></a>

```csharp
public string[] DbServers { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `ExadataStorageInTbsLowestScaledValue`<sup>Required</sup> <a name="ExadataStorageInTbsLowestScaledValue" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.exadataStorageInTbsLowestScaledValue"></a>

```csharp
public double ExadataStorageInTbsLowestScaledValue { get; }
```

- *Type:* double

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `IsMtlsEnabledVmCluster`<sup>Required</sup> <a name="IsMtlsEnabledVmCluster" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.isMtlsEnabledVmCluster"></a>

```csharp
public IResolvable IsMtlsEnabledVmCluster { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.maintenanceWindow"></a>

```csharp
public DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowList MaintenanceWindow { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowList">DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowList</a>

---

##### `MaxAcdsLowestScaledValue`<sup>Required</sup> <a name="MaxAcdsLowestScaledValue" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.maxAcdsLowestScaledValue"></a>

```csharp
public double MaxAcdsLowestScaledValue { get; }
```

- *Type:* double

---

##### `MemoryPerOracleComputeUnitInGbs`<sup>Required</sup> <a name="MemoryPerOracleComputeUnitInGbs" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.memoryPerOracleComputeUnitInGbs"></a>

```csharp
public double MemoryPerOracleComputeUnitInGbs { get; }
```

- *Type:* double

---

##### `MemorySizeInGbs`<sup>Required</sup> <a name="MemorySizeInGbs" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.memorySizeInGbs"></a>

```csharp
public double MemorySizeInGbs { get; }
```

- *Type:* double

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `NonProvisionableAutonomousContainerDatabases`<sup>Required</sup> <a name="NonProvisionableAutonomousContainerDatabases" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.nonProvisionableAutonomousContainerDatabases"></a>

```csharp
public double NonProvisionableAutonomousContainerDatabases { get; }
```

- *Type:* double

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `OciResourceAnchorName`<sup>Required</sup> <a name="OciResourceAnchorName" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.ociResourceAnchorName"></a>

```csharp
public string OciResourceAnchorName { get; }
```

- *Type:* string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.ociUrl"></a>

```csharp
public string OciUrl { get; }
```

- *Type:* string

---

##### `OdbNetworkArn`<sup>Required</sup> <a name="OdbNetworkArn" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.odbNetworkArn"></a>

```csharp
public string OdbNetworkArn { get; }
```

- *Type:* string

---

##### `OdbNetworkId`<sup>Required</sup> <a name="OdbNetworkId" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.odbNetworkId"></a>

```csharp
public string OdbNetworkId { get; }
```

- *Type:* string

---

##### `OdbNodeStorageSizeInGbs`<sup>Required</sup> <a name="OdbNodeStorageSizeInGbs" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.odbNodeStorageSizeInGbs"></a>

```csharp
public double OdbNodeStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `PercentProgress`<sup>Required</sup> <a name="PercentProgress" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.percentProgress"></a>

```csharp
public double PercentProgress { get; }
```

- *Type:* double

---

##### `ProvisionableAutonomousContainerDatabases`<sup>Required</sup> <a name="ProvisionableAutonomousContainerDatabases" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.provisionableAutonomousContainerDatabases"></a>

```csharp
public double ProvisionableAutonomousContainerDatabases { get; }
```

- *Type:* double

---

##### `ProvisionedAutonomousContainerDatabases`<sup>Required</sup> <a name="ProvisionedAutonomousContainerDatabases" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.provisionedAutonomousContainerDatabases"></a>

```csharp
public double ProvisionedAutonomousContainerDatabases { get; }
```

- *Type:* double

---

##### `ProvisionedCpus`<sup>Required</sup> <a name="ProvisionedCpus" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.provisionedCpus"></a>

```csharp
public double ProvisionedCpus { get; }
```

- *Type:* double

---

##### `ReclaimableCpus`<sup>Required</sup> <a name="ReclaimableCpus" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.reclaimableCpus"></a>

```csharp
public double ReclaimableCpus { get; }
```

- *Type:* double

---

##### `ReservedCpus`<sup>Required</sup> <a name="ReservedCpus" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.reservedCpus"></a>

```csharp
public double ReservedCpus { get; }
```

- *Type:* double

---

##### `ScanListenerPortNonTls`<sup>Required</sup> <a name="ScanListenerPortNonTls" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.scanListenerPortNonTls"></a>

```csharp
public double ScanListenerPortNonTls { get; }
```

- *Type:* double

---

##### `ScanListenerPortTls`<sup>Required</sup> <a name="ScanListenerPortTls" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.scanListenerPortTls"></a>

```csharp
public double ScanListenerPortTls { get; }
```

- *Type:* double

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.statusReason"></a>

```csharp
public string StatusReason { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `TimeDatabaseSslCertificateExpires`<sup>Required</sup> <a name="TimeDatabaseSslCertificateExpires" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.timeDatabaseSslCertificateExpires"></a>

```csharp
public string TimeDatabaseSslCertificateExpires { get; }
```

- *Type:* string

---

##### `TimeOrdsCertificateExpires`<sup>Required</sup> <a name="TimeOrdsCertificateExpires" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.timeOrdsCertificateExpires"></a>

```csharp
public string TimeOrdsCertificateExpires { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `TotalContainerDatabases`<sup>Required</sup> <a name="TotalContainerDatabases" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.totalContainerDatabases"></a>

```csharp
public double TotalContainerDatabases { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOdbCloudAutonomousVmClusterConfig <a name="DataAwsOdbCloudAutonomousVmClusterConfig" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbCloudAutonomousVmClusterConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterConfig.property.id">Id</a></code> | <code>string</code> | Unique ID of the Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Unique ID of the Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/odb_cloud_autonomous_vm_cluster#id DataAwsOdbCloudAutonomousVmCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/odb_cloud_autonomous_vm_cluster#region DataAwsOdbCloudAutonomousVmCluster#region}

---

### DataAwsOdbCloudAutonomousVmClusterMaintenanceWindow <a name="DataAwsOdbCloudAutonomousVmClusterMaintenanceWindow" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbCloudAutonomousVmClusterMaintenanceWindow {

};
```


### DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek <a name="DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek {

};
```


### DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonths <a name="DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonths" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonths.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonths {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList <a name="DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.get"></a>

```csharp
private DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference <a name="DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek">DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```csharp
public DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek">DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek</a>

---


### DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowList <a name="DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowList" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowList.get"></a>

```csharp
private DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsList <a name="DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsList" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.get"></a>

```csharp
private DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference <a name="DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonths">DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonths</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```csharp
public DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonths InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonths">DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonths</a>

---


### DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference <a name="DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList">DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.hoursOfDay">HoursOfDay</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.leadTimeInWeeks">LeadTimeInWeeks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.months">Months</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsList">DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.preference">Preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindow">DataAwsOdbCloudAutonomousVmClusterMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```csharp
public DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList DaysOfWeek { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList">DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList</a>

---

##### `HoursOfDay`<sup>Required</sup> <a name="HoursOfDay" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```csharp
public double[] HoursOfDay { get; }
```

- *Type:* double[]

---

##### `LeadTimeInWeeks`<sup>Required</sup> <a name="LeadTimeInWeeks" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```csharp
public double LeadTimeInWeeks { get; }
```

- *Type:* double

---

##### `Months`<sup>Required</sup> <a name="Months" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.months"></a>

```csharp
public DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsList Months { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsList">DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowMonthsList</a>

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.preference"></a>

```csharp
public string Preference { get; }
```

- *Type:* string

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```csharp
public double[] WeeksOfMonth { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.internalValue"></a>

```csharp
public DataAwsOdbCloudAutonomousVmClusterMaintenanceWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbCloudAutonomousVmCluster.DataAwsOdbCloudAutonomousVmClusterMaintenanceWindow">DataAwsOdbCloudAutonomousVmClusterMaintenanceWindow</a>

---



