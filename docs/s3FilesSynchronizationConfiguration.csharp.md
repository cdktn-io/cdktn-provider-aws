# `s3FilesSynchronizationConfiguration` Submodule <a name="`s3FilesSynchronizationConfiguration` Submodule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3FilesSynchronizationConfiguration <a name="S3FilesSynchronizationConfiguration" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/s3files_synchronization_configuration aws_s3files_synchronization_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3FilesSynchronizationConfiguration(Construct Scope, string Id, S3FilesSynchronizationConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig">S3FilesSynchronizationConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig">S3FilesSynchronizationConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.putExpirationDataRule">PutExpirationDataRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.putImportDataRule">PutImportDataRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetExpirationDataRule">ResetExpirationDataRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetImportDataRule">ResetImportDataRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetLatestVersionNumber">ResetLatestVersionNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExpirationDataRule` <a name="PutExpirationDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.putExpirationDataRule"></a>

```csharp
private void PutExpirationDataRule(IResolvable|S3FilesSynchronizationConfigurationExpirationDataRule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.putExpirationDataRule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a>[]

---

##### `PutImportDataRule` <a name="PutImportDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.putImportDataRule"></a>

```csharp
private void PutImportDataRule(IResolvable|S3FilesSynchronizationConfigurationImportDataRule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.putImportDataRule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a>[]

---

##### `ResetExpirationDataRule` <a name="ResetExpirationDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetExpirationDataRule"></a>

```csharp
private void ResetExpirationDataRule()
```

##### `ResetImportDataRule` <a name="ResetImportDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetImportDataRule"></a>

```csharp
private void ResetImportDataRule()
```

##### `ResetLatestVersionNumber` <a name="ResetLatestVersionNumber" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetLatestVersionNumber"></a>

```csharp
private void ResetLatestVersionNumber()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a S3FilesSynchronizationConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

S3FilesSynchronizationConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

S3FilesSynchronizationConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

S3FilesSynchronizationConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

S3FilesSynchronizationConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a S3FilesSynchronizationConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3FilesSynchronizationConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3FilesSynchronizationConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/s3files_synchronization_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the S3FilesSynchronizationConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.expirationDataRule">ExpirationDataRule</a></code> | <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList">S3FilesSynchronizationConfigurationExpirationDataRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.importDataRule">ImportDataRule</a></code> | <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList">S3FilesSynchronizationConfigurationImportDataRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.expirationDataRuleInput">ExpirationDataRuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.fileSystemIdInput">FileSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.importDataRuleInput">ImportDataRuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.latestVersionNumberInput">LatestVersionNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.latestVersionNumber">LatestVersionNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ExpirationDataRule`<sup>Required</sup> <a name="ExpirationDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.expirationDataRule"></a>

```csharp
public S3FilesSynchronizationConfigurationExpirationDataRuleList ExpirationDataRule { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList">S3FilesSynchronizationConfigurationExpirationDataRuleList</a>

---

##### `ImportDataRule`<sup>Required</sup> <a name="ImportDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.importDataRule"></a>

```csharp
public S3FilesSynchronizationConfigurationImportDataRuleList ImportDataRule { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList">S3FilesSynchronizationConfigurationImportDataRuleList</a>

---

##### `ExpirationDataRuleInput`<sup>Optional</sup> <a name="ExpirationDataRuleInput" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.expirationDataRuleInput"></a>

```csharp
public IResolvable|S3FilesSynchronizationConfigurationExpirationDataRule[] ExpirationDataRuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a>[]

---

##### `FileSystemIdInput`<sup>Optional</sup> <a name="FileSystemIdInput" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.fileSystemIdInput"></a>

```csharp
public string FileSystemIdInput { get; }
```

- *Type:* string

---

##### `ImportDataRuleInput`<sup>Optional</sup> <a name="ImportDataRuleInput" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.importDataRuleInput"></a>

```csharp
public IResolvable|S3FilesSynchronizationConfigurationImportDataRule[] ImportDataRuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a>[]

---

##### `LatestVersionNumberInput`<sup>Optional</sup> <a name="LatestVersionNumberInput" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.latestVersionNumberInput"></a>

```csharp
public double LatestVersionNumberInput { get; }
```

- *Type:* double

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; }
```

- *Type:* string

---

##### `LatestVersionNumber`<sup>Required</sup> <a name="LatestVersionNumber" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.latestVersionNumber"></a>

```csharp
public double LatestVersionNumber { get; }
```

- *Type:* double

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3FilesSynchronizationConfigurationConfig <a name="S3FilesSynchronizationConfigurationConfig" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3FilesSynchronizationConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string FileSystemId,
    IResolvable|S3FilesSynchronizationConfigurationExpirationDataRule[] ExpirationDataRule = null,
    IResolvable|S3FilesSynchronizationConfigurationImportDataRule[] ImportDataRule = null,
    double LatestVersionNumber = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | File system ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.expirationDataRule">ExpirationDataRule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a>[]</code> | expiration_data_rule block. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.importDataRule">ImportDataRule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a>[]</code> | import_data_rule block. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.latestVersionNumber">LatestVersionNumber</a></code> | <code>double</code> | Latest version number for optimistic locking. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; set; }
```

- *Type:* string

File system ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/s3files_synchronization_configuration#file_system_id S3FilesSynchronizationConfiguration#file_system_id}

---

##### `ExpirationDataRule`<sup>Optional</sup> <a name="ExpirationDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.expirationDataRule"></a>

```csharp
public IResolvable|S3FilesSynchronizationConfigurationExpirationDataRule[] ExpirationDataRule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a>[]

expiration_data_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/s3files_synchronization_configuration#expiration_data_rule S3FilesSynchronizationConfiguration#expiration_data_rule}

---

##### `ImportDataRule`<sup>Optional</sup> <a name="ImportDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.importDataRule"></a>

```csharp
public IResolvable|S3FilesSynchronizationConfigurationImportDataRule[] ImportDataRule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a>[]

import_data_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/s3files_synchronization_configuration#import_data_rule S3FilesSynchronizationConfiguration#import_data_rule}

---

##### `LatestVersionNumber`<sup>Optional</sup> <a name="LatestVersionNumber" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.latestVersionNumber"></a>

```csharp
public double LatestVersionNumber { get; set; }
```

- *Type:* double

Latest version number for optimistic locking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/s3files_synchronization_configuration#latest_version_number S3FilesSynchronizationConfiguration#latest_version_number}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/s3files_synchronization_configuration#region S3FilesSynchronizationConfiguration#region}

---

### S3FilesSynchronizationConfigurationExpirationDataRule <a name="S3FilesSynchronizationConfigurationExpirationDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3FilesSynchronizationConfigurationExpirationDataRule {
    double DaysAfterLastAccess
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule.property.daysAfterLastAccess">DaysAfterLastAccess</a></code> | <code>double</code> | Days after last access before data expires. |

---

##### `DaysAfterLastAccess`<sup>Required</sup> <a name="DaysAfterLastAccess" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule.property.daysAfterLastAccess"></a>

```csharp
public double DaysAfterLastAccess { get; set; }
```

- *Type:* double

Days after last access before data expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/s3files_synchronization_configuration#days_after_last_access S3FilesSynchronizationConfiguration#days_after_last_access}

---

### S3FilesSynchronizationConfigurationImportDataRule <a name="S3FilesSynchronizationConfigurationImportDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3FilesSynchronizationConfigurationImportDataRule {
    string Prefix,
    double SizeLessThan,
    string Trigger
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule.property.prefix">Prefix</a></code> | <code>string</code> | S3 prefix for import. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule.property.sizeLessThan">SizeLessThan</a></code> | <code>double</code> | Maximum file size to import. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule.property.trigger">Trigger</a></code> | <code>string</code> | Import trigger type. |

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

S3 prefix for import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/s3files_synchronization_configuration#prefix S3FilesSynchronizationConfiguration#prefix}

---

##### `SizeLessThan`<sup>Required</sup> <a name="SizeLessThan" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule.property.sizeLessThan"></a>

```csharp
public double SizeLessThan { get; set; }
```

- *Type:* double

Maximum file size to import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/s3files_synchronization_configuration#size_less_than S3FilesSynchronizationConfiguration#size_less_than}

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule.property.trigger"></a>

```csharp
public string Trigger { get; set; }
```

- *Type:* string

Import trigger type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/s3files_synchronization_configuration#trigger S3FilesSynchronizationConfiguration#trigger}

---

## Classes <a name="Classes" id="Classes"></a>

### S3FilesSynchronizationConfigurationExpirationDataRuleList <a name="S3FilesSynchronizationConfigurationExpirationDataRuleList" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3FilesSynchronizationConfigurationExpirationDataRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.get"></a>

```csharp
private S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.property.internalValue"></a>

```csharp
public IResolvable|S3FilesSynchronizationConfigurationExpirationDataRule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a>[]

---


### S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference <a name="S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.daysAfterLastAccessInput">DaysAfterLastAccessInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.daysAfterLastAccess">DaysAfterLastAccess</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysAfterLastAccessInput`<sup>Optional</sup> <a name="DaysAfterLastAccessInput" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.daysAfterLastAccessInput"></a>

```csharp
public double DaysAfterLastAccessInput { get; }
```

- *Type:* double

---

##### `DaysAfterLastAccess`<sup>Required</sup> <a name="DaysAfterLastAccess" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.daysAfterLastAccess"></a>

```csharp
public double DaysAfterLastAccess { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3FilesSynchronizationConfigurationExpirationDataRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a>

---


### S3FilesSynchronizationConfigurationImportDataRuleList <a name="S3FilesSynchronizationConfigurationImportDataRuleList" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3FilesSynchronizationConfigurationImportDataRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.get"></a>

```csharp
private S3FilesSynchronizationConfigurationImportDataRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.property.internalValue"></a>

```csharp
public IResolvable|S3FilesSynchronizationConfigurationImportDataRule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a>[]

---


### S3FilesSynchronizationConfigurationImportDataRuleOutputReference <a name="S3FilesSynchronizationConfigurationImportDataRuleOutputReference" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3FilesSynchronizationConfigurationImportDataRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.sizeLessThanInput">SizeLessThanInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.triggerInput">TriggerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.sizeLessThan">SizeLessThan</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.trigger">Trigger</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `SizeLessThanInput`<sup>Optional</sup> <a name="SizeLessThanInput" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.sizeLessThanInput"></a>

```csharp
public double SizeLessThanInput { get; }
```

- *Type:* double

---

##### `TriggerInput`<sup>Optional</sup> <a name="TriggerInput" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.triggerInput"></a>

```csharp
public string TriggerInput { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `SizeLessThan`<sup>Required</sup> <a name="SizeLessThan" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.sizeLessThan"></a>

```csharp
public double SizeLessThan { get; }
```

- *Type:* double

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.trigger"></a>

```csharp
public string Trigger { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3FilesSynchronizationConfigurationImportDataRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a>

---



