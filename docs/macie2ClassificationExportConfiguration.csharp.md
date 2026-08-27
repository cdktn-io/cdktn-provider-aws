# `macie2ClassificationExportConfiguration` Submodule <a name="`macie2ClassificationExportConfiguration` Submodule" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Macie2ClassificationExportConfiguration <a name="Macie2ClassificationExportConfiguration" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_export_configuration aws_macie2_classification_export_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Macie2ClassificationExportConfiguration(Construct Scope, string Id, Macie2ClassificationExportConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig">Macie2ClassificationExportConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig">Macie2ClassificationExportConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.putS3Destination">PutS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutS3Destination` <a name="PutS3Destination" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.putS3Destination"></a>

```csharp
private void PutS3Destination(Macie2ClassificationExportConfigurationS3Destination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.putS3Destination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Macie2ClassificationExportConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Macie2ClassificationExportConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Macie2ClassificationExportConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Macie2ClassificationExportConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Macie2ClassificationExportConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Macie2ClassificationExportConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Macie2ClassificationExportConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Macie2ClassificationExportConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_export_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Macie2ClassificationExportConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.s3Destination">S3Destination</a></code> | <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference">Macie2ClassificationExportConfigurationS3DestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.s3DestinationInput">S3DestinationInput</a></code> | <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `S3Destination`<sup>Required</sup> <a name="S3Destination" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.s3Destination"></a>

```csharp
public Macie2ClassificationExportConfigurationS3DestinationOutputReference S3Destination { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference">Macie2ClassificationExportConfigurationS3DestinationOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `S3DestinationInput`<sup>Optional</sup> <a name="S3DestinationInput" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.s3DestinationInput"></a>

```csharp
public Macie2ClassificationExportConfigurationS3Destination S3DestinationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Macie2ClassificationExportConfigurationConfig <a name="Macie2ClassificationExportConfigurationConfig" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Macie2ClassificationExportConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    Macie2ClassificationExportConfigurationS3Destination S3Destination,
    string Id = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.s3Destination">S3Destination</a></code> | <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a></code> | s3_destination block. |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_export_configuration#id Macie2ClassificationExportConfiguration#id}. |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `S3Destination`<sup>Required</sup> <a name="S3Destination" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.s3Destination"></a>

```csharp
public Macie2ClassificationExportConfigurationS3Destination S3Destination { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a>

s3_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_export_configuration#s3_destination Macie2ClassificationExportConfiguration#s3_destination}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_export_configuration#id Macie2ClassificationExportConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_export_configuration#region Macie2ClassificationExportConfiguration#region}

---

### Macie2ClassificationExportConfigurationS3Destination <a name="Macie2ClassificationExportConfigurationS3Destination" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Macie2ClassificationExportConfigurationS3Destination {
    string BucketName,
    string KmsKeyArn,
    string KeyPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination.property.bucketName">BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_export_configuration#bucket_name Macie2ClassificationExportConfiguration#bucket_name}. |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_export_configuration#kms_key_arn Macie2ClassificationExportConfiguration#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination.property.keyPrefix">KeyPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_export_configuration#key_prefix Macie2ClassificationExportConfiguration#key_prefix}. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_export_configuration#bucket_name Macie2ClassificationExportConfiguration#bucket_name}.

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_export_configuration#kms_key_arn Macie2ClassificationExportConfiguration#kms_key_arn}.

---

##### `KeyPrefix`<sup>Optional</sup> <a name="KeyPrefix" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination.property.keyPrefix"></a>

```csharp
public string KeyPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/macie2_classification_export_configuration#key_prefix Macie2ClassificationExportConfiguration#key_prefix}.

---

## Classes <a name="Classes" id="Classes"></a>

### Macie2ClassificationExportConfigurationS3DestinationOutputReference <a name="Macie2ClassificationExportConfigurationS3DestinationOutputReference" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Macie2ClassificationExportConfigurationS3DestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.resetKeyPrefix">ResetKeyPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyPrefix` <a name="ResetKeyPrefix" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.resetKeyPrefix"></a>

```csharp
private void ResetKeyPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.keyPrefixInput">KeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.keyPrefix">KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `KeyPrefixInput`<sup>Optional</sup> <a name="KeyPrefixInput" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.keyPrefixInput"></a>

```csharp
public string KeyPrefixInput { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `KeyPrefix`<sup>Required</sup> <a name="KeyPrefix" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.keyPrefix"></a>

```csharp
public string KeyPrefix { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.internalValue"></a>

```csharp
public Macie2ClassificationExportConfigurationS3Destination InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a>

---



