# `sesv2AccountVdmAttributes` Submodule <a name="`sesv2AccountVdmAttributes` Submodule" id="@cdktn/provider-aws.sesv2AccountVdmAttributes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Sesv2AccountVdmAttributes <a name="Sesv2AccountVdmAttributes" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/sesv2_account_vdm_attributes aws_sesv2_account_vdm_attributes}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Sesv2AccountVdmAttributes(Construct Scope, string Id, Sesv2AccountVdmAttributesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig">Sesv2AccountVdmAttributesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig">Sesv2AccountVdmAttributesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.putDashboardAttributes">PutDashboardAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.putGuardianAttributes">PutGuardianAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.resetDashboardAttributes">ResetDashboardAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.resetGuardianAttributes">ResetGuardianAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDashboardAttributes` <a name="PutDashboardAttributes" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.putDashboardAttributes"></a>

```csharp
private void PutDashboardAttributes(Sesv2AccountVdmAttributesDashboardAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.putDashboardAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes">Sesv2AccountVdmAttributesDashboardAttributes</a>

---

##### `PutGuardianAttributes` <a name="PutGuardianAttributes" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.putGuardianAttributes"></a>

```csharp
private void PutGuardianAttributes(Sesv2AccountVdmAttributesGuardianAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.putGuardianAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes">Sesv2AccountVdmAttributesGuardianAttributes</a>

---

##### `ResetDashboardAttributes` <a name="ResetDashboardAttributes" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.resetDashboardAttributes"></a>

```csharp
private void ResetDashboardAttributes()
```

##### `ResetGuardianAttributes` <a name="ResetGuardianAttributes" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.resetGuardianAttributes"></a>

```csharp
private void ResetGuardianAttributes()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Sesv2AccountVdmAttributes resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Sesv2AccountVdmAttributes.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Sesv2AccountVdmAttributes.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Sesv2AccountVdmAttributes.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Sesv2AccountVdmAttributes.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Sesv2AccountVdmAttributes resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Sesv2AccountVdmAttributes to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Sesv2AccountVdmAttributes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/sesv2_account_vdm_attributes#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Sesv2AccountVdmAttributes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.dashboardAttributes">DashboardAttributes</a></code> | <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference">Sesv2AccountVdmAttributesDashboardAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.guardianAttributes">GuardianAttributes</a></code> | <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference">Sesv2AccountVdmAttributesGuardianAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.dashboardAttributesInput">DashboardAttributesInput</a></code> | <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes">Sesv2AccountVdmAttributesDashboardAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.guardianAttributesInput">GuardianAttributesInput</a></code> | <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes">Sesv2AccountVdmAttributesGuardianAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.vdmEnabledInput">VdmEnabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.vdmEnabled">VdmEnabled</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DashboardAttributes`<sup>Required</sup> <a name="DashboardAttributes" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.dashboardAttributes"></a>

```csharp
public Sesv2AccountVdmAttributesDashboardAttributesOutputReference DashboardAttributes { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference">Sesv2AccountVdmAttributesDashboardAttributesOutputReference</a>

---

##### `GuardianAttributes`<sup>Required</sup> <a name="GuardianAttributes" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.guardianAttributes"></a>

```csharp
public Sesv2AccountVdmAttributesGuardianAttributesOutputReference GuardianAttributes { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference">Sesv2AccountVdmAttributesGuardianAttributesOutputReference</a>

---

##### `DashboardAttributesInput`<sup>Optional</sup> <a name="DashboardAttributesInput" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.dashboardAttributesInput"></a>

```csharp
public Sesv2AccountVdmAttributesDashboardAttributes DashboardAttributesInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes">Sesv2AccountVdmAttributesDashboardAttributes</a>

---

##### `GuardianAttributesInput`<sup>Optional</sup> <a name="GuardianAttributesInput" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.guardianAttributesInput"></a>

```csharp
public Sesv2AccountVdmAttributesGuardianAttributes GuardianAttributesInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes">Sesv2AccountVdmAttributesGuardianAttributes</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `VdmEnabledInput`<sup>Optional</sup> <a name="VdmEnabledInput" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.vdmEnabledInput"></a>

```csharp
public string VdmEnabledInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `VdmEnabled`<sup>Required</sup> <a name="VdmEnabled" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.vdmEnabled"></a>

```csharp
public string VdmEnabled { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Sesv2AccountVdmAttributesConfig <a name="Sesv2AccountVdmAttributesConfig" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Sesv2AccountVdmAttributesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string VdmEnabled,
    Sesv2AccountVdmAttributesDashboardAttributes DashboardAttributes = null,
    Sesv2AccountVdmAttributesGuardianAttributes GuardianAttributes = null,
    string Id = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.vdmEnabled">VdmEnabled</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/sesv2_account_vdm_attributes#vdm_enabled Sesv2AccountVdmAttributes#vdm_enabled}. |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.dashboardAttributes">DashboardAttributes</a></code> | <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes">Sesv2AccountVdmAttributesDashboardAttributes</a></code> | dashboard_attributes block. |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.guardianAttributes">GuardianAttributes</a></code> | <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes">Sesv2AccountVdmAttributesGuardianAttributes</a></code> | guardian_attributes block. |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/sesv2_account_vdm_attributes#id Sesv2AccountVdmAttributes#id}. |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `VdmEnabled`<sup>Required</sup> <a name="VdmEnabled" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.vdmEnabled"></a>

```csharp
public string VdmEnabled { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/sesv2_account_vdm_attributes#vdm_enabled Sesv2AccountVdmAttributes#vdm_enabled}.

---

##### `DashboardAttributes`<sup>Optional</sup> <a name="DashboardAttributes" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.dashboardAttributes"></a>

```csharp
public Sesv2AccountVdmAttributesDashboardAttributes DashboardAttributes { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes">Sesv2AccountVdmAttributesDashboardAttributes</a>

dashboard_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/sesv2_account_vdm_attributes#dashboard_attributes Sesv2AccountVdmAttributes#dashboard_attributes}

---

##### `GuardianAttributes`<sup>Optional</sup> <a name="GuardianAttributes" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.guardianAttributes"></a>

```csharp
public Sesv2AccountVdmAttributesGuardianAttributes GuardianAttributes { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes">Sesv2AccountVdmAttributesGuardianAttributes</a>

guardian_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/sesv2_account_vdm_attributes#guardian_attributes Sesv2AccountVdmAttributes#guardian_attributes}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/sesv2_account_vdm_attributes#id Sesv2AccountVdmAttributes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/sesv2_account_vdm_attributes#region Sesv2AccountVdmAttributes#region}

---

### Sesv2AccountVdmAttributesDashboardAttributes <a name="Sesv2AccountVdmAttributesDashboardAttributes" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Sesv2AccountVdmAttributesDashboardAttributes {
    string EngagementMetrics = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes.property.engagementMetrics">EngagementMetrics</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/sesv2_account_vdm_attributes#engagement_metrics Sesv2AccountVdmAttributes#engagement_metrics}. |

---

##### `EngagementMetrics`<sup>Optional</sup> <a name="EngagementMetrics" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes.property.engagementMetrics"></a>

```csharp
public string EngagementMetrics { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/sesv2_account_vdm_attributes#engagement_metrics Sesv2AccountVdmAttributes#engagement_metrics}.

---

### Sesv2AccountVdmAttributesGuardianAttributes <a name="Sesv2AccountVdmAttributesGuardianAttributes" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Sesv2AccountVdmAttributesGuardianAttributes {
    string OptimizedSharedDelivery = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes.property.optimizedSharedDelivery">OptimizedSharedDelivery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/sesv2_account_vdm_attributes#optimized_shared_delivery Sesv2AccountVdmAttributes#optimized_shared_delivery}. |

---

##### `OptimizedSharedDelivery`<sup>Optional</sup> <a name="OptimizedSharedDelivery" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes.property.optimizedSharedDelivery"></a>

```csharp
public string OptimizedSharedDelivery { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/sesv2_account_vdm_attributes#optimized_shared_delivery Sesv2AccountVdmAttributes#optimized_shared_delivery}.

---

## Classes <a name="Classes" id="Classes"></a>

### Sesv2AccountVdmAttributesDashboardAttributesOutputReference <a name="Sesv2AccountVdmAttributesDashboardAttributesOutputReference" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Sesv2AccountVdmAttributesDashboardAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.resetEngagementMetrics">ResetEngagementMetrics</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEngagementMetrics` <a name="ResetEngagementMetrics" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.resetEngagementMetrics"></a>

```csharp
private void ResetEngagementMetrics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.engagementMetricsInput">EngagementMetricsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.engagementMetrics">EngagementMetrics</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes">Sesv2AccountVdmAttributesDashboardAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EngagementMetricsInput`<sup>Optional</sup> <a name="EngagementMetricsInput" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.engagementMetricsInput"></a>

```csharp
public string EngagementMetricsInput { get; }
```

- *Type:* string

---

##### `EngagementMetrics`<sup>Required</sup> <a name="EngagementMetrics" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.engagementMetrics"></a>

```csharp
public string EngagementMetrics { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.internalValue"></a>

```csharp
public Sesv2AccountVdmAttributesDashboardAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes">Sesv2AccountVdmAttributesDashboardAttributes</a>

---


### Sesv2AccountVdmAttributesGuardianAttributesOutputReference <a name="Sesv2AccountVdmAttributesGuardianAttributesOutputReference" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Sesv2AccountVdmAttributesGuardianAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.resetOptimizedSharedDelivery">ResetOptimizedSharedDelivery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOptimizedSharedDelivery` <a name="ResetOptimizedSharedDelivery" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.resetOptimizedSharedDelivery"></a>

```csharp
private void ResetOptimizedSharedDelivery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.optimizedSharedDeliveryInput">OptimizedSharedDeliveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.optimizedSharedDelivery">OptimizedSharedDelivery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes">Sesv2AccountVdmAttributesGuardianAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OptimizedSharedDeliveryInput`<sup>Optional</sup> <a name="OptimizedSharedDeliveryInput" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.optimizedSharedDeliveryInput"></a>

```csharp
public string OptimizedSharedDeliveryInput { get; }
```

- *Type:* string

---

##### `OptimizedSharedDelivery`<sup>Required</sup> <a name="OptimizedSharedDelivery" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.optimizedSharedDelivery"></a>

```csharp
public string OptimizedSharedDelivery { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.internalValue"></a>

```csharp
public Sesv2AccountVdmAttributesGuardianAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes">Sesv2AccountVdmAttributesGuardianAttributes</a>

---



