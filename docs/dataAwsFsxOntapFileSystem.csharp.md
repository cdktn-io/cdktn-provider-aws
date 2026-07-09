# `dataAwsFsxOntapFileSystem` Submodule <a name="`dataAwsFsxOntapFileSystem` Submodule" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsFsxOntapFileSystem <a name="DataAwsFsxOntapFileSystem" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/fsx_ontap_file_system aws_fsx_ontap_file_system}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsFsxOntapFileSystem(Construct Scope, string Id, DataAwsFsxOntapFileSystemConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig">DataAwsFsxOntapFileSystemConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig">DataAwsFsxOntapFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsFsxOntapFileSystem resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsFsxOntapFileSystem.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsFsxOntapFileSystem.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsFsxOntapFileSystem.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsFsxOntapFileSystem.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsFsxOntapFileSystem resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsFsxOntapFileSystem to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsFsxOntapFileSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/fsx_ontap_file_system#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsFsxOntapFileSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.automaticBackupRetentionDays">AutomaticBackupRetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.dailyAutomaticBackupStartTime">DailyAutomaticBackupStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.deploymentType">DeploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.diskIopsConfiguration">DiskIopsConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList">DataAwsFsxOntapFileSystemDiskIopsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.endpointIpAddressRange">EndpointIpAddressRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList">DataAwsFsxOntapFileSystemEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.haPairs">HaPairs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.networkInterfaceIds">NetworkInterfaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.preferredSubnetId">PreferredSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.routeTableIds">RouteTableIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.storageCapacity">StorageCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.throughputCapacity">ThroughputCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.throughputCapacityPerHaPair">ThroughputCapacityPerHaPair</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.weeklyMaintenanceStartTime">WeeklyMaintenanceStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AutomaticBackupRetentionDays`<sup>Required</sup> <a name="AutomaticBackupRetentionDays" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.automaticBackupRetentionDays"></a>

```csharp
public double AutomaticBackupRetentionDays { get; }
```

- *Type:* double

---

##### `DailyAutomaticBackupStartTime`<sup>Required</sup> <a name="DailyAutomaticBackupStartTime" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.dailyAutomaticBackupStartTime"></a>

```csharp
public string DailyAutomaticBackupStartTime { get; }
```

- *Type:* string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.deploymentType"></a>

```csharp
public string DeploymentType { get; }
```

- *Type:* string

---

##### `DiskIopsConfiguration`<sup>Required</sup> <a name="DiskIopsConfiguration" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.diskIopsConfiguration"></a>

```csharp
public DataAwsFsxOntapFileSystemDiskIopsConfigurationList DiskIopsConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList">DataAwsFsxOntapFileSystemDiskIopsConfigurationList</a>

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `EndpointIpAddressRange`<sup>Required</sup> <a name="EndpointIpAddressRange" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.endpointIpAddressRange"></a>

```csharp
public string EndpointIpAddressRange { get; }
```

- *Type:* string

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.endpoints"></a>

```csharp
public DataAwsFsxOntapFileSystemEndpointsList Endpoints { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList">DataAwsFsxOntapFileSystemEndpointsList</a>

---

##### `HaPairs`<sup>Required</sup> <a name="HaPairs" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.haPairs"></a>

```csharp
public double HaPairs { get; }
```

- *Type:* double

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `NetworkInterfaceIds`<sup>Required</sup> <a name="NetworkInterfaceIds" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.networkInterfaceIds"></a>

```csharp
public string[] NetworkInterfaceIds { get; }
```

- *Type:* string[]

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `PreferredSubnetId`<sup>Required</sup> <a name="PreferredSubnetId" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.preferredSubnetId"></a>

```csharp
public string PreferredSubnetId { get; }
```

- *Type:* string

---

##### `RouteTableIds`<sup>Required</sup> <a name="RouteTableIds" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.routeTableIds"></a>

```csharp
public string[] RouteTableIds { get; }
```

- *Type:* string[]

---

##### `StorageCapacity`<sup>Required</sup> <a name="StorageCapacity" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.storageCapacity"></a>

```csharp
public double StorageCapacity { get; }
```

- *Type:* double

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `ThroughputCapacity`<sup>Required</sup> <a name="ThroughputCapacity" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.throughputCapacity"></a>

```csharp
public double ThroughputCapacity { get; }
```

- *Type:* double

---

##### `ThroughputCapacityPerHaPair`<sup>Required</sup> <a name="ThroughputCapacityPerHaPair" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.throughputCapacityPerHaPair"></a>

```csharp
public double ThroughputCapacityPerHaPair { get; }
```

- *Type:* double

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `WeeklyMaintenanceStartTime`<sup>Required</sup> <a name="WeeklyMaintenanceStartTime" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.weeklyMaintenanceStartTime"></a>

```csharp
public string WeeklyMaintenanceStartTime { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsFsxOntapFileSystemConfig <a name="DataAwsFsxOntapFileSystemConfig" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsFsxOntapFileSystemConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/fsx_ontap_file_system#id DataAwsFsxOntapFileSystem#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/fsx_ontap_file_system#tags DataAwsFsxOntapFileSystem#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/fsx_ontap_file_system#id DataAwsFsxOntapFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/fsx_ontap_file_system#region DataAwsFsxOntapFileSystem#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/fsx_ontap_file_system#tags DataAwsFsxOntapFileSystem#tags}.

---

### DataAwsFsxOntapFileSystemDiskIopsConfiguration <a name="DataAwsFsxOntapFileSystemDiskIopsConfiguration" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsFsxOntapFileSystemDiskIopsConfiguration {

};
```


### DataAwsFsxOntapFileSystemEndpoints <a name="DataAwsFsxOntapFileSystemEndpoints" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpoints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsFsxOntapFileSystemEndpoints {

};
```


### DataAwsFsxOntapFileSystemEndpointsIntercluster <a name="DataAwsFsxOntapFileSystemEndpointsIntercluster" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsIntercluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsIntercluster.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsFsxOntapFileSystemEndpointsIntercluster {

};
```


