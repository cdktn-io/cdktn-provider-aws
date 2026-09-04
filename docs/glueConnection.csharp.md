# `glueConnection` Submodule <a name="`glueConnection` Submodule" id="@cdktn/provider-aws.glueConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueConnection <a name="GlueConnection" id="@cdktn/provider-aws.glueConnection.GlueConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection aws_glue_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GlueConnection(Construct Scope, string Id, GlueConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig">GlueConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig">GlueConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.putAuthenticationConfiguration">PutAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.putPhysicalConnectionRequirements">PutPhysicalConnectionRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetAthenaProperties">ResetAthenaProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetAuthenticationConfiguration">ResetAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetConnectionProperties">ResetConnectionProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetConnectionType">ResetConnectionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetMatchCriteria">ResetMatchCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetPhysicalConnectionRequirements">ResetPhysicalConnectionRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.glueConnection.GlueConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.glueConnection.GlueConnection.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.glueConnection.GlueConnection.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.glueConnection.GlueConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.glueConnection.GlueConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.glueConnection.GlueConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.glueConnection.GlueConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.glueConnection.GlueConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.glueConnection.GlueConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.glueConnection.GlueConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.glueConnection.GlueConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.glueConnection.GlueConnection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.glueConnection.GlueConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.glueConnection.GlueConnection.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.glueConnection.GlueConnection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.glueConnection.GlueConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.glueConnection.GlueConnection.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.glueConnection.GlueConnection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.glueConnection.GlueConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.glueConnection.GlueConnection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.glueConnection.GlueConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.glueConnection.GlueConnection.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.glueConnection.GlueConnection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.glueConnection.GlueConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthenticationConfiguration` <a name="PutAuthenticationConfiguration" id="@cdktn/provider-aws.glueConnection.GlueConnection.putAuthenticationConfiguration"></a>

