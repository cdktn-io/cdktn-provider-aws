# `dataAwsS3BucketObjectLockConfiguration` Submodule <a name="`dataAwsS3BucketObjectLockConfiguration` Submodule" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsS3BucketObjectLockConfiguration <a name="DataAwsS3BucketObjectLockConfiguration" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/s3_bucket_object_lock_configuration aws_s3_bucket_object_lock_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3BucketObjectLockConfiguration(Construct Scope, string Id, DataAwsS3BucketObjectLockConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig">DataAwsS3BucketObjectLockConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig">DataAwsS3BucketObjectLockConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.resetExpectedBucketOwner">ResetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetExpectedBucketOwner` <a name="ResetExpectedBucketOwner" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.resetExpectedBucketOwner"></a>

```csharp
private void ResetExpectedBucketOwner()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsS3BucketObjectLockConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsS3BucketObjectLockConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsS3BucketObjectLockConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsS3BucketObjectLockConfiguration.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsS3BucketObjectLockConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsS3BucketObjectLockConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsS3BucketObjectLockConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsS3BucketObjectLockConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/s3_bucket_object_lock_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsS3BucketObjectLockConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.objectLockEnabled">ObjectLockEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList">DataAwsS3BucketObjectLockConfigurationRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.expectedBucketOwnerInput">ExpectedBucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ObjectLockEnabled`<sup>Required</sup> <a name="ObjectLockEnabled" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.objectLockEnabled"></a>

```csharp
public string ObjectLockEnabled { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.rule"></a>

```csharp
public DataAwsS3BucketObjectLockConfigurationRuleList Rule { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList">DataAwsS3BucketObjectLockConfigurationRuleList</a>

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `ExpectedBucketOwnerInput`<sup>Optional</sup> <a name="ExpectedBucketOwnerInput" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.expectedBucketOwnerInput"></a>

```csharp
public string ExpectedBucketOwnerInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `ExpectedBucketOwner`<sup>Required</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.expectedBucketOwner"></a>

```csharp
public string ExpectedBucketOwner { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsS3BucketObjectLockConfigurationConfig <a name="DataAwsS3BucketObjectLockConfigurationConfig" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3BucketObjectLockConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Bucket,
    string ExpectedBucketOwner = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/s3_bucket_object_lock_configuration#bucket DataAwsS3BucketObjectLockConfiguration#bucket}. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/s3_bucket_object_lock_configuration#expected_bucket_owner DataAwsS3BucketObjectLockConfiguration#expected_bucket_owner}. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/s3_bucket_object_lock_configuration#bucket DataAwsS3BucketObjectLockConfiguration#bucket}.

---

##### `ExpectedBucketOwner`<sup>Optional</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.expectedBucketOwner"></a>

```csharp
public string ExpectedBucketOwner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/s3_bucket_object_lock_configuration#expected_bucket_owner DataAwsS3BucketObjectLockConfiguration#expected_bucket_owner}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/s3_bucket_object_lock_configuration#region DataAwsS3BucketObjectLockConfiguration#region}

---

### DataAwsS3BucketObjectLockConfigurationRule <a name="DataAwsS3BucketObjectLockConfigurationRule" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3BucketObjectLockConfigurationRule {

};
```


### DataAwsS3BucketObjectLockConfigurationRuleDefaultRetention <a name="DataAwsS3BucketObjectLockConfigurationRuleDefaultRetention" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetention"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetention.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3BucketObjectLockConfigurationRuleDefaultRetention {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList <a name="DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.get"></a>

```csharp
private DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference <a name="DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.days">Days</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.years">Years</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetention">DataAwsS3BucketObjectLockConfigurationRuleDefaultRetention</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.days"></a>

```csharp
public double Days { get; }
```

- *Type:* double

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Years`<sup>Required</sup> <a name="Years" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.years"></a>

```csharp
public double Years { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.internalValue"></a>

```csharp
public DataAwsS3BucketObjectLockConfigurationRuleDefaultRetention InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetention">DataAwsS3BucketObjectLockConfigurationRuleDefaultRetention</a>

---


### DataAwsS3BucketObjectLockConfigurationRuleList <a name="DataAwsS3BucketObjectLockConfigurationRuleList" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3BucketObjectLockConfigurationRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.get"></a>

```csharp
private DataAwsS3BucketObjectLockConfigurationRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsS3BucketObjectLockConfigurationRuleOutputReference <a name="DataAwsS3BucketObjectLockConfigurationRuleOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsS3BucketObjectLockConfigurationRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.property.defaultRetention">DefaultRetention</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList">DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRule">DataAwsS3BucketObjectLockConfigurationRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultRetention`<sup>Required</sup> <a name="DefaultRetention" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.property.defaultRetention"></a>

```csharp
public DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList DefaultRetention { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList">DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.property.internalValue"></a>

```csharp
public DataAwsS3BucketObjectLockConfigurationRule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRule">DataAwsS3BucketObjectLockConfigurationRule</a>

---



