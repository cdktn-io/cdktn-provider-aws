# `cloudwatchomniOrganizationAccessGrant` Submodule <a name="`cloudwatchomniOrganizationAccessGrant` Submodule" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchomniOrganizationAccessGrant <a name="CloudwatchomniOrganizationAccessGrant" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant aws_cloudwatchomni_organization_access_grant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchomniOrganizationAccessGrant(Construct Scope, string Id, CloudwatchomniOrganizationAccessGrantConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig">CloudwatchomniOrganizationAccessGrantConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig">CloudwatchomniOrganizationAccessGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.putPrincipal">PutPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.resetPrincipal">ResetPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPrincipal` <a name="PutPrincipal" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.putPrincipal"></a>

```csharp
private void PutPrincipal(IResolvable|CloudwatchomniOrganizationAccessGrantPrincipal[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.putPrincipal.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal">CloudwatchomniOrganizationAccessGrantPrincipal</a>[]

---

##### `ResetPrincipal` <a name="ResetPrincipal" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.resetPrincipal"></a>

```csharp
private void ResetPrincipal()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchomniOrganizationAccessGrant resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudwatchomniOrganizationAccessGrant.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudwatchomniOrganizationAccessGrant.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudwatchomniOrganizationAccessGrant.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudwatchomniOrganizationAccessGrant.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CloudwatchomniOrganizationAccessGrant resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchomniOrganizationAccessGrant to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchomniOrganizationAccessGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchomniOrganizationAccessGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.grantId">GrantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.grantType">GrantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList">CloudwatchomniOrganizationAccessGrantPrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.domainIdInput">DomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.principalInput">PrincipalInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal">CloudwatchomniOrganizationAccessGrantPrincipal</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.domainId">DomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `GrantId`<sup>Required</sup> <a name="GrantId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.grantId"></a>

```csharp
public string GrantId { get; }
```

- *Type:* string

---

##### `GrantType`<sup>Required</sup> <a name="GrantType" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.grantType"></a>

```csharp
public string GrantType { get; }
```

- *Type:* string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.principal"></a>

```csharp
public CloudwatchomniOrganizationAccessGrantPrincipalList Principal { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList">CloudwatchomniOrganizationAccessGrantPrincipalList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `DomainIdInput`<sup>Optional</sup> <a name="DomainIdInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.domainIdInput"></a>

```csharp
public string DomainIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.principalInput"></a>

```csharp
public IResolvable|CloudwatchomniOrganizationAccessGrantPrincipal[] PrincipalInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal">CloudwatchomniOrganizationAccessGrantPrincipal</a>[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.domainId"></a>

```csharp
public string DomainId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchomniOrganizationAccessGrantConfig <a name="CloudwatchomniOrganizationAccessGrantConfig" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchomniOrganizationAccessGrantConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DomainId,
    string Name,
    string Permission,
    IResolvable|CloudwatchomniOrganizationAccessGrantPrincipal[] Principal = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.domainId">DomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#domain_id CloudwatchomniOrganizationAccessGrant#domain_id}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#name CloudwatchomniOrganizationAccessGrant#name}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#permission CloudwatchomniOrganizationAccessGrant#permission}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.principal">Principal</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal">CloudwatchomniOrganizationAccessGrantPrincipal</a>[]</code> | principal block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#tags CloudwatchomniOrganizationAccessGrant#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.domainId"></a>

