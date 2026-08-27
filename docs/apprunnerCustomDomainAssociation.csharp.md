# `apprunnerCustomDomainAssociation` Submodule <a name="`apprunnerCustomDomainAssociation` Submodule" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApprunnerCustomDomainAssociation <a name="ApprunnerCustomDomainAssociation" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_custom_domain_association aws_apprunner_custom_domain_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ApprunnerCustomDomainAssociation(Construct Scope, string Id, ApprunnerCustomDomainAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig">ApprunnerCustomDomainAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig">ApprunnerCustomDomainAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.resetEnableWwwSubdomain">ResetEnableWwwSubdomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetEnableWwwSubdomain` <a name="ResetEnableWwwSubdomain" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.resetEnableWwwSubdomain"></a>

```csharp
private void ResetEnableWwwSubdomain()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApprunnerCustomDomainAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ApprunnerCustomDomainAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ApprunnerCustomDomainAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ApprunnerCustomDomainAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ApprunnerCustomDomainAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApprunnerCustomDomainAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApprunnerCustomDomainAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApprunnerCustomDomainAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_custom_domain_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApprunnerCustomDomainAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.certificateValidationRecords">CertificateValidationRecords</a></code> | <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList">ApprunnerCustomDomainAssociationCertificateValidationRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.dnsTarget">DnsTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.enableWwwSubdomainInput">EnableWwwSubdomainInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.serviceArnInput">ServiceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.enableWwwSubdomain">EnableWwwSubdomain</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.serviceArn">ServiceArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CertificateValidationRecords`<sup>Required</sup> <a name="CertificateValidationRecords" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.certificateValidationRecords"></a>

```csharp
public ApprunnerCustomDomainAssociationCertificateValidationRecordsList CertificateValidationRecords { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList">ApprunnerCustomDomainAssociationCertificateValidationRecordsList</a>

---

##### `DnsTarget`<sup>Required</sup> <a name="DnsTarget" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.dnsTarget"></a>

```csharp
public string DnsTarget { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `EnableWwwSubdomainInput`<sup>Optional</sup> <a name="EnableWwwSubdomainInput" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.enableWwwSubdomainInput"></a>

```csharp
public bool|IResolvable EnableWwwSubdomainInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ServiceArnInput`<sup>Optional</sup> <a name="ServiceArnInput" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.serviceArnInput"></a>

```csharp
public string ServiceArnInput { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `EnableWwwSubdomain`<sup>Required</sup> <a name="EnableWwwSubdomain" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.enableWwwSubdomain"></a>

```csharp
public bool|IResolvable EnableWwwSubdomain { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ServiceArn`<sup>Required</sup> <a name="ServiceArn" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.serviceArn"></a>

```csharp
public string ServiceArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApprunnerCustomDomainAssociationCertificateValidationRecords <a name="ApprunnerCustomDomainAssociationCertificateValidationRecords" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecords"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecords.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ApprunnerCustomDomainAssociationCertificateValidationRecords {

};
```


### ApprunnerCustomDomainAssociationConfig <a name="ApprunnerCustomDomainAssociationConfig" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ApprunnerCustomDomainAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DomainName,
    string ServiceArn,
    bool|IResolvable EnableWwwSubdomain = null,
    string Id = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_custom_domain_association#domain_name ApprunnerCustomDomainAssociation#domain_name}. |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.serviceArn">ServiceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_custom_domain_association#service_arn ApprunnerCustomDomainAssociation#service_arn}. |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.enableWwwSubdomain">EnableWwwSubdomain</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_custom_domain_association#enable_www_subdomain ApprunnerCustomDomainAssociation#enable_www_subdomain}. |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_custom_domain_association#id ApprunnerCustomDomainAssociation#id}. |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_custom_domain_association#domain_name ApprunnerCustomDomainAssociation#domain_name}.

---

##### `ServiceArn`<sup>Required</sup> <a name="ServiceArn" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.serviceArn"></a>

```csharp
public string ServiceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_custom_domain_association#service_arn ApprunnerCustomDomainAssociation#service_arn}.

---

##### `EnableWwwSubdomain`<sup>Optional</sup> <a name="EnableWwwSubdomain" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.enableWwwSubdomain"></a>

```csharp
public bool|IResolvable EnableWwwSubdomain { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_custom_domain_association#enable_www_subdomain ApprunnerCustomDomainAssociation#enable_www_subdomain}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_custom_domain_association#id ApprunnerCustomDomainAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apprunner_custom_domain_association#region ApprunnerCustomDomainAssociation#region}

---

## Classes <a name="Classes" id="Classes"></a>

### ApprunnerCustomDomainAssociationCertificateValidationRecordsList <a name="ApprunnerCustomDomainAssociationCertificateValidationRecordsList" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ApprunnerCustomDomainAssociationCertificateValidationRecordsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.get"></a>

```csharp
private ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference <a name="ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecords">ApprunnerCustomDomainAssociationCertificateValidationRecords</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.internalValue"></a>

```csharp
public ApprunnerCustomDomainAssociationCertificateValidationRecords InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecords">ApprunnerCustomDomainAssociationCertificateValidationRecords</a>

---



