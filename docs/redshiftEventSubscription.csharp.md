# `redshiftEventSubscription` Submodule <a name="`redshiftEventSubscription` Submodule" id="@cdktn/provider-aws.redshiftEventSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftEventSubscription <a name="RedshiftEventSubscription" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_event_subscription aws_redshift_event_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftEventSubscription(Construct Scope, string Id, RedshiftEventSubscriptionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig">RedshiftEventSubscriptionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig">RedshiftEventSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.resetEventCategories">ResetEventCategories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.resetSeverity">ResetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.resetSourceIds">ResetSourceIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.resetSourceType">ResetSourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.putTimeouts"></a>

```csharp
private void PutTimeouts(RedshiftEventSubscriptionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeouts">RedshiftEventSubscriptionTimeouts</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetEventCategories` <a name="ResetEventCategories" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.resetEventCategories"></a>

```csharp
private void ResetEventCategories()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSeverity` <a name="ResetSeverity" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.resetSeverity"></a>

```csharp
private void ResetSeverity()
```

##### `ResetSourceIds` <a name="ResetSourceIds" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.resetSourceIds"></a>

```csharp
private void ResetSourceIds()
```

##### `ResetSourceType` <a name="ResetSourceType" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.resetSourceType"></a>

```csharp
private void ResetSourceType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftEventSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

RedshiftEventSubscription.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

RedshiftEventSubscription.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

RedshiftEventSubscription.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

RedshiftEventSubscription.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RedshiftEventSubscription resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RedshiftEventSubscription to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RedshiftEventSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_event_subscription#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftEventSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.customerAwsId">CustomerAwsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference">RedshiftEventSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.eventCategoriesInput">EventCategoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.severityInput">SeverityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.snsTopicArnInput">SnsTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.sourceIdsInput">SourceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.sourceTypeInput">SourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeouts">RedshiftEventSubscriptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.eventCategories">EventCategories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.sourceIds">SourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CustomerAwsId`<sup>Required</sup> <a name="CustomerAwsId" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.customerAwsId"></a>

```csharp
public string CustomerAwsId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.timeouts"></a>

```csharp
public RedshiftEventSubscriptionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference">RedshiftEventSubscriptionTimeoutsOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EventCategoriesInput`<sup>Optional</sup> <a name="EventCategoriesInput" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.eventCategoriesInput"></a>

```csharp
public string[] EventCategoriesInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.severityInput"></a>

```csharp
public string SeverityInput { get; }
```

- *Type:* string

---

##### `SnsTopicArnInput`<sup>Optional</sup> <a name="SnsTopicArnInput" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.snsTopicArnInput"></a>

```csharp
public string SnsTopicArnInput { get; }
```

- *Type:* string

---

##### `SourceIdsInput`<sup>Optional</sup> <a name="SourceIdsInput" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.sourceIdsInput"></a>

```csharp
public string[] SourceIdsInput { get; }
```

- *Type:* string[]

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.sourceTypeInput"></a>

```csharp
public string SourceTypeInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.timeoutsInput"></a>

```csharp
public IResolvable|RedshiftEventSubscriptionTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeouts">RedshiftEventSubscriptionTimeouts</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EventCategories`<sup>Required</sup> <a name="EventCategories" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.eventCategories"></a>

```csharp
public string[] EventCategories { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; }
```

- *Type:* string

---

##### `SourceIds`<sup>Required</sup> <a name="SourceIds" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.sourceIds"></a>

```csharp
public string[] SourceIds { get; }
```

- *Type:* string[]

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscription.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftEventSubscriptionConfig <a name="RedshiftEventSubscriptionConfig" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftEventSubscriptionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string SnsTopicArn,
    bool|IResolvable Enabled = null,
    string[] EventCategories = null,
    string Id = null,
    string Region = null,
    string Severity = null,
    string[] SourceIds = null,
    string SourceType = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    RedshiftEventSubscriptionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_event_subscription#name RedshiftEventSubscription#name}. |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_event_subscription#sns_topic_arn RedshiftEventSubscription#sns_topic_arn}. |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_event_subscription#enabled RedshiftEventSubscription#enabled}. |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.eventCategories">EventCategories</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_event_subscription#event_categories RedshiftEventSubscription#event_categories}. |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_event_subscription#id RedshiftEventSubscription#id}. |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.severity">Severity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_event_subscription#severity RedshiftEventSubscription#severity}. |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.sourceIds">SourceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_event_subscription#source_ids RedshiftEventSubscription#source_ids}. |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.sourceType">SourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_event_subscription#source_type RedshiftEventSubscription#source_type}. |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_event_subscription#tags RedshiftEventSubscription#tags}. |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_event_subscription#tags_all RedshiftEventSubscription#tags_all}. |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeouts">RedshiftEventSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_event_subscription#name RedshiftEventSubscription#name}.

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_event_subscription#sns_topic_arn RedshiftEventSubscription#sns_topic_arn}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_event_subscription#enabled RedshiftEventSubscription#enabled}.

---

##### `EventCategories`<sup>Optional</sup> <a name="EventCategories" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.eventCategories"></a>

```csharp
public string[] EventCategories { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_event_subscription#event_categories RedshiftEventSubscription#event_categories}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_event_subscription#id RedshiftEventSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_event_subscription#region RedshiftEventSubscription#region}

---

##### `Severity`<sup>Optional</sup> <a name="Severity" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.severity"></a>

```csharp
public string Severity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_event_subscription#severity RedshiftEventSubscription#severity}.

---

##### `SourceIds`<sup>Optional</sup> <a name="SourceIds" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.sourceIds"></a>

```csharp
public string[] SourceIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_event_subscription#source_ids RedshiftEventSubscription#source_ids}.

---

##### `SourceType`<sup>Optional</sup> <a name="SourceType" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.sourceType"></a>

```csharp
public string SourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_event_subscription#source_type RedshiftEventSubscription#source_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_event_subscription#tags RedshiftEventSubscription#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_event_subscription#tags_all RedshiftEventSubscription#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.timeouts"></a>

```csharp
public RedshiftEventSubscriptionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeouts">RedshiftEventSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_event_subscription#timeouts RedshiftEventSubscription#timeouts}

---

### RedshiftEventSubscriptionTimeouts <a name="RedshiftEventSubscriptionTimeouts" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftEventSubscriptionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_event_subscription#create RedshiftEventSubscription#create}. |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_event_subscription#delete RedshiftEventSubscription#delete}. |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_event_subscription#update RedshiftEventSubscription#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_event_subscription#create RedshiftEventSubscription#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_event_subscription#delete RedshiftEventSubscription#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_event_subscription#update RedshiftEventSubscription#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftEventSubscriptionTimeoutsOutputReference <a name="RedshiftEventSubscriptionTimeoutsOutputReference" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftEventSubscriptionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeouts">RedshiftEventSubscriptionTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RedshiftEventSubscriptionTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftEventSubscription.RedshiftEventSubscriptionTimeouts">RedshiftEventSubscriptionTimeouts</a>

---



