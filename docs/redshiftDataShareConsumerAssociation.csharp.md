# `redshiftDataShareConsumerAssociation` Submodule <a name="`redshiftDataShareConsumerAssociation` Submodule" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftDataShareConsumerAssociation <a name="RedshiftDataShareConsumerAssociation" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/redshift_data_share_consumer_association aws_redshift_data_share_consumer_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftDataShareConsumerAssociation(Construct Scope, string Id, RedshiftDataShareConsumerAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig">RedshiftDataShareConsumerAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig">RedshiftDataShareConsumerAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetAllowWrites">ResetAllowWrites</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetAssociateEntireAccount">ResetAssociateEntireAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetConsumerArn">ResetConsumerArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetConsumerRegion">ResetConsumerRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowWrites` <a name="ResetAllowWrites" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetAllowWrites"></a>

```csharp
private void ResetAllowWrites()
```

##### `ResetAssociateEntireAccount` <a name="ResetAssociateEntireAccount" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetAssociateEntireAccount"></a>

```csharp
private void ResetAssociateEntireAccount()
```

##### `ResetConsumerArn` <a name="ResetConsumerArn" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetConsumerArn"></a>

```csharp
private void ResetConsumerArn()
```

##### `ResetConsumerRegion` <a name="ResetConsumerRegion" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetConsumerRegion"></a>

```csharp
private void ResetConsumerRegion()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftDataShareConsumerAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

RedshiftDataShareConsumerAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

RedshiftDataShareConsumerAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

RedshiftDataShareConsumerAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

RedshiftDataShareConsumerAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RedshiftDataShareConsumerAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RedshiftDataShareConsumerAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RedshiftDataShareConsumerAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/redshift_data_share_consumer_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftDataShareConsumerAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.managedBy">ManagedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.producerArn">ProducerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.allowWritesInput">AllowWritesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.associateEntireAccountInput">AssociateEntireAccountInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerArnInput">ConsumerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerRegionInput">ConsumerRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.dataShareArnInput">DataShareArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.allowWrites">AllowWrites</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.associateEntireAccount">AssociateEntireAccount</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerArn">ConsumerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerRegion">ConsumerRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.dataShareArn">DataShareArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedBy`<sup>Required</sup> <a name="ManagedBy" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.managedBy"></a>

```csharp
public string ManagedBy { get; }
```

- *Type:* string

---

##### `ProducerArn`<sup>Required</sup> <a name="ProducerArn" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.producerArn"></a>

```csharp
public string ProducerArn { get; }
```

- *Type:* string

---

##### `AllowWritesInput`<sup>Optional</sup> <a name="AllowWritesInput" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.allowWritesInput"></a>

```csharp
public bool|IResolvable AllowWritesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AssociateEntireAccountInput`<sup>Optional</sup> <a name="AssociateEntireAccountInput" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.associateEntireAccountInput"></a>

```csharp
public bool|IResolvable AssociateEntireAccountInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ConsumerArnInput`<sup>Optional</sup> <a name="ConsumerArnInput" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerArnInput"></a>

```csharp
public string ConsumerArnInput { get; }
```

- *Type:* string

---

##### `ConsumerRegionInput`<sup>Optional</sup> <a name="ConsumerRegionInput" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerRegionInput"></a>

```csharp
public string ConsumerRegionInput { get; }
```

- *Type:* string

---

##### `DataShareArnInput`<sup>Optional</sup> <a name="DataShareArnInput" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.dataShareArnInput"></a>

```csharp
public string DataShareArnInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `AllowWrites`<sup>Required</sup> <a name="AllowWrites" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.allowWrites"></a>

```csharp
public bool|IResolvable AllowWrites { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AssociateEntireAccount`<sup>Required</sup> <a name="AssociateEntireAccount" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.associateEntireAccount"></a>

```csharp
public bool|IResolvable AssociateEntireAccount { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ConsumerArn`<sup>Required</sup> <a name="ConsumerArn" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerArn"></a>

```csharp
public string ConsumerArn { get; }
```

- *Type:* string

---

##### `ConsumerRegion`<sup>Required</sup> <a name="ConsumerRegion" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerRegion"></a>

```csharp
public string ConsumerRegion { get; }
```

- *Type:* string

---

##### `DataShareArn`<sup>Required</sup> <a name="DataShareArn" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.dataShareArn"></a>

```csharp
public string DataShareArn { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftDataShareConsumerAssociationConfig <a name="RedshiftDataShareConsumerAssociationConfig" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftDataShareConsumerAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DataShareArn,
    bool|IResolvable AllowWrites = null,
    bool|IResolvable AssociateEntireAccount = null,
    string ConsumerArn = null,
    string ConsumerRegion = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.dataShareArn">DataShareArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/redshift_data_share_consumer_association#data_share_arn RedshiftDataShareConsumerAssociation#data_share_arn}. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.allowWrites">AllowWrites</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/redshift_data_share_consumer_association#allow_writes RedshiftDataShareConsumerAssociation#allow_writes}. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.associateEntireAccount">AssociateEntireAccount</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/redshift_data_share_consumer_association#associate_entire_account RedshiftDataShareConsumerAssociation#associate_entire_account}. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.consumerArn">ConsumerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/redshift_data_share_consumer_association#consumer_arn RedshiftDataShareConsumerAssociation#consumer_arn}. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.consumerRegion">ConsumerRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/redshift_data_share_consumer_association#consumer_region RedshiftDataShareConsumerAssociation#consumer_region}. |
| <code><a href="#@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DataShareArn`<sup>Required</sup> <a name="DataShareArn" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.dataShareArn"></a>

```csharp
public string DataShareArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/redshift_data_share_consumer_association#data_share_arn RedshiftDataShareConsumerAssociation#data_share_arn}.

---

##### `AllowWrites`<sup>Optional</sup> <a name="AllowWrites" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.allowWrites"></a>

```csharp
public bool|IResolvable AllowWrites { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/redshift_data_share_consumer_association#allow_writes RedshiftDataShareConsumerAssociation#allow_writes}.

---

##### `AssociateEntireAccount`<sup>Optional</sup> <a name="AssociateEntireAccount" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.associateEntireAccount"></a>

```csharp
public bool|IResolvable AssociateEntireAccount { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/redshift_data_share_consumer_association#associate_entire_account RedshiftDataShareConsumerAssociation#associate_entire_account}.

---

##### `ConsumerArn`<sup>Optional</sup> <a name="ConsumerArn" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.consumerArn"></a>

```csharp
public string ConsumerArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/redshift_data_share_consumer_association#consumer_arn RedshiftDataShareConsumerAssociation#consumer_arn}.

---

##### `ConsumerRegion`<sup>Optional</sup> <a name="ConsumerRegion" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.consumerRegion"></a>

```csharp
public string ConsumerRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/redshift_data_share_consumer_association#consumer_region RedshiftDataShareConsumerAssociation#consumer_region}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/redshift_data_share_consumer_association#region RedshiftDataShareConsumerAssociation#region}

---



