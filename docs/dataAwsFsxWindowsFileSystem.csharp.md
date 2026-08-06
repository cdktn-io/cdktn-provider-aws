# `dataAwsFsxWindowsFileSystem` Submodule <a name="`dataAwsFsxWindowsFileSystem` Submodule" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsFsxWindowsFileSystem <a name="DataAwsFsxWindowsFileSystem" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/fsx_windows_file_system aws_fsx_windows_file_system}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsFsxWindowsFileSystem(Construct Scope, string Id, DataAwsFsxWindowsFileSystemConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig">DataAwsFsxWindowsFileSystemConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig">DataAwsFsxWindowsFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsFsxWindowsFileSystem resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsFsxWindowsFileSystem.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsFsxWindowsFileSystem.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsFsxWindowsFileSystem.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsFsxWindowsFileSystem.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsFsxWindowsFileSystem resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsFsxWindowsFileSystem to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsFsxWindowsFileSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/fsx_windows_file_system#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsFsxWindowsFileSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.activeDirectoryId">ActiveDirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.aliases">Aliases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.auditLogConfiguration">AuditLogConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList">DataAwsFsxWindowsFileSystemAuditLogConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.automaticBackupRetentionDays">AutomaticBackupRetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.backupId">BackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.copyTagsToBackups">CopyTagsToBackups</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.dailyAutomaticBackupStartTime">DailyAutomaticBackupStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.deploymentType">DeploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.diskIopsConfiguration">DiskIopsConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList">DataAwsFsxWindowsFileSystemDiskIopsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.networkInterfaceIds">NetworkInterfaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.preferredFileServerIp">PreferredFileServerIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.preferredSubnetId">PreferredSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.skipFinalBackup">SkipFinalBackup</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.storageCapacity">StorageCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.throughputCapacity">ThroughputCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.weeklyMaintenanceStartTime">WeeklyMaintenanceStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ActiveDirectoryId`<sup>Required</sup> <a name="ActiveDirectoryId" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.activeDirectoryId"></a>

```csharp
public string ActiveDirectoryId { get; }
```

- *Type:* string

---

##### `Aliases`<sup>Required</sup> <a name="Aliases" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.aliases"></a>

```csharp
public string[] Aliases { get; }
```

