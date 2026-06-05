# `dataAwsS3FilesAccessPoint` Submodule <a name="`dataAwsS3FilesAccessPoint` Submodule" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsS3FilesAccessPoint <a name="DataAwsS3FilesAccessPoint" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/s3files_access_point aws_s3files_access_point}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3FilesAccessPoint(Construct Scope, string Id, DataAwsS3FilesAccessPointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig">DataAwsS3FilesAccessPointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig">DataAwsS3FilesAccessPointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.putPosixUser">PutPosixUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.putRootDirectory">PutRootDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.resetPosixUser">ResetPosixUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.resetRootDirectory">ResetRootDirectory</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutPosixUser` <a name="PutPosixUser" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.putPosixUser"></a>

```csharp
private void PutPosixUser(IResolvable|DataAwsS3FilesAccessPointPosixUser[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.putPosixUser.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUser">DataAwsS3FilesAccessPointPosixUser</a>[]

---

##### `PutRootDirectory` <a name="PutRootDirectory" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.putRootDirectory"></a>

```csharp
private void PutRootDirectory(IResolvable|DataAwsS3FilesAccessPointRootDirectory[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.putRootDirectory.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectory">DataAwsS3FilesAccessPointRootDirectory</a>[]

---

##### `ResetPosixUser` <a name="ResetPosixUser" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.resetPosixUser"></a>

```csharp
private void ResetPosixUser()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRootDirectory` <a name="ResetRootDirectory" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.resetRootDirectory"></a>

```csharp
private void ResetRootDirectory()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsS3FilesAccessPoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsS3FilesAccessPoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsS3FilesAccessPoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsS3FilesAccessPoint.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsS3FilesAccessPoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsS3FilesAccessPoint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsS3FilesAccessPoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsS3FilesAccessPoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/s3files_access_point#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsS3FilesAccessPoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.posixUser">PosixUser</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList">DataAwsS3FilesAccessPointPosixUserList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.rootDirectory">RootDirectory</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList">DataAwsS3FilesAccessPointRootDirectoryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.posixUserInput">PosixUserInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUser">DataAwsS3FilesAccessPointPosixUser</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.rootDirectoryInput">RootDirectoryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectory">DataAwsS3FilesAccessPointRootDirectory</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `PosixUser`<sup>Required</sup> <a name="PosixUser" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.posixUser"></a>

```csharp
public DataAwsS3FilesAccessPointPosixUserList PosixUser { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList">DataAwsS3FilesAccessPointPosixUserList</a>

---

##### `RootDirectory`<sup>Required</sup> <a name="RootDirectory" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.rootDirectory"></a>

```csharp
public DataAwsS3FilesAccessPointRootDirectoryList RootDirectory { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList">DataAwsS3FilesAccessPointRootDirectoryList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PosixUserInput`<sup>Optional</sup> <a name="PosixUserInput" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.posixUserInput"></a>

```csharp
public IResolvable|DataAwsS3FilesAccessPointPosixUser[] PosixUserInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUser">DataAwsS3FilesAccessPointPosixUser</a>[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RootDirectoryInput`<sup>Optional</sup> <a name="RootDirectoryInput" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.rootDirectoryInput"></a>

```csharp
public IResolvable|DataAwsS3FilesAccessPointRootDirectory[] RootDirectoryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectory">DataAwsS3FilesAccessPointRootDirectory</a>[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsS3FilesAccessPointConfig <a name="DataAwsS3FilesAccessPointConfig" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3FilesAccessPointConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id,
    IResolvable|DataAwsS3FilesAccessPointPosixUser[] PosixUser = null,
    string Region = null,
    IResolvable|DataAwsS3FilesAccessPointRootDirectory[] RootDirectory = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.id">Id</a></code> | <code>string</code> | Access point ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.posixUser">PosixUser</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUser">DataAwsS3FilesAccessPointPosixUser</a>[]</code> | posix_user block. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.rootDirectory">RootDirectory</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectory">DataAwsS3FilesAccessPointRootDirectory</a>[]</code> | root_directory block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Access point ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/s3files_access_point#id DataAwsS3FilesAccessPoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PosixUser`<sup>Optional</sup> <a name="PosixUser" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.posixUser"></a>

```csharp
public IResolvable|DataAwsS3FilesAccessPointPosixUser[] PosixUser { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUser">DataAwsS3FilesAccessPointPosixUser</a>[]

posix_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/s3files_access_point#posix_user DataAwsS3FilesAccessPoint#posix_user}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/s3files_access_point#region DataAwsS3FilesAccessPoint#region}

---

##### `RootDirectory`<sup>Optional</sup> <a name="RootDirectory" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.rootDirectory"></a>

```csharp
public IResolvable|DataAwsS3FilesAccessPointRootDirectory[] RootDirectory { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectory">DataAwsS3FilesAccessPointRootDirectory</a>[]

root_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/s3files_access_point#root_directory DataAwsS3FilesAccessPoint#root_directory}

---

### DataAwsS3FilesAccessPointPosixUser <a name="DataAwsS3FilesAccessPointPosixUser" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUser.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3FilesAccessPointPosixUser {

};
```


### DataAwsS3FilesAccessPointRootDirectory <a name="DataAwsS3FilesAccessPointRootDirectory" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectory.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3FilesAccessPointRootDirectory {
    IResolvable|DataAwsS3FilesAccessPointRootDirectoryCreationPermissions[] CreationPermissions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectory.property.creationPermissions">CreationPermissions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissions">DataAwsS3FilesAccessPointRootDirectoryCreationPermissions</a>[]</code> | creation_permissions block. |

---

##### `CreationPermissions`<sup>Optional</sup> <a name="CreationPermissions" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectory.property.creationPermissions"></a>

```csharp
public IResolvable|DataAwsS3FilesAccessPointRootDirectoryCreationPermissions[] CreationPermissions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissions">DataAwsS3FilesAccessPointRootDirectoryCreationPermissions</a>[]

creation_permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/s3files_access_point#creation_permissions DataAwsS3FilesAccessPoint#creation_permissions}

---

### DataAwsS3FilesAccessPointRootDirectoryCreationPermissions <a name="DataAwsS3FilesAccessPointRootDirectoryCreationPermissions" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3FilesAccessPointRootDirectoryCreationPermissions {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsS3FilesAccessPointPosixUserList <a name="DataAwsS3FilesAccessPointPosixUserList" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3FilesAccessPointPosixUserList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.get"></a>

```csharp
private DataAwsS3FilesAccessPointPosixUserOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUser">DataAwsS3FilesAccessPointPosixUser</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.property.internalValue"></a>

```csharp
public IResolvable|DataAwsS3FilesAccessPointPosixUser[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUser">DataAwsS3FilesAccessPointPosixUser</a>[]

---


### DataAwsS3FilesAccessPointPosixUserOutputReference <a name="DataAwsS3FilesAccessPointPosixUserOutputReference" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3FilesAccessPointPosixUserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.property.gid">Gid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.property.secondaryGids">SecondaryGids</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.property.uid">Uid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUser">DataAwsS3FilesAccessPointPosixUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Gid`<sup>Required</sup> <a name="Gid" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.property.gid"></a>

```csharp
public double Gid { get; }
```

- *Type:* double

---

##### `SecondaryGids`<sup>Required</sup> <a name="SecondaryGids" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.property.secondaryGids"></a>

```csharp
public double[] SecondaryGids { get; }
```

- *Type:* double[]

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.property.uid"></a>

```csharp
public double Uid { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsS3FilesAccessPointPosixUser InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUser">DataAwsS3FilesAccessPointPosixUser</a>

---


### DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList <a name="DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.get"></a>

```csharp
private DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissions">DataAwsS3FilesAccessPointRootDirectoryCreationPermissions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.property.internalValue"></a>

```csharp
public IResolvable|DataAwsS3FilesAccessPointRootDirectoryCreationPermissions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissions">DataAwsS3FilesAccessPointRootDirectoryCreationPermissions</a>[]

---


### DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference <a name="DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerGid">OwnerGid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerUid">OwnerUid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.permissions">Permissions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissions">DataAwsS3FilesAccessPointRootDirectoryCreationPermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OwnerGid`<sup>Required</sup> <a name="OwnerGid" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerGid"></a>

```csharp
public double OwnerGid { get; }
```

- *Type:* double

---

##### `OwnerUid`<sup>Required</sup> <a name="OwnerUid" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerUid"></a>

```csharp
public double OwnerUid { get; }
```

- *Type:* double

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.permissions"></a>

```csharp
public string Permissions { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsS3FilesAccessPointRootDirectoryCreationPermissions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissions">DataAwsS3FilesAccessPointRootDirectoryCreationPermissions</a>

---


### DataAwsS3FilesAccessPointRootDirectoryList <a name="DataAwsS3FilesAccessPointRootDirectoryList" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3FilesAccessPointRootDirectoryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.get"></a>

```csharp
private DataAwsS3FilesAccessPointRootDirectoryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectory">DataAwsS3FilesAccessPointRootDirectory</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.property.internalValue"></a>

```csharp
public IResolvable|DataAwsS3FilesAccessPointRootDirectory[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectory">DataAwsS3FilesAccessPointRootDirectory</a>[]

---


### DataAwsS3FilesAccessPointRootDirectoryOutputReference <a name="DataAwsS3FilesAccessPointRootDirectoryOutputReference" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3FilesAccessPointRootDirectoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.putCreationPermissions">PutCreationPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.resetCreationPermissions">ResetCreationPermissions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCreationPermissions` <a name="PutCreationPermissions" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.putCreationPermissions"></a>

```csharp
private void PutCreationPermissions(IResolvable|DataAwsS3FilesAccessPointRootDirectoryCreationPermissions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.putCreationPermissions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissions">DataAwsS3FilesAccessPointRootDirectoryCreationPermissions</a>[]

---

##### `ResetCreationPermissions` <a name="ResetCreationPermissions" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.resetCreationPermissions"></a>

```csharp
private void ResetCreationPermissions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.property.creationPermissions">CreationPermissions</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList">DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.property.creationPermissionsInput">CreationPermissionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissions">DataAwsS3FilesAccessPointRootDirectoryCreationPermissions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectory">DataAwsS3FilesAccessPointRootDirectory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreationPermissions`<sup>Required</sup> <a name="CreationPermissions" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.property.creationPermissions"></a>

```csharp
public DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList CreationPermissions { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList">DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList</a>

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `CreationPermissionsInput`<sup>Optional</sup> <a name="CreationPermissionsInput" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.property.creationPermissionsInput"></a>

```csharp
public IResolvable|DataAwsS3FilesAccessPointRootDirectoryCreationPermissions[] CreationPermissionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissions">DataAwsS3FilesAccessPointRootDirectoryCreationPermissions</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsS3FilesAccessPointRootDirectory InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectory">DataAwsS3FilesAccessPointRootDirectory</a>

---



