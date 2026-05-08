# `dataAwsOdbCloudVmClusters` Submodule <a name="`dataAwsOdbCloudVmClusters` Submodule" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOdbCloudVmClusters <a name="DataAwsOdbCloudVmClusters" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/odb_cloud_vm_clusters aws_odb_cloud_vm_clusters}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbCloudVmClusters(Construct Scope, string Id, DataAwsOdbCloudVmClustersConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersConfig">DataAwsOdbCloudVmClustersConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersConfig">DataAwsOdbCloudVmClustersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsOdbCloudVmClusters resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsOdbCloudVmClusters.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsOdbCloudVmClusters.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsOdbCloudVmClusters.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsOdbCloudVmClusters.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsOdbCloudVmClusters resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsOdbCloudVmClusters to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsOdbCloudVmClusters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/odb_cloud_vm_clusters#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsOdbCloudVmClusters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.property.cloudVmClusters">CloudVmClusters</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersList">DataAwsOdbCloudVmClustersCloudVmClustersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CloudVmClusters`<sup>Required</sup> <a name="CloudVmClusters" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.property.cloudVmClusters"></a>

```csharp
public DataAwsOdbCloudVmClustersCloudVmClustersList CloudVmClusters { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersList">DataAwsOdbCloudVmClustersCloudVmClustersList</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClusters.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOdbCloudVmClustersCloudVmClusters <a name="DataAwsOdbCloudVmClustersCloudVmClusters" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClusters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClusters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbCloudVmClustersCloudVmClusters {

};
```


### DataAwsOdbCloudVmClustersConfig <a name="DataAwsOdbCloudVmClustersConfig" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbCloudVmClustersConfig {
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
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/odb_cloud_vm_clusters#region DataAwsOdbCloudVmClusters#region}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsOdbCloudVmClustersCloudVmClustersList <a name="DataAwsOdbCloudVmClustersCloudVmClustersList" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbCloudVmClustersCloudVmClustersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersList.get"></a>

```csharp
private DataAwsOdbCloudVmClustersCloudVmClustersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsOdbCloudVmClustersCloudVmClustersOutputReference <a name="DataAwsOdbCloudVmClustersCloudVmClustersOutputReference" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOdbCloudVmClustersCloudVmClustersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.property.cloudExadataInfrastructureId">CloudExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.property.ociResourceAnchorName">OciResourceAnchorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.property.ociUrl">OciUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.property.odbNetworkId">OdbNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClusters">DataAwsOdbCloudVmClustersCloudVmClusters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CloudExadataInfrastructureId`<sup>Required</sup> <a name="CloudExadataInfrastructureId" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.property.cloudExadataInfrastructureId"></a>

```csharp
public string CloudExadataInfrastructureId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `OciResourceAnchorName`<sup>Required</sup> <a name="OciResourceAnchorName" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.property.ociResourceAnchorName"></a>

```csharp
public string OciResourceAnchorName { get; }
```

- *Type:* string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.property.ociUrl"></a>

```csharp
public string OciUrl { get; }
```

- *Type:* string

---

##### `OdbNetworkId`<sup>Required</sup> <a name="OdbNetworkId" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.property.odbNetworkId"></a>

```csharp
public string OdbNetworkId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClustersOutputReference.property.internalValue"></a>

```csharp
public DataAwsOdbCloudVmClustersCloudVmClusters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbCloudVmClusters.DataAwsOdbCloudVmClustersCloudVmClusters">DataAwsOdbCloudVmClustersCloudVmClusters</a>

---



