# `guarddutyOrganizationConfigurationFeature` Submodule <a name="`guarddutyOrganizationConfigurationFeature` Submodule" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuarddutyOrganizationConfigurationFeature <a name="GuarddutyOrganizationConfigurationFeature" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/guardduty_organization_configuration_feature aws_guardduty_organization_configuration_feature}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GuarddutyOrganizationConfigurationFeature(Construct Scope, string Id, GuarddutyOrganizationConfigurationFeatureConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig">GuarddutyOrganizationConfigurationFeatureConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig">GuarddutyOrganizationConfigurationFeatureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.putAdditionalConfiguration">PutAdditionalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.resetAdditionalConfiguration">ResetAdditionalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdditionalConfiguration` <a name="PutAdditionalConfiguration" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.putAdditionalConfiguration"></a>

```csharp
private void PutAdditionalConfiguration(IResolvable|GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.putAdditionalConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration">GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration</a>[]

---

##### `ResetAdditionalConfiguration` <a name="ResetAdditionalConfiguration" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.resetAdditionalConfiguration"></a>

```csharp
private void ResetAdditionalConfiguration()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GuarddutyOrganizationConfigurationFeature resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

GuarddutyOrganizationConfigurationFeature.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

GuarddutyOrganizationConfigurationFeature.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

GuarddutyOrganizationConfigurationFeature.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

GuarddutyOrganizationConfigurationFeature.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GuarddutyOrganizationConfigurationFeature resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GuarddutyOrganizationConfigurationFeature to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GuarddutyOrganizationConfigurationFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/guardduty_organization_configuration_feature#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GuarddutyOrganizationConfigurationFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.additionalConfiguration">AdditionalConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList">GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.additionalConfigurationInput">AdditionalConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration">GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.autoEnableInput">AutoEnableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.detectorIdInput">DetectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.autoEnable">AutoEnable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.detectorId">DetectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AdditionalConfiguration`<sup>Required</sup> <a name="AdditionalConfiguration" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.additionalConfiguration"></a>

```csharp
public GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList AdditionalConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList">GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList</a>

---

##### `AdditionalConfigurationInput`<sup>Optional</sup> <a name="AdditionalConfigurationInput" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.additionalConfigurationInput"></a>

```csharp
public IResolvable|GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration[] AdditionalConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration">GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration</a>[]

---

##### `AutoEnableInput`<sup>Optional</sup> <a name="AutoEnableInput" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.autoEnableInput"></a>

```csharp
public string AutoEnableInput { get; }
```

- *Type:* string

---

##### `DetectorIdInput`<sup>Optional</sup> <a name="DetectorIdInput" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.detectorIdInput"></a>

```csharp
public string DetectorIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `AutoEnable`<sup>Required</sup> <a name="AutoEnable" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.autoEnable"></a>

```csharp
public string AutoEnable { get; }
```

- *Type:* string

---

##### `DetectorId`<sup>Required</sup> <a name="DetectorId" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.detectorId"></a>

```csharp
public string DetectorId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeature.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration <a name="GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration {
    string AutoEnable,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration.property.autoEnable">AutoEnable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/guardduty_organization_configuration_feature#auto_enable GuarddutyOrganizationConfigurationFeature#auto_enable}. |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/guardduty_organization_configuration_feature#name GuarddutyOrganizationConfigurationFeature#name}. |

---

##### `AutoEnable`<sup>Required</sup> <a name="AutoEnable" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration.property.autoEnable"></a>

```csharp
public string AutoEnable { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/guardduty_organization_configuration_feature#auto_enable GuarddutyOrganizationConfigurationFeature#auto_enable}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/guardduty_organization_configuration_feature#name GuarddutyOrganizationConfigurationFeature#name}.

---

### GuarddutyOrganizationConfigurationFeatureConfig <a name="GuarddutyOrganizationConfigurationFeatureConfig" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GuarddutyOrganizationConfigurationFeatureConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AutoEnable,
    string DetectorId,
    string Name,
    IResolvable|GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration[] AdditionalConfiguration = null,
    string Id = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.autoEnable">AutoEnable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/guardduty_organization_configuration_feature#auto_enable GuarddutyOrganizationConfigurationFeature#auto_enable}. |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.detectorId">DetectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/guardduty_organization_configuration_feature#detector_id GuarddutyOrganizationConfigurationFeature#detector_id}. |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/guardduty_organization_configuration_feature#name GuarddutyOrganizationConfigurationFeature#name}. |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.additionalConfiguration">AdditionalConfiguration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration">GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration</a>[]</code> | additional_configuration block. |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/guardduty_organization_configuration_feature#id GuarddutyOrganizationConfigurationFeature#id}. |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AutoEnable`<sup>Required</sup> <a name="AutoEnable" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.autoEnable"></a>

```csharp
public string AutoEnable { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/guardduty_organization_configuration_feature#auto_enable GuarddutyOrganizationConfigurationFeature#auto_enable}.

---

##### `DetectorId`<sup>Required</sup> <a name="DetectorId" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.detectorId"></a>

```csharp
public string DetectorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/guardduty_organization_configuration_feature#detector_id GuarddutyOrganizationConfigurationFeature#detector_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/guardduty_organization_configuration_feature#name GuarddutyOrganizationConfigurationFeature#name}.

---

##### `AdditionalConfiguration`<sup>Optional</sup> <a name="AdditionalConfiguration" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.additionalConfiguration"></a>

```csharp
public IResolvable|GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration[] AdditionalConfiguration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration">GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration</a>[]

additional_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/guardduty_organization_configuration_feature#additional_configuration GuarddutyOrganizationConfigurationFeature#additional_configuration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/guardduty_organization_configuration_feature#id GuarddutyOrganizationConfigurationFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/guardduty_organization_configuration_feature#region GuarddutyOrganizationConfigurationFeature#region}

---

## Classes <a name="Classes" id="Classes"></a>

### GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList <a name="GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.get"></a>

```csharp
private GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration">GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration">GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration</a>[]

---


### GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference <a name="GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.property.autoEnableInput">AutoEnableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.property.autoEnable">AutoEnable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration">GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoEnableInput`<sup>Optional</sup> <a name="AutoEnableInput" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.property.autoEnableInput"></a>

```csharp
public string AutoEnableInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `AutoEnable`<sup>Required</sup> <a name="AutoEnable" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.property.autoEnable"></a>

```csharp
public string AutoEnable { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.guarddutyOrganizationConfigurationFeature.GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration">GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration</a>

---



