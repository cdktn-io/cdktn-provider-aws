# `chimesdkvoiceSipMediaApplication` Submodule <a name="`chimesdkvoiceSipMediaApplication` Submodule" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimesdkvoiceSipMediaApplication <a name="ChimesdkvoiceSipMediaApplication" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/chimesdkvoice_sip_media_application aws_chimesdkvoice_sip_media_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ChimesdkvoiceSipMediaApplication(Construct Scope, string Id, ChimesdkvoiceSipMediaApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig">ChimesdkvoiceSipMediaApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig">ChimesdkvoiceSipMediaApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.putEndpoints">PutEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndpoints` <a name="PutEndpoints" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.putEndpoints"></a>

```csharp
private void PutEndpoints(ChimesdkvoiceSipMediaApplicationEndpoints Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.putEndpoints.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints">ChimesdkvoiceSipMediaApplicationEndpoints</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ChimesdkvoiceSipMediaApplication resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ChimesdkvoiceSipMediaApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ChimesdkvoiceSipMediaApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ChimesdkvoiceSipMediaApplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ChimesdkvoiceSipMediaApplication.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ChimesdkvoiceSipMediaApplication resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChimesdkvoiceSipMediaApplication to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChimesdkvoiceSipMediaApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/chimesdkvoice_sip_media_application#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ChimesdkvoiceSipMediaApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference">ChimesdkvoiceSipMediaApplicationEndpointsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.awsRegionInput">AwsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.endpointsInput">EndpointsInput</a></code> | <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints">ChimesdkvoiceSipMediaApplicationEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.awsRegion">AwsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.endpoints"></a>

```csharp
public ChimesdkvoiceSipMediaApplicationEndpointsOutputReference Endpoints { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference">ChimesdkvoiceSipMediaApplicationEndpointsOutputReference</a>

---

##### `AwsRegionInput`<sup>Optional</sup> <a name="AwsRegionInput" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.awsRegionInput"></a>

```csharp
public string AwsRegionInput { get; }
```

- *Type:* string

---

##### `EndpointsInput`<sup>Optional</sup> <a name="EndpointsInput" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.endpointsInput"></a>

```csharp
public ChimesdkvoiceSipMediaApplicationEndpoints EndpointsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints">ChimesdkvoiceSipMediaApplicationEndpoints</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.awsRegion"></a>

```csharp
public string AwsRegion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChimesdkvoiceSipMediaApplicationConfig <a name="ChimesdkvoiceSipMediaApplicationConfig" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ChimesdkvoiceSipMediaApplicationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AwsRegion,
    ChimesdkvoiceSipMediaApplicationEndpoints Endpoints,
    string Name,
    string Id = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.awsRegion">AwsRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/chimesdkvoice_sip_media_application#aws_region ChimesdkvoiceSipMediaApplication#aws_region}. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints">ChimesdkvoiceSipMediaApplicationEndpoints</a></code> | endpoints block. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/chimesdkvoice_sip_media_application#name ChimesdkvoiceSipMediaApplication#name}. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/chimesdkvoice_sip_media_application#id ChimesdkvoiceSipMediaApplication#id}. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/chimesdkvoice_sip_media_application#tags ChimesdkvoiceSipMediaApplication#tags}. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/chimesdkvoice_sip_media_application#tags_all ChimesdkvoiceSipMediaApplication#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.awsRegion"></a>

```csharp
public string AwsRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/chimesdkvoice_sip_media_application#aws_region ChimesdkvoiceSipMediaApplication#aws_region}.

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.endpoints"></a>

```csharp
public ChimesdkvoiceSipMediaApplicationEndpoints Endpoints { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints">ChimesdkvoiceSipMediaApplicationEndpoints</a>

endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/chimesdkvoice_sip_media_application#endpoints ChimesdkvoiceSipMediaApplication#endpoints}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/chimesdkvoice_sip_media_application#name ChimesdkvoiceSipMediaApplication#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/chimesdkvoice_sip_media_application#id ChimesdkvoiceSipMediaApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/chimesdkvoice_sip_media_application#region ChimesdkvoiceSipMediaApplication#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/chimesdkvoice_sip_media_application#tags ChimesdkvoiceSipMediaApplication#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/chimesdkvoice_sip_media_application#tags_all ChimesdkvoiceSipMediaApplication#tags_all}.

---

### ChimesdkvoiceSipMediaApplicationEndpoints <a name="ChimesdkvoiceSipMediaApplicationEndpoints" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ChimesdkvoiceSipMediaApplicationEndpoints {
    string LambdaArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints.property.lambdaArn">LambdaArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/chimesdkvoice_sip_media_application#lambda_arn ChimesdkvoiceSipMediaApplication#lambda_arn}. |

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints.property.lambdaArn"></a>

```csharp
public string LambdaArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/chimesdkvoice_sip_media_application#lambda_arn ChimesdkvoiceSipMediaApplication#lambda_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChimesdkvoiceSipMediaApplicationEndpointsOutputReference <a name="ChimesdkvoiceSipMediaApplicationEndpointsOutputReference" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ChimesdkvoiceSipMediaApplicationEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.lambdaArnInput">LambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints">ChimesdkvoiceSipMediaApplicationEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LambdaArnInput`<sup>Optional</sup> <a name="LambdaArnInput" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.lambdaArnInput"></a>

```csharp
public string LambdaArnInput { get; }
```

- *Type:* string

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.lambdaArn"></a>

```csharp
public string LambdaArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.internalValue"></a>

```csharp
public ChimesdkvoiceSipMediaApplicationEndpoints InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints">ChimesdkvoiceSipMediaApplicationEndpoints</a>

---