### DataAwsFsxOntapFileSystemEndpointsManagement <a name="DataAwsFsxOntapFileSystemEndpointsManagement" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsFsxOntapFileSystemEndpointsManagement {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsFsxOntapFileSystemDiskIopsConfigurationList <a name="DataAwsFsxOntapFileSystemDiskIopsConfigurationList" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsFsxOntapFileSystemDiskIopsConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.get"></a>

```csharp
private DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference <a name="DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfiguration">DataAwsFsxOntapFileSystemDiskIopsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsFsxOntapFileSystemDiskIopsConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfiguration">DataAwsFsxOntapFileSystemDiskIopsConfiguration</a>

---


### DataAwsFsxOntapFileSystemEndpointsInterclusterList <a name="DataAwsFsxOntapFileSystemEndpointsInterclusterList" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsFsxOntapFileSystemEndpointsInterclusterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.get"></a>

```csharp
private DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference <a name="DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsIntercluster">DataAwsFsxOntapFileSystemEndpointsIntercluster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.property.ipAddresses"></a>

```csharp
public string[] IpAddresses { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.property.internalValue"></a>

```csharp
public DataAwsFsxOntapFileSystemEndpointsIntercluster InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsIntercluster">DataAwsFsxOntapFileSystemEndpointsIntercluster</a>

---


### DataAwsFsxOntapFileSystemEndpointsList <a name="DataAwsFsxOntapFileSystemEndpointsList" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsFsxOntapFileSystemEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.get"></a>

```csharp
private DataAwsFsxOntapFileSystemEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsFsxOntapFileSystemEndpointsManagementList <a name="DataAwsFsxOntapFileSystemEndpointsManagementList" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsFsxOntapFileSystemEndpointsManagementList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.get"></a>

```csharp
private DataAwsFsxOntapFileSystemEndpointsManagementOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsFsxOntapFileSystemEndpointsManagementOutputReference <a name="DataAwsFsxOntapFileSystemEndpointsManagementOutputReference" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsFsxOntapFileSystemEndpointsManagementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagement">DataAwsFsxOntapFileSystemEndpointsManagement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.property.ipAddresses"></a>

```csharp
public string[] IpAddresses { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.property.internalValue"></a>

```csharp
public DataAwsFsxOntapFileSystemEndpointsManagement InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagement">DataAwsFsxOntapFileSystemEndpointsManagement</a>

---


### DataAwsFsxOntapFileSystemEndpointsOutputReference <a name="DataAwsFsxOntapFileSystemEndpointsOutputReference" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsFsxOntapFileSystemEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.property.intercluster">Intercluster</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList">DataAwsFsxOntapFileSystemEndpointsInterclusterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.property.management">Management</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList">DataAwsFsxOntapFileSystemEndpointsManagementList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpoints">DataAwsFsxOntapFileSystemEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Intercluster`<sup>Required</sup> <a name="Intercluster" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.property.intercluster"></a>

```csharp
public DataAwsFsxOntapFileSystemEndpointsInterclusterList Intercluster { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList">DataAwsFsxOntapFileSystemEndpointsInterclusterList</a>

---

##### `Management`<sup>Required</sup> <a name="Management" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.property.management"></a>

```csharp
public DataAwsFsxOntapFileSystemEndpointsManagementList Management { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList">DataAwsFsxOntapFileSystemEndpointsManagementList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.property.internalValue"></a>

```csharp
public DataAwsFsxOntapFileSystemEndpoints InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpoints">DataAwsFsxOntapFileSystemEndpoints</a>

---



