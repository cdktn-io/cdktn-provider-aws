# `dataAwsDocdbEngineVersion` Submodule <a name="`dataAwsDocdbEngineVersion` Submodule" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDocdbEngineVersion <a name="DataAwsDocdbEngineVersion" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/docdb_engine_version aws_docdb_engine_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsDocdbEngineVersion(Construct Scope, string Id, DataAwsDocdbEngineVersionConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig">DataAwsDocdbEngineVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig">DataAwsDocdbEngineVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.resetEngine">ResetEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.resetParameterGroupFamily">ResetParameterGroupFamily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.resetPreferredVersions">ResetPreferredVersions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetEngine` <a name="ResetEngine" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.resetEngine"></a>

```csharp
private void ResetEngine()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetParameterGroupFamily` <a name="ResetParameterGroupFamily" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.resetParameterGroupFamily"></a>

```csharp
private void ResetParameterGroupFamily()
```

##### `ResetPreferredVersions` <a name="ResetPreferredVersions" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.resetPreferredVersions"></a>

```csharp
private void ResetPreferredVersions()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.resetVersion"></a>

```csharp
private void ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsDocdbEngineVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsDocdbEngineVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsDocdbEngineVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsDocdbEngineVersion.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsDocdbEngineVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsDocdbEngineVersion resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsDocdbEngineVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsDocdbEngineVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/docdb_engine_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsDocdbEngineVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.engineDescription">EngineDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.exportableLogTypes">ExportableLogTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.supportsLogExportsToCloudwatch">SupportsLogExportsToCloudwatch</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.validUpgradeTargets">ValidUpgradeTargets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.versionDescription">VersionDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.engineInput">EngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.parameterGroupFamilyInput">ParameterGroupFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.preferredVersionsInput">PreferredVersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.parameterGroupFamily">ParameterGroupFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.preferredVersions">PreferredVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `EngineDescription`<sup>Required</sup> <a name="EngineDescription" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.engineDescription"></a>

```csharp
public string EngineDescription { get; }
```

- *Type:* string

---

##### `ExportableLogTypes`<sup>Required</sup> <a name="ExportableLogTypes" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.exportableLogTypes"></a>

```csharp
public string[] ExportableLogTypes { get; }
```

- *Type:* string[]

---

##### `SupportsLogExportsToCloudwatch`<sup>Required</sup> <a name="SupportsLogExportsToCloudwatch" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.supportsLogExportsToCloudwatch"></a>

```csharp
public IResolvable SupportsLogExportsToCloudwatch { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ValidUpgradeTargets`<sup>Required</sup> <a name="ValidUpgradeTargets" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.validUpgradeTargets"></a>

```csharp
public string[] ValidUpgradeTargets { get; }
```

- *Type:* string[]

---

##### `VersionDescription`<sup>Required</sup> <a name="VersionDescription" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.versionDescription"></a>

```csharp
public string VersionDescription { get; }
```

- *Type:* string

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.engineInput"></a>

```csharp
public string EngineInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ParameterGroupFamilyInput`<sup>Optional</sup> <a name="ParameterGroupFamilyInput" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.parameterGroupFamilyInput"></a>

```csharp
public string ParameterGroupFamilyInput { get; }
```

- *Type:* string

---

##### `PreferredVersionsInput`<sup>Optional</sup> <a name="PreferredVersionsInput" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.preferredVersionsInput"></a>

```csharp
public string[] PreferredVersionsInput { get; }
```

- *Type:* string[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ParameterGroupFamily`<sup>Required</sup> <a name="ParameterGroupFamily" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.parameterGroupFamily"></a>

```csharp
public string ParameterGroupFamily { get; }
```

- *Type:* string

---

##### `PreferredVersions`<sup>Required</sup> <a name="PreferredVersions" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.preferredVersions"></a>

```csharp
public string[] PreferredVersions { get; }
```

- *Type:* string[]

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDocdbEngineVersionConfig <a name="DataAwsDocdbEngineVersionConfig" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsDocdbEngineVersionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Engine = null,
    string Id = null,
    string ParameterGroupFamily = null,
    string[] PreferredVersions = null,
    string Region = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.engine">Engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/docdb_engine_version#engine DataAwsDocdbEngineVersion#engine}. |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/docdb_engine_version#id DataAwsDocdbEngineVersion#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.parameterGroupFamily">ParameterGroupFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/docdb_engine_version#parameter_group_family DataAwsDocdbEngineVersion#parameter_group_family}. |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.preferredVersions">PreferredVersions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/docdb_engine_version#preferred_versions DataAwsDocdbEngineVersion#preferred_versions}. |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/docdb_engine_version#version DataAwsDocdbEngineVersion#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Engine`<sup>Optional</sup> <a name="Engine" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.engine"></a>

```csharp
public string Engine { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/docdb_engine_version#engine DataAwsDocdbEngineVersion#engine}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/docdb_engine_version#id DataAwsDocdbEngineVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ParameterGroupFamily`<sup>Optional</sup> <a name="ParameterGroupFamily" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.parameterGroupFamily"></a>

```csharp
public string ParameterGroupFamily { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/docdb_engine_version#parameter_group_family DataAwsDocdbEngineVersion#parameter_group_family}.

---

##### `PreferredVersions`<sup>Optional</sup> <a name="PreferredVersions" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.preferredVersions"></a>

```csharp
public string[] PreferredVersions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/docdb_engine_version#preferred_versions DataAwsDocdbEngineVersion#preferred_versions}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/docdb_engine_version#region DataAwsDocdbEngineVersion#region}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/docdb_engine_version#version DataAwsDocdbEngineVersion#version}.

---