```csharp
public string DomainId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#domain_id CloudwatchomniOrganizationAccessGrant#domain_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#name CloudwatchomniOrganizationAccessGrant#name}.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#permission CloudwatchomniOrganizationAccessGrant#permission}.

---

##### `Principal`<sup>Optional</sup> <a name="Principal" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.principal"></a>

```csharp
public IResolvable|CloudwatchomniOrganizationAccessGrantPrincipal[] Principal { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal">CloudwatchomniOrganizationAccessGrantPrincipal</a>[]

principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#principal CloudwatchomniOrganizationAccessGrant#principal}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#region CloudwatchomniOrganizationAccessGrant#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#tags CloudwatchomniOrganizationAccessGrant#tags}.

---

### CloudwatchomniOrganizationAccessGrantPrincipal <a name="CloudwatchomniOrganizationAccessGrantPrincipal" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchomniOrganizationAccessGrantPrincipal {
    string PrincipalType,
    IResolvable|CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute[] PrincipalAttribute = null,
    string PrincipalId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal.property.principalType">PrincipalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#principal_type CloudwatchomniOrganizationAccessGrant#principal_type}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal.property.principalAttribute">PrincipalAttribute</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute">CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute</a>[]</code> | principal_attribute block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal.property.principalId">PrincipalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#principal_id CloudwatchomniOrganizationAccessGrant#principal_id}. |

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal.property.principalType"></a>

```csharp
public string PrincipalType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#principal_type CloudwatchomniOrganizationAccessGrant#principal_type}.

---

##### `PrincipalAttribute`<sup>Optional</sup> <a name="PrincipalAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal.property.principalAttribute"></a>

```csharp
public IResolvable|CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute[] PrincipalAttribute { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute">CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute</a>[]

principal_attribute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#principal_attribute CloudwatchomniOrganizationAccessGrant#principal_attribute}

---

##### `PrincipalId`<sup>Optional</sup> <a name="PrincipalId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal.property.principalId"></a>

```csharp
public string PrincipalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#principal_id CloudwatchomniOrganizationAccessGrant#principal_id}.

---

### CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute <a name="CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#key CloudwatchomniOrganizationAccessGrant#key}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#value CloudwatchomniOrganizationAccessGrant#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#key CloudwatchomniOrganizationAccessGrant#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#value CloudwatchomniOrganizationAccessGrant#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchomniOrganizationAccessGrantPrincipalList <a name="CloudwatchomniOrganizationAccessGrantPrincipalList" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchomniOrganizationAccessGrantPrincipalList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.get"></a>

```csharp
private CloudwatchomniOrganizationAccessGrantPrincipalOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal">CloudwatchomniOrganizationAccessGrantPrincipal</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchomniOrganizationAccessGrantPrincipal[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal">CloudwatchomniOrganizationAccessGrantPrincipal</a>[]

---


### CloudwatchomniOrganizationAccessGrantPrincipalOutputReference <a name="CloudwatchomniOrganizationAccessGrantPrincipalOutputReference" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchomniOrganizationAccessGrantPrincipalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.putPrincipalAttribute">PutPrincipalAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.resetPrincipalAttribute">ResetPrincipalAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.resetPrincipalId">ResetPrincipalId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrincipalAttribute` <a name="PutPrincipalAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.putPrincipalAttribute"></a>

```csharp
private void PutPrincipalAttribute(IResolvable|CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.putPrincipalAttribute.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute">CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute</a>[]

---

##### `ResetPrincipalAttribute` <a name="ResetPrincipalAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.resetPrincipalAttribute"></a>

```csharp
private void ResetPrincipalAttribute()
```

##### `ResetPrincipalId` <a name="ResetPrincipalId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.resetPrincipalId"></a>

```csharp
private void ResetPrincipalId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.principalAttribute">PrincipalAttribute</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList">CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.principalAttributeInput">PrincipalAttributeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute">CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.principalIdInput">PrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.principalTypeInput">PrincipalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.principalType">PrincipalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal">CloudwatchomniOrganizationAccessGrantPrincipal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalAttribute`<sup>Required</sup> <a name="PrincipalAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.principalAttribute"></a>

```csharp
public CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList PrincipalAttribute { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList">CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList</a>

---

##### `PrincipalAttributeInput`<sup>Optional</sup> <a name="PrincipalAttributeInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.principalAttributeInput"></a>

```csharp
public IResolvable|CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute[] PrincipalAttributeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute">CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute</a>[]

---

##### `PrincipalIdInput`<sup>Optional</sup> <a name="PrincipalIdInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.principalIdInput"></a>

```csharp
public string PrincipalIdInput { get; }
```

- *Type:* string

---

##### `PrincipalTypeInput`<sup>Optional</sup> <a name="PrincipalTypeInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.principalTypeInput"></a>

```csharp
public string PrincipalTypeInput { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.principalType"></a>

```csharp
public string PrincipalType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchomniOrganizationAccessGrantPrincipal InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal">CloudwatchomniOrganizationAccessGrantPrincipal</a>

---


### CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList <a name="CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.get"></a>

```csharp
private CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute">CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute">CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute</a>[]

---


### CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference <a name="CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute">CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute">CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute</a>

---