```csharp
private void PutAuthenticationConfiguration(GlueConnectionAuthenticationConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.glueConnection.GlueConnection.putAuthenticationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration">GlueConnectionAuthenticationConfiguration</a>

---

##### `PutPhysicalConnectionRequirements` <a name="PutPhysicalConnectionRequirements" id="@cdktn/provider-aws.glueConnection.GlueConnection.putPhysicalConnectionRequirements"></a>

```csharp
private void PutPhysicalConnectionRequirements(GlueConnectionPhysicalConnectionRequirements Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.glueConnection.GlueConnection.putPhysicalConnectionRequirements.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements">GlueConnectionPhysicalConnectionRequirements</a>

---

##### `ResetAthenaProperties` <a name="ResetAthenaProperties" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetAthenaProperties"></a>

```csharp
private void ResetAthenaProperties()
```

##### `ResetAuthenticationConfiguration` <a name="ResetAuthenticationConfiguration" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetAuthenticationConfiguration"></a>

```csharp
private void ResetAuthenticationConfiguration()
```

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```

##### `ResetConnectionProperties` <a name="ResetConnectionProperties" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetConnectionProperties"></a>

```csharp
private void ResetConnectionProperties()
```

##### `ResetConnectionType` <a name="ResetConnectionType" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetConnectionType"></a>

```csharp
private void ResetConnectionType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMatchCriteria` <a name="ResetMatchCriteria" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetMatchCriteria"></a>

```csharp
private void ResetMatchCriteria()
```

##### `ResetPhysicalConnectionRequirements` <a name="ResetPhysicalConnectionRequirements" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetPhysicalConnectionRequirements"></a>

```csharp
private void ResetPhysicalConnectionRequirements()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GlueConnection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.glueConnection.GlueConnection.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

GlueConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.glueConnection.GlueConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.glueConnection.GlueConnection.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

GlueConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.glueConnection.GlueConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.glueConnection.GlueConnection.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

GlueConnection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.glueConnection.GlueConnection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.glueConnection.GlueConnection.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

GlueConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GlueConnection resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.glueConnection.GlueConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.glueConnection.GlueConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlueConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.glueConnection.GlueConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlueConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.glueConnection.GlueConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GlueConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.authenticationConfiguration">AuthenticationConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference">GlueConnectionAuthenticationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.physicalConnectionRequirements">PhysicalConnectionRequirements</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference">GlueConnectionPhysicalConnectionRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.athenaPropertiesInput">AthenaPropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.authenticationConfigurationInput">AuthenticationConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration">GlueConnectionAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.connectionPropertiesInput">ConnectionPropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.connectionTypeInput">ConnectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.matchCriteriaInput">MatchCriteriaInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.physicalConnectionRequirementsInput">PhysicalConnectionRequirementsInput</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements">GlueConnectionPhysicalConnectionRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.athenaProperties">AthenaProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.connectionProperties">ConnectionProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.connectionType">ConnectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.matchCriteria">MatchCriteria</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AuthenticationConfiguration`<sup>Required</sup> <a name="AuthenticationConfiguration" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.authenticationConfiguration"></a>

```csharp
public GlueConnectionAuthenticationConfigurationOutputReference AuthenticationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference">GlueConnectionAuthenticationConfigurationOutputReference</a>

---

##### `PhysicalConnectionRequirements`<sup>Required</sup> <a name="PhysicalConnectionRequirements" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.physicalConnectionRequirements"></a>

```csharp
public GlueConnectionPhysicalConnectionRequirementsOutputReference PhysicalConnectionRequirements { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference">GlueConnectionPhysicalConnectionRequirementsOutputReference</a>

---

##### `AthenaPropertiesInput`<sup>Optional</sup> <a name="AthenaPropertiesInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.athenaPropertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AthenaPropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AuthenticationConfigurationInput`<sup>Optional</sup> <a name="AuthenticationConfigurationInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.authenticationConfigurationInput"></a>

```csharp
public GlueConnectionAuthenticationConfiguration AuthenticationConfigurationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration">GlueConnectionAuthenticationConfiguration</a>

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `ConnectionPropertiesInput`<sup>Optional</sup> <a name="ConnectionPropertiesInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.connectionPropertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ConnectionPropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ConnectionTypeInput`<sup>Optional</sup> <a name="ConnectionTypeInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.connectionTypeInput"></a>

```csharp
public string ConnectionTypeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MatchCriteriaInput`<sup>Optional</sup> <a name="MatchCriteriaInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.matchCriteriaInput"></a>

```csharp
public string[] MatchCriteriaInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PhysicalConnectionRequirementsInput`<sup>Optional</sup> <a name="PhysicalConnectionRequirementsInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.physicalConnectionRequirementsInput"></a>

```csharp
public GlueConnectionPhysicalConnectionRequirements PhysicalConnectionRequirementsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements">GlueConnectionPhysicalConnectionRequirements</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AthenaProperties`<sup>Required</sup> <a name="AthenaProperties" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.athenaProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AthenaProperties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `ConnectionProperties`<sup>Required</sup> <a name="ConnectionProperties" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.connectionProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ConnectionProperties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.connectionType"></a>

```csharp
public string ConnectionType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MatchCriteria`<sup>Required</sup> <a name="MatchCriteria" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.matchCriteria"></a>

```csharp
public string[] MatchCriteria { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueConnectionAuthenticationConfiguration <a name="GlueConnectionAuthenticationConfiguration" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GlueConnectionAuthenticationConfiguration {
    string AuthenticationType,
    GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials BasicAuthenticationCredentials = null,
    System.Collections.Generic.IDictionary<string, string> CustomAuthenticationCredentials = null,
    string KmsKeyArn = null,
    GlueConnectionAuthenticationConfigurationOauth2Properties Oauth2Properties = null,
    string SecretArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#authentication_type GlueConnection#authentication_type}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.basicAuthenticationCredentials">BasicAuthenticationCredentials</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials</a></code> | basic_authentication_credentials block. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.customAuthenticationCredentials">CustomAuthenticationCredentials</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#custom_authentication_credentials GlueConnection#custom_authentication_credentials}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#kms_key_arn GlueConnection#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.oauth2Properties">Oauth2Properties</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties">GlueConnectionAuthenticationConfigurationOauth2Properties</a></code> | oauth2_properties block. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.secretArn">SecretArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#secret_arn GlueConnection#secret_arn}. |

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#authentication_type GlueConnection#authentication_type}.

---

##### `BasicAuthenticationCredentials`<sup>Optional</sup> <a name="BasicAuthenticationCredentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.basicAuthenticationCredentials"></a>

```csharp
public GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials BasicAuthenticationCredentials { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials</a>

basic_authentication_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#basic_authentication_credentials GlueConnection#basic_authentication_credentials}

---

##### `CustomAuthenticationCredentials`<sup>Optional</sup> <a name="CustomAuthenticationCredentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.customAuthenticationCredentials"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomAuthenticationCredentials { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#custom_authentication_credentials GlueConnection#custom_authentication_credentials}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#kms_key_arn GlueConnection#kms_key_arn}.

---

##### `Oauth2Properties`<sup>Optional</sup> <a name="Oauth2Properties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.oauth2Properties"></a>

```csharp
public GlueConnectionAuthenticationConfigurationOauth2Properties Oauth2Properties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties">GlueConnectionAuthenticationConfigurationOauth2Properties</a>

oauth2_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#oauth2_properties GlueConnection#oauth2_properties}

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.secretArn"></a>

```csharp
public string SecretArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#secret_arn GlueConnection#secret_arn}.

---

### GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials <a name="GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials {
    string Password,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#password GlueConnection#password}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#username GlueConnection#username}. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#password GlueConnection#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#username GlueConnection#username}.

---

### GlueConnectionAuthenticationConfigurationOauth2Properties <a name="GlueConnectionAuthenticationConfigurationOauth2Properties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GlueConnectionAuthenticationConfigurationOauth2Properties {
    GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties AuthorizationCodeProperties = null,
    GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication Oauth2ClientApplication = null,
    GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials Oauth2Credentials = null,
    string Oauth2GrantType = null,
    string TokenUrl = null,
    System.Collections.Generic.IDictionary<string, string> TokenUrlParametersMap = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.authorizationCodeProperties">AuthorizationCodeProperties</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties">GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties</a></code> | authorization_code_properties block. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.oauth2ClientApplication">Oauth2ClientApplication</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication</a></code> | oauth2_client_application block. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.oauth2Credentials">Oauth2Credentials</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials</a></code> | oauth2_credentials block. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.oauth2GrantType">Oauth2GrantType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#oauth2_grant_type GlueConnection#oauth2_grant_type}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.tokenUrl">TokenUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#token_url GlueConnection#token_url}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.tokenUrlParametersMap">TokenUrlParametersMap</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#token_url_parameters_map GlueConnection#token_url_parameters_map}. |

---

##### `AuthorizationCodeProperties`<sup>Optional</sup> <a name="AuthorizationCodeProperties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.authorizationCodeProperties"></a>

```csharp
public GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties AuthorizationCodeProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties">GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties</a>

authorization_code_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#authorization_code_properties GlueConnection#authorization_code_properties}

---

##### `Oauth2ClientApplication`<sup>Optional</sup> <a name="Oauth2ClientApplication" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.oauth2ClientApplication"></a>

```csharp
public GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication Oauth2ClientApplication { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication</a>

oauth2_client_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#oauth2_client_application GlueConnection#oauth2_client_application}

---

##### `Oauth2Credentials`<sup>Optional</sup> <a name="Oauth2Credentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.oauth2Credentials"></a>

```csharp
public GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials Oauth2Credentials { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials</a>

oauth2_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#oauth2_credentials GlueConnection#oauth2_credentials}

---

##### `Oauth2GrantType`<sup>Optional</sup> <a name="Oauth2GrantType" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.oauth2GrantType"></a>

```csharp
public string Oauth2GrantType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#oauth2_grant_type GlueConnection#oauth2_grant_type}.

---

##### `TokenUrl`<sup>Optional</sup> <a name="TokenUrl" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.tokenUrl"></a>

```csharp
public string TokenUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#token_url GlueConnection#token_url}.

---

##### `TokenUrlParametersMap`<sup>Optional</sup> <a name="TokenUrlParametersMap" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.tokenUrlParametersMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TokenUrlParametersMap { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#token_url_parameters_map GlueConnection#token_url_parameters_map}.

---

### GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties <a name="GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties {
    string AuthorizationCode,
    string RedirectUri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties.property.authorizationCode">AuthorizationCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#authorization_code GlueConnection#authorization_code}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties.property.redirectUri">RedirectUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#redirect_uri GlueConnection#redirect_uri}. |

---

##### `AuthorizationCode`<sup>Required</sup> <a name="AuthorizationCode" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties.property.authorizationCode"></a>

```csharp
public string AuthorizationCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#authorization_code GlueConnection#authorization_code}.

---

##### `RedirectUri`<sup>Required</sup> <a name="RedirectUri" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties.property.redirectUri"></a>

```csharp
public string RedirectUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#redirect_uri GlueConnection#redirect_uri}.

---

### GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication <a name="GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication {
    string AwsManagedClientApplicationReference = null,
    string UserManagedClientApplicationClientId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication.property.awsManagedClientApplicationReference">AwsManagedClientApplicationReference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#aws_managed_client_application_reference GlueConnection#aws_managed_client_application_reference}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication.property.userManagedClientApplicationClientId">UserManagedClientApplicationClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#user_managed_client_application_client_id GlueConnection#user_managed_client_application_client_id}. |

---

##### `AwsManagedClientApplicationReference`<sup>Optional</sup> <a name="AwsManagedClientApplicationReference" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication.property.awsManagedClientApplicationReference"></a>

```csharp
public string AwsManagedClientApplicationReference { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#aws_managed_client_application_reference GlueConnection#aws_managed_client_application_reference}.

---

##### `UserManagedClientApplicationClientId`<sup>Optional</sup> <a name="UserManagedClientApplicationClientId" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication.property.userManagedClientApplicationClientId"></a>

```csharp
public string UserManagedClientApplicationClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#user_managed_client_application_client_id GlueConnection#user_managed_client_application_client_id}.

---

### GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials <a name="GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials {
    string AccessToken = null,
    string JwtToken = null,
    string RefreshToken = null,
    string UserManagedClientApplicationClientSecret = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.property.accessToken">AccessToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#access_token GlueConnection#access_token}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.property.jwtToken">JwtToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#jwt_token GlueConnection#jwt_token}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.property.refreshToken">RefreshToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#refresh_token GlueConnection#refresh_token}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.property.userManagedClientApplicationClientSecret">UserManagedClientApplicationClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#user_managed_client_application_client_secret GlueConnection#user_managed_client_application_client_secret}. |

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.property.accessToken"></a>

```csharp
public string AccessToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#access_token GlueConnection#access_token}.

---

##### `JwtToken`<sup>Optional</sup> <a name="JwtToken" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.property.jwtToken"></a>

```csharp
public string JwtToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#jwt_token GlueConnection#jwt_token}.

---

##### `RefreshToken`<sup>Optional</sup> <a name="RefreshToken" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.property.refreshToken"></a>

```csharp
public string RefreshToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#refresh_token GlueConnection#refresh_token}.

---

##### `UserManagedClientApplicationClientSecret`<sup>Optional</sup> <a name="UserManagedClientApplicationClientSecret" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.property.userManagedClientApplicationClientSecret"></a>

```csharp
public string UserManagedClientApplicationClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#user_managed_client_application_client_secret GlueConnection#user_managed_client_application_client_secret}.

---

### GlueConnectionConfig <a name="GlueConnectionConfig" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GlueConnectionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    System.Collections.Generic.IDictionary<string, string> AthenaProperties = null,
    GlueConnectionAuthenticationConfiguration AuthenticationConfiguration = null,
    string CatalogId = null,
    System.Collections.Generic.IDictionary<string, string> ConnectionProperties = null,
    string ConnectionType = null,
    string Description = null,
    string Id = null,
    string[] MatchCriteria = null,
    GlueConnectionPhysicalConnectionRequirements PhysicalConnectionRequirements = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#name GlueConnection#name}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.athenaProperties">AthenaProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#athena_properties GlueConnection#athena_properties}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.authenticationConfiguration">AuthenticationConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration">GlueConnectionAuthenticationConfiguration</a></code> | authentication_configuration block. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.catalogId">CatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#catalog_id GlueConnection#catalog_id}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.connectionProperties">ConnectionProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#connection_properties GlueConnection#connection_properties}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.connectionType">ConnectionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#connection_type GlueConnection#connection_type}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#description GlueConnection#description}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#id GlueConnection#id}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.matchCriteria">MatchCriteria</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#match_criteria GlueConnection#match_criteria}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.physicalConnectionRequirements">PhysicalConnectionRequirements</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements">GlueConnectionPhysicalConnectionRequirements</a></code> | physical_connection_requirements block. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#tags GlueConnection#tags}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#tags_all GlueConnection#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#name GlueConnection#name}.

---

##### `AthenaProperties`<sup>Optional</sup> <a name="AthenaProperties" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.athenaProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AthenaProperties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#athena_properties GlueConnection#athena_properties}.

---

##### `AuthenticationConfiguration`<sup>Optional</sup> <a name="AuthenticationConfiguration" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.authenticationConfiguration"></a>

```csharp
public GlueConnectionAuthenticationConfiguration AuthenticationConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration">GlueConnectionAuthenticationConfiguration</a>

authentication_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#authentication_configuration GlueConnection#authentication_configuration}

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#catalog_id GlueConnection#catalog_id}.

---

##### `ConnectionProperties`<sup>Optional</sup> <a name="ConnectionProperties" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.connectionProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ConnectionProperties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#connection_properties GlueConnection#connection_properties}.

---

##### `ConnectionType`<sup>Optional</sup> <a name="ConnectionType" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.connectionType"></a>

```csharp
public string ConnectionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#connection_type GlueConnection#connection_type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#description GlueConnection#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#id GlueConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MatchCriteria`<sup>Optional</sup> <a name="MatchCriteria" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.matchCriteria"></a>

```csharp
public string[] MatchCriteria { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#match_criteria GlueConnection#match_criteria}.

---

##### `PhysicalConnectionRequirements`<sup>Optional</sup> <a name="PhysicalConnectionRequirements" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.physicalConnectionRequirements"></a>

```csharp
public GlueConnectionPhysicalConnectionRequirements PhysicalConnectionRequirements { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements">GlueConnectionPhysicalConnectionRequirements</a>

physical_connection_requirements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#physical_connection_requirements GlueConnection#physical_connection_requirements}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#region GlueConnection#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#tags GlueConnection#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#tags_all GlueConnection#tags_all}.

---

### GlueConnectionPhysicalConnectionRequirements <a name="GlueConnectionPhysicalConnectionRequirements" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GlueConnectionPhysicalConnectionRequirements {
    string AvailabilityZone = null,
    string[] SecurityGroupIdList = null,
    string SubnetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#availability_zone GlueConnection#availability_zone}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements.property.securityGroupIdList">SecurityGroupIdList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#security_group_id_list GlueConnection#security_group_id_list}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#subnet_id GlueConnection#subnet_id}. |

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#availability_zone GlueConnection#availability_zone}.

---

##### `SecurityGroupIdList`<sup>Optional</sup> <a name="SecurityGroupIdList" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements.property.securityGroupIdList"></a>

```csharp
public string[] SecurityGroupIdList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#security_group_id_list GlueConnection#security_group_id_list}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_connection#subnet_id GlueConnection#subnet_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference <a name="GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.internalValue"></a>

```csharp
public GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials</a>

---


### GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference <a name="GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCodeInput">AuthorizationCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUriInput">RedirectUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCode">AuthorizationCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUri">RedirectUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties">GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationCodeInput`<sup>Optional</sup> <a name="AuthorizationCodeInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCodeInput"></a>

```csharp
public string AuthorizationCodeInput { get; }
```

- *Type:* string

---

##### `RedirectUriInput`<sup>Optional</sup> <a name="RedirectUriInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUriInput"></a>

```csharp
public string RedirectUriInput { get; }
```

- *Type:* string

---

##### `AuthorizationCode`<sup>Required</sup> <a name="AuthorizationCode" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCode"></a>

```csharp
public string AuthorizationCode { get; }
```

- *Type:* string

---

##### `RedirectUri`<sup>Required</sup> <a name="RedirectUri" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUri"></a>

```csharp
public string RedirectUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.internalValue"></a>

```csharp
public GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties">GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties</a>

---


### GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference <a name="GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.resetAwsManagedClientApplicationReference">ResetAwsManagedClientApplicationReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.resetUserManagedClientApplicationClientId">ResetUserManagedClientApplicationClientId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAwsManagedClientApplicationReference` <a name="ResetAwsManagedClientApplicationReference" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.resetAwsManagedClientApplicationReference"></a>

```csharp
private void ResetAwsManagedClientApplicationReference()
```

##### `ResetUserManagedClientApplicationClientId` <a name="ResetUserManagedClientApplicationClientId" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.resetUserManagedClientApplicationClientId"></a>

```csharp
private void ResetUserManagedClientApplicationClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.awsManagedClientApplicationReferenceInput">AwsManagedClientApplicationReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.userManagedClientApplicationClientIdInput">UserManagedClientApplicationClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.awsManagedClientApplicationReference">AwsManagedClientApplicationReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.userManagedClientApplicationClientId">UserManagedClientApplicationClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsManagedClientApplicationReferenceInput`<sup>Optional</sup> <a name="AwsManagedClientApplicationReferenceInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.awsManagedClientApplicationReferenceInput"></a>

```csharp
public string AwsManagedClientApplicationReferenceInput { get; }
```

- *Type:* string

---

##### `UserManagedClientApplicationClientIdInput`<sup>Optional</sup> <a name="UserManagedClientApplicationClientIdInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.userManagedClientApplicationClientIdInput"></a>

```csharp
public string UserManagedClientApplicationClientIdInput { get; }
```

- *Type:* string

---

##### `AwsManagedClientApplicationReference`<sup>Required</sup> <a name="AwsManagedClientApplicationReference" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.awsManagedClientApplicationReference"></a>

```csharp
public string AwsManagedClientApplicationReference { get; }
```

- *Type:* string

---

##### `UserManagedClientApplicationClientId`<sup>Required</sup> <a name="UserManagedClientApplicationClientId" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.userManagedClientApplicationClientId"></a>

```csharp
public string UserManagedClientApplicationClientId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.internalValue"></a>

```csharp
public GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication</a>

---


### GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference <a name="GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resetAccessToken">ResetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resetJwtToken">ResetJwtToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resetRefreshToken">ResetRefreshToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resetUserManagedClientApplicationClientSecret">ResetUserManagedClientApplicationClientSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resetAccessToken"></a>

```csharp
private void ResetAccessToken()
```

##### `ResetJwtToken` <a name="ResetJwtToken" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resetJwtToken"></a>

```csharp
private void ResetJwtToken()
```

##### `ResetRefreshToken` <a name="ResetRefreshToken" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resetRefreshToken"></a>

```csharp
private void ResetRefreshToken()
```

##### `ResetUserManagedClientApplicationClientSecret` <a name="ResetUserManagedClientApplicationClientSecret" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resetUserManagedClientApplicationClientSecret"></a>

```csharp
private void ResetUserManagedClientApplicationClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.accessTokenInput">AccessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.jwtTokenInput">JwtTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.refreshTokenInput">RefreshTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.userManagedClientApplicationClientSecretInput">UserManagedClientApplicationClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.accessToken">AccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.jwtToken">JwtToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.refreshToken">RefreshToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.userManagedClientApplicationClientSecret">UserManagedClientApplicationClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.accessTokenInput"></a>

```csharp
public string AccessTokenInput { get; }
```

- *Type:* string

---

##### `JwtTokenInput`<sup>Optional</sup> <a name="JwtTokenInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.jwtTokenInput"></a>

```csharp
public string JwtTokenInput { get; }
```

- *Type:* string

---

##### `RefreshTokenInput`<sup>Optional</sup> <a name="RefreshTokenInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.refreshTokenInput"></a>

```csharp
public string RefreshTokenInput { get; }
```

- *Type:* string

---

##### `UserManagedClientApplicationClientSecretInput`<sup>Optional</sup> <a name="UserManagedClientApplicationClientSecretInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.userManagedClientApplicationClientSecretInput"></a>

```csharp
public string UserManagedClientApplicationClientSecretInput { get; }
```

- *Type:* string

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.accessToken"></a>

```csharp
public string AccessToken { get; }
```

- *Type:* string

---

##### `JwtToken`<sup>Required</sup> <a name="JwtToken" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.jwtToken"></a>

```csharp
public string JwtToken { get; }
```

- *Type:* string

---

##### `RefreshToken`<sup>Required</sup> <a name="RefreshToken" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.refreshToken"></a>

```csharp
public string RefreshToken { get; }
```

- *Type:* string

---

##### `UserManagedClientApplicationClientSecret`<sup>Required</sup> <a name="UserManagedClientApplicationClientSecret" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.userManagedClientApplicationClientSecret"></a>

```csharp
public string UserManagedClientApplicationClientSecret { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.internalValue"></a>

```csharp
public GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials</a>

---


### GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference <a name="GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putAuthorizationCodeProperties">PutAuthorizationCodeProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putOauth2ClientApplication">PutOauth2ClientApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putOauth2Credentials">PutOauth2Credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetAuthorizationCodeProperties">ResetAuthorizationCodeProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetOauth2ClientApplication">ResetOauth2ClientApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetOauth2Credentials">ResetOauth2Credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetOauth2GrantType">ResetOauth2GrantType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetTokenUrl">ResetTokenUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetTokenUrlParametersMap">ResetTokenUrlParametersMap</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizationCodeProperties` <a name="PutAuthorizationCodeProperties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putAuthorizationCodeProperties"></a>

```csharp
private void PutAuthorizationCodeProperties(GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putAuthorizationCodeProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties">GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties</a>

---

##### `PutOauth2ClientApplication` <a name="PutOauth2ClientApplication" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putOauth2ClientApplication"></a>

```csharp
private void PutOauth2ClientApplication(GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putOauth2ClientApplication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication</a>

---

##### `PutOauth2Credentials` <a name="PutOauth2Credentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putOauth2Credentials"></a>

```csharp
private void PutOauth2Credentials(GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putOauth2Credentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials</a>

---

##### `ResetAuthorizationCodeProperties` <a name="ResetAuthorizationCodeProperties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetAuthorizationCodeProperties"></a>

```csharp
private void ResetAuthorizationCodeProperties()
```

##### `ResetOauth2ClientApplication` <a name="ResetOauth2ClientApplication" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetOauth2ClientApplication"></a>

```csharp
private void ResetOauth2ClientApplication()
```

##### `ResetOauth2Credentials` <a name="ResetOauth2Credentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetOauth2Credentials"></a>

```csharp
private void ResetOauth2Credentials()
```

##### `ResetOauth2GrantType` <a name="ResetOauth2GrantType" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetOauth2GrantType"></a>

```csharp
private void ResetOauth2GrantType()
```

##### `ResetTokenUrl` <a name="ResetTokenUrl" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetTokenUrl"></a>

```csharp
private void ResetTokenUrl()
```

##### `ResetTokenUrlParametersMap` <a name="ResetTokenUrlParametersMap" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetTokenUrlParametersMap"></a>

```csharp
private void ResetTokenUrlParametersMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.authorizationCodeProperties">AuthorizationCodeProperties</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference">GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2ClientApplication">Oauth2ClientApplication</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2Credentials">Oauth2Credentials</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.authorizationCodePropertiesInput">AuthorizationCodePropertiesInput</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties">GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2ClientApplicationInput">Oauth2ClientApplicationInput</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2CredentialsInput">Oauth2CredentialsInput</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2GrantTypeInput">Oauth2GrantTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.tokenUrlInput">TokenUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.tokenUrlParametersMapInput">TokenUrlParametersMapInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2GrantType">Oauth2GrantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.tokenUrl">TokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.tokenUrlParametersMap">TokenUrlParametersMap</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties">GlueConnectionAuthenticationConfigurationOauth2Properties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationCodeProperties`<sup>Required</sup> <a name="AuthorizationCodeProperties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.authorizationCodeProperties"></a>

```csharp
public GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference AuthorizationCodeProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference">GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference</a>

---

##### `Oauth2ClientApplication`<sup>Required</sup> <a name="Oauth2ClientApplication" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2ClientApplication"></a>

```csharp
public GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference Oauth2ClientApplication { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference</a>

---

##### `Oauth2Credentials`<sup>Required</sup> <a name="Oauth2Credentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2Credentials"></a>

```csharp
public GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference Oauth2Credentials { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference</a>

---

##### `AuthorizationCodePropertiesInput`<sup>Optional</sup> <a name="AuthorizationCodePropertiesInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.authorizationCodePropertiesInput"></a>

```csharp
public GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties AuthorizationCodePropertiesInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties">GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties</a>

---

##### `Oauth2ClientApplicationInput`<sup>Optional</sup> <a name="Oauth2ClientApplicationInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2ClientApplicationInput"></a>

```csharp
public GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication Oauth2ClientApplicationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication</a>

---

##### `Oauth2CredentialsInput`<sup>Optional</sup> <a name="Oauth2CredentialsInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2CredentialsInput"></a>

```csharp
public GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials Oauth2CredentialsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials</a>

---

##### `Oauth2GrantTypeInput`<sup>Optional</sup> <a name="Oauth2GrantTypeInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2GrantTypeInput"></a>

```csharp
public string Oauth2GrantTypeInput { get; }
```

- *Type:* string

---

##### `TokenUrlInput`<sup>Optional</sup> <a name="TokenUrlInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.tokenUrlInput"></a>

```csharp
public string TokenUrlInput { get; }
```

- *Type:* string

---

##### `TokenUrlParametersMapInput`<sup>Optional</sup> <a name="TokenUrlParametersMapInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.tokenUrlParametersMapInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TokenUrlParametersMapInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Oauth2GrantType`<sup>Required</sup> <a name="Oauth2GrantType" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2GrantType"></a>

```csharp
public string Oauth2GrantType { get; }
```

- *Type:* string

---

##### `TokenUrl`<sup>Required</sup> <a name="TokenUrl" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.tokenUrl"></a>

```csharp
public string TokenUrl { get; }
```

- *Type:* string

---

##### `TokenUrlParametersMap`<sup>Required</sup> <a name="TokenUrlParametersMap" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.tokenUrlParametersMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TokenUrlParametersMap { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.internalValue"></a>

```csharp
public GlueConnectionAuthenticationConfigurationOauth2Properties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties">GlueConnectionAuthenticationConfigurationOauth2Properties</a>

---


### GlueConnectionAuthenticationConfigurationOutputReference <a name="GlueConnectionAuthenticationConfigurationOutputReference" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GlueConnectionAuthenticationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.putBasicAuthenticationCredentials">PutBasicAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.putOauth2Properties">PutOauth2Properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetBasicAuthenticationCredentials">ResetBasicAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetCustomAuthenticationCredentials">ResetCustomAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetOauth2Properties">ResetOauth2Properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBasicAuthenticationCredentials` <a name="PutBasicAuthenticationCredentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.putBasicAuthenticationCredentials"></a>

```csharp
private void PutBasicAuthenticationCredentials(GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.putBasicAuthenticationCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials</a>

---

##### `PutOauth2Properties` <a name="PutOauth2Properties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.putOauth2Properties"></a>

```csharp
private void PutOauth2Properties(GlueConnectionAuthenticationConfigurationOauth2Properties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.putOauth2Properties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties">GlueConnectionAuthenticationConfigurationOauth2Properties</a>

---

##### `ResetBasicAuthenticationCredentials` <a name="ResetBasicAuthenticationCredentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetBasicAuthenticationCredentials"></a>

```csharp
private void ResetBasicAuthenticationCredentials()
```

##### `ResetCustomAuthenticationCredentials` <a name="ResetCustomAuthenticationCredentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetCustomAuthenticationCredentials"></a>

```csharp
private void ResetCustomAuthenticationCredentials()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetOauth2Properties` <a name="ResetOauth2Properties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetOauth2Properties"></a>

```csharp
private void ResetOauth2Properties()
```

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetSecretArn"></a>

```csharp
private void ResetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentials">BasicAuthenticationCredentials</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference">GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.oauth2Properties">Oauth2Properties</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference">GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.authenticationTypeInput">AuthenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentialsInput">BasicAuthenticationCredentialsInput</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.customAuthenticationCredentialsInput">CustomAuthenticationCredentialsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.oauth2PropertiesInput">Oauth2PropertiesInput</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties">GlueConnectionAuthenticationConfigurationOauth2Properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.customAuthenticationCredentials">CustomAuthenticationCredentials</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration">GlueConnectionAuthenticationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BasicAuthenticationCredentials`<sup>Required</sup> <a name="BasicAuthenticationCredentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentials"></a>

```csharp
public GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference BasicAuthenticationCredentials { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference">GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference</a>

---

##### `Oauth2Properties`<sup>Required</sup> <a name="Oauth2Properties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.oauth2Properties"></a>

```csharp
public GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference Oauth2Properties { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference">GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference</a>

---

##### `AuthenticationTypeInput`<sup>Optional</sup> <a name="AuthenticationTypeInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.authenticationTypeInput"></a>

```csharp
public string AuthenticationTypeInput { get; }
```

- *Type:* string

---

##### `BasicAuthenticationCredentialsInput`<sup>Optional</sup> <a name="BasicAuthenticationCredentialsInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentialsInput"></a>

```csharp
public GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials BasicAuthenticationCredentialsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials</a>

---

##### `CustomAuthenticationCredentialsInput`<sup>Optional</sup> <a name="CustomAuthenticationCredentialsInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.customAuthenticationCredentialsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomAuthenticationCredentialsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `Oauth2PropertiesInput`<sup>Optional</sup> <a name="Oauth2PropertiesInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.oauth2PropertiesInput"></a>

```csharp
public GlueConnectionAuthenticationConfigurationOauth2Properties Oauth2PropertiesInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties">GlueConnectionAuthenticationConfigurationOauth2Properties</a>

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.secretArnInput"></a>

```csharp
public string SecretArnInput { get; }
```

- *Type:* string

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; }
```

- *Type:* string

---

##### `CustomAuthenticationCredentials`<sup>Required</sup> <a name="CustomAuthenticationCredentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.customAuthenticationCredentials"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomAuthenticationCredentials { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.internalValue"></a>

```csharp
public GlueConnectionAuthenticationConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration">GlueConnectionAuthenticationConfiguration</a>

---


### GlueConnectionPhysicalConnectionRequirementsOutputReference <a name="GlueConnectionPhysicalConnectionRequirementsOutputReference" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GlueConnectionPhysicalConnectionRequirementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.resetSecurityGroupIdList">ResetSecurityGroupIdList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.resetAvailabilityZone"></a>

```csharp
private void ResetAvailabilityZone()
```

##### `ResetSecurityGroupIdList` <a name="ResetSecurityGroupIdList" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.resetSecurityGroupIdList"></a>

```csharp
private void ResetSecurityGroupIdList()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.securityGroupIdListInput">SecurityGroupIdListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.securityGroupIdList">SecurityGroupIdList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements">GlueConnectionPhysicalConnectionRequirements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdListInput`<sup>Optional</sup> <a name="SecurityGroupIdListInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.securityGroupIdListInput"></a>

```csharp
public string[] SecurityGroupIdListInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `SecurityGroupIdList`<sup>Required</sup> <a name="SecurityGroupIdList" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.securityGroupIdList"></a>

```csharp
public string[] SecurityGroupIdList { get; }
```

- *Type:* string[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.internalValue"></a>

```csharp
public GlueConnectionPhysicalConnectionRequirements InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements">GlueConnectionPhysicalConnectionRequirements</a>

---



