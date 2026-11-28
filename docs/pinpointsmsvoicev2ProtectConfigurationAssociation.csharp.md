# `pinpointsmsvoicev2ProtectConfigurationAssociation` Submodule <a name="`pinpointsmsvoicev2ProtectConfigurationAssociation` Submodule" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Pinpointsmsvoicev2ProtectConfigurationAssociation <a name="Pinpointsmsvoicev2ProtectConfigurationAssociation" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/pinpointsmsvoicev2_protect_configuration_association aws_pinpointsmsvoicev2_protect_configuration_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Pinpointsmsvoicev2ProtectConfigurationAssociation(Construct Scope, string Id, Pinpointsmsvoicev2ProtectConfigurationAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociationConfig">Pinpointsmsvoicev2ProtectConfigurationAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociationConfig">Pinpointsmsvoicev2ProtectConfigurationAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Pinpointsmsvoicev2ProtectConfigurationAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Pinpointsmsvoicev2ProtectConfigurationAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Pinpointsmsvoicev2ProtectConfigurationAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Pinpointsmsvoicev2ProtectConfigurationAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Pinpointsmsvoicev2ProtectConfigurationAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Pinpointsmsvoicev2ProtectConfigurationAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Pinpointsmsvoicev2ProtectConfigurationAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Pinpointsmsvoicev2ProtectConfigurationAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/pinpointsmsvoicev2_protect_configuration_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Pinpointsmsvoicev2ProtectConfigurationAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.configurationSetNameInput">ConfigurationSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.protectConfigurationIdInput">ProtectConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.configurationSetName">ConfigurationSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.protectConfigurationId">ProtectConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConfigurationSetNameInput`<sup>Optional</sup> <a name="ConfigurationSetNameInput" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.configurationSetNameInput"></a>

```csharp
public string ConfigurationSetNameInput { get; }
```

- *Type:* string

---

##### `ProtectConfigurationIdInput`<sup>Optional</sup> <a name="ProtectConfigurationIdInput" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.protectConfigurationIdInput"></a>

```csharp
public string ProtectConfigurationIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ConfigurationSetName`<sup>Required</sup> <a name="ConfigurationSetName" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.configurationSetName"></a>

```csharp
public string ConfigurationSetName { get; }
```

- *Type:* string

---

##### `ProtectConfigurationId`<sup>Required</sup> <a name="ProtectConfigurationId" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.protectConfigurationId"></a>

```csharp
public string ProtectConfigurationId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Pinpointsmsvoicev2ProtectConfigurationAssociationConfig <a name="Pinpointsmsvoicev2ProtectConfigurationAssociationConfig" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Pinpointsmsvoicev2ProtectConfigurationAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ConfigurationSetName,
    string ProtectConfigurationId,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociationConfig.property.configurationSetName">ConfigurationSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/pinpointsmsvoicev2_protect_configuration_association#configuration_set_name Pinpointsmsvoicev2ProtectConfigurationAssociation#configuration_set_name}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociationConfig.property.protectConfigurationId">ProtectConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/pinpointsmsvoicev2_protect_configuration_association#protect_configuration_id Pinpointsmsvoicev2ProtectConfigurationAssociation#protect_configuration_id}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConfigurationSetName`<sup>Required</sup> <a name="ConfigurationSetName" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociationConfig.property.configurationSetName"></a>

```csharp
public string ConfigurationSetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/pinpointsmsvoicev2_protect_configuration_association#configuration_set_name Pinpointsmsvoicev2ProtectConfigurationAssociation#configuration_set_name}.

---

##### `ProtectConfigurationId`<sup>Required</sup> <a name="ProtectConfigurationId" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociationConfig.property.protectConfigurationId"></a>

```csharp
public string ProtectConfigurationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/pinpointsmsvoicev2_protect_configuration_association#protect_configuration_id Pinpointsmsvoicev2ProtectConfigurationAssociation#protect_configuration_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfigurationAssociation.Pinpointsmsvoicev2ProtectConfigurationAssociationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/pinpointsmsvoicev2_protect_configuration_association#region Pinpointsmsvoicev2ProtectConfigurationAssociation#region}

---