- *Type:* string[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AuditLogConfiguration`<sup>Required</sup> <a name="AuditLogConfiguration" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.auditLogConfiguration"></a>

```csharp
public DataAwsFsxWindowsFileSystemAuditLogConfigurationList AuditLogConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList">DataAwsFsxWindowsFileSystemAuditLogConfigurationList</a>

---

##### `AutomaticBackupRetentionDays`<sup>Required</sup> <a name="AutomaticBackupRetentionDays" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.automaticBackupRetentionDays"></a>

```csharp
public double AutomaticBackupRetentionDays { get; }
```

- *Type:* double

---

##### `BackupId`<sup>Required</sup> <a name="BackupId" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.backupId"></a>

```csharp
public string BackupId { get; }
```

- *Type:* string

---

##### `CopyTagsToBackups`<sup>Required</sup> <a name="CopyTagsToBackups" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.copyTagsToBackups"></a>

```csharp
public IResolvable CopyTagsToBackups { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `DailyAutomaticBackupStartTime`<sup>Required</sup> <a name="DailyAutomaticBackupStartTime" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.dailyAutomaticBackupStartTime"></a>

```csharp
public string DailyAutomaticBackupStartTime { get; }
```

- *Type:* string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.deploymentType"></a>

```csharp
public string DeploymentType { get; }
```

- *Type:* string

---

##### `DiskIopsConfiguration`<sup>Required</sup> <a name="DiskIopsConfiguration" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.diskIopsConfiguration"></a>

```csharp
public DataAwsFsxWindowsFileSystemDiskIopsConfigurationList DiskIopsConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList">DataAwsFsxWindowsFileSystemDiskIopsConfigurationList</a>

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `NetworkInterfaceIds`<sup>Required</sup> <a name="NetworkInterfaceIds" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.networkInterfaceIds"></a>

```csharp
public string[] NetworkInterfaceIds { get; }
```

- *Type:* string[]

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `PreferredFileServerIp`<sup>Required</sup> <a name="PreferredFileServerIp" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.preferredFileServerIp"></a>

```csharp
public string PreferredFileServerIp { get; }
```

- *Type:* string

---

##### `PreferredSubnetId`<sup>Required</sup> <a name="PreferredSubnetId" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.preferredSubnetId"></a>

```csharp
public string PreferredSubnetId { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SkipFinalBackup`<sup>Required</sup> <a name="SkipFinalBackup" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.skipFinalBackup"></a>

```csharp
public IResolvable SkipFinalBackup { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `StorageCapacity`<sup>Required</sup> <a name="StorageCapacity" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.storageCapacity"></a>

```csharp
public double StorageCapacity { get; }
```

- *Type:* double

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `ThroughputCapacity`<sup>Required</sup> <a name="ThroughputCapacity" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.throughputCapacity"></a>

```csharp
public double ThroughputCapacity { get; }
```

- *Type:* double

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `WeeklyMaintenanceStartTime`<sup>Required</sup> <a name="WeeklyMaintenanceStartTime" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.weeklyMaintenanceStartTime"></a>

```csharp
public string WeeklyMaintenanceStartTime { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsFsxWindowsFileSystemAuditLogConfiguration <a name="DataAwsFsxWindowsFileSystemAuditLogConfiguration" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsFsxWindowsFileSystemAuditLogConfiguration {

};
```


### DataAwsFsxWindowsFileSystemConfig <a name="DataAwsFsxWindowsFileSystemConfig" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsFsxWindowsFileSystemConfig {
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
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/fsx_windows_file_system#id DataAwsFsxWindowsFileSystem#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/fsx_windows_file_system#tags DataAwsFsxWindowsFileSystem#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/fsx_windows_file_system#id DataAwsFsxWindowsFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/fsx_windows_file_system#region DataAwsFsxWindowsFileSystem#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/fsx_windows_file_system#tags DataAwsFsxWindowsFileSystem#tags}.

---

### DataAwsFsxWindowsFileSystemDiskIopsConfiguration <a name="DataAwsFsxWindowsFileSystemDiskIopsConfiguration" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsFsxWindowsFileSystemDiskIopsConfiguration {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsFsxWindowsFileSystemAuditLogConfigurationList <a name="DataAwsFsxWindowsFileSystemAuditLogConfigurationList" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsFsxWindowsFileSystemAuditLogConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.get"></a>

```csharp
private DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference <a name="DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.auditLogDestination">AuditLogDestination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileAccessAuditLogLevel">FileAccessAuditLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileShareAccessAuditLogLevel">FileShareAccessAuditLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfiguration">DataAwsFsxWindowsFileSystemAuditLogConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuditLogDestination`<sup>Required</sup> <a name="AuditLogDestination" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.auditLogDestination"></a>

```csharp
public string AuditLogDestination { get; }
```

- *Type:* string

---

##### `FileAccessAuditLogLevel`<sup>Required</sup> <a name="FileAccessAuditLogLevel" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileAccessAuditLogLevel"></a>

```csharp
public string FileAccessAuditLogLevel { get; }
```

- *Type:* string

---

##### `FileShareAccessAuditLogLevel`<sup>Required</sup> <a name="FileShareAccessAuditLogLevel" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileShareAccessAuditLogLevel"></a>

```csharp
public string FileShareAccessAuditLogLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsFsxWindowsFileSystemAuditLogConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfiguration">DataAwsFsxWindowsFileSystemAuditLogConfiguration</a>

---


### DataAwsFsxWindowsFileSystemDiskIopsConfigurationList <a name="DataAwsFsxWindowsFileSystemDiskIopsConfigurationList" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsFsxWindowsFileSystemDiskIopsConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.get"></a>

```csharp
private DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference <a name="DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfiguration">DataAwsFsxWindowsFileSystemDiskIopsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsFsxWindowsFileSystemDiskIopsConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfiguration">DataAwsFsxWindowsFileSystemDiskIopsConfiguration</a>

---



