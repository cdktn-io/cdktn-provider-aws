# `redshiftIdcApplication` Submodule <a name="`redshiftIdcApplication` Submodule" id="@cdktn/provider-aws.redshiftIdcApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftIdcApplication <a name="RedshiftIdcApplication" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_idc_application aws_redshift_idc_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftIdcApplication(Construct Scope, string Id, RedshiftIdcApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig">RedshiftIdcApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig">RedshiftIdcApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.putAuthorizedTokenIssuer">PutAuthorizedTokenIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.putServiceIntegration">PutServiceIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetApplicationType">ResetApplicationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetAuthorizedTokenIssuer">ResetAuthorizedTokenIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetIdentityNamespace">ResetIdentityNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetServiceIntegration">ResetServiceIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthorizedTokenIssuer` <a name="PutAuthorizedTokenIssuer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.putAuthorizedTokenIssuer"></a>

```csharp
private void PutAuthorizedTokenIssuer(IResolvable|RedshiftIdcApplicationAuthorizedTokenIssuer[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.putAuthorizedTokenIssuer.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a>[]

---

##### `PutServiceIntegration` <a name="PutServiceIntegration" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.putServiceIntegration"></a>

```csharp
private void PutServiceIntegration(IResolvable|RedshiftIdcApplicationServiceIntegration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.putServiceIntegration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a>[]

---

##### `ResetApplicationType` <a name="ResetApplicationType" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetApplicationType"></a>

```csharp
private void ResetApplicationType()
```

##### `ResetAuthorizedTokenIssuer` <a name="ResetAuthorizedTokenIssuer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetAuthorizedTokenIssuer"></a>

```csharp
private void ResetAuthorizedTokenIssuer()
```

##### `ResetIdentityNamespace` <a name="ResetIdentityNamespace" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetIdentityNamespace"></a>

```csharp
private void ResetIdentityNamespace()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetServiceIntegration` <a name="ResetServiceIntegration" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetServiceIntegration"></a>

```csharp
private void ResetServiceIntegration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftIdcApplication resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

RedshiftIdcApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

RedshiftIdcApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

RedshiftIdcApplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

RedshiftIdcApplication.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RedshiftIdcApplication resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RedshiftIdcApplication to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RedshiftIdcApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_idc_application#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftIdcApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.authorizedTokenIssuer">AuthorizedTokenIssuer</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList">RedshiftIdcApplicationAuthorizedTokenIssuerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcManagedApplicationArn">IdcManagedApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.redshiftIdcApplicationArn">RedshiftIdcApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.serviceIntegration">ServiceIntegration</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList">RedshiftIdcApplicationServiceIntegrationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.applicationTypeInput">ApplicationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.authorizedTokenIssuerInput">AuthorizedTokenIssuerInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.iamRoleArnInput">IamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcDisplayNameInput">IdcDisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcInstanceArnInput">IdcInstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.identityNamespaceInput">IdentityNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.redshiftIdcApplicationNameInput">RedshiftIdcApplicationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.serviceIntegrationInput">ServiceIntegrationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.applicationType">ApplicationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcDisplayName">IdcDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcInstanceArn">IdcInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.identityNamespace">IdentityNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.redshiftIdcApplicationName">RedshiftIdcApplicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AuthorizedTokenIssuer`<sup>Required</sup> <a name="AuthorizedTokenIssuer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.authorizedTokenIssuer"></a>

```csharp
public RedshiftIdcApplicationAuthorizedTokenIssuerList AuthorizedTokenIssuer { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList">RedshiftIdcApplicationAuthorizedTokenIssuerList</a>

---

##### `IdcManagedApplicationArn`<sup>Required</sup> <a name="IdcManagedApplicationArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcManagedApplicationArn"></a>

```csharp
public string IdcManagedApplicationArn { get; }
```

- *Type:* string

---

##### `RedshiftIdcApplicationArn`<sup>Required</sup> <a name="RedshiftIdcApplicationArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.redshiftIdcApplicationArn"></a>

```csharp
public string RedshiftIdcApplicationArn { get; }
```

- *Type:* string

---

##### `ServiceIntegration`<sup>Required</sup> <a name="ServiceIntegration" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.serviceIntegration"></a>

```csharp
public RedshiftIdcApplicationServiceIntegrationList ServiceIntegration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList">RedshiftIdcApplicationServiceIntegrationList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `ApplicationTypeInput`<sup>Optional</sup> <a name="ApplicationTypeInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.applicationTypeInput"></a>

```csharp
public string ApplicationTypeInput { get; }
```

- *Type:* string

---

##### `AuthorizedTokenIssuerInput`<sup>Optional</sup> <a name="AuthorizedTokenIssuerInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.authorizedTokenIssuerInput"></a>

```csharp
public IResolvable|RedshiftIdcApplicationAuthorizedTokenIssuer[] AuthorizedTokenIssuerInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a>[]

---

##### `IamRoleArnInput`<sup>Optional</sup> <a name="IamRoleArnInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.iamRoleArnInput"></a>

```csharp
public string IamRoleArnInput { get; }
```

- *Type:* string

---

##### `IdcDisplayNameInput`<sup>Optional</sup> <a name="IdcDisplayNameInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcDisplayNameInput"></a>

```csharp
public string IdcDisplayNameInput { get; }
```

- *Type:* string

---

##### `IdcInstanceArnInput`<sup>Optional</sup> <a name="IdcInstanceArnInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcInstanceArnInput"></a>

```csharp
public string IdcInstanceArnInput { get; }
```

- *Type:* string

---

##### `IdentityNamespaceInput`<sup>Optional</sup> <a name="IdentityNamespaceInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.identityNamespaceInput"></a>

```csharp
public string IdentityNamespaceInput { get; }
```

- *Type:* string

---

##### `RedshiftIdcApplicationNameInput`<sup>Optional</sup> <a name="RedshiftIdcApplicationNameInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.redshiftIdcApplicationNameInput"></a>

```csharp
public string RedshiftIdcApplicationNameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ServiceIntegrationInput`<sup>Optional</sup> <a name="ServiceIntegrationInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.serviceIntegrationInput"></a>

```csharp
public IResolvable|RedshiftIdcApplicationServiceIntegration[] ServiceIntegrationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ApplicationType`<sup>Required</sup> <a name="ApplicationType" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.applicationType"></a>

```csharp
public string ApplicationType { get; }
```

- *Type:* string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; }
```

- *Type:* string

---

##### `IdcDisplayName`<sup>Required</sup> <a name="IdcDisplayName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcDisplayName"></a>

```csharp
public string IdcDisplayName { get; }
```

- *Type:* string

---

##### `IdcInstanceArn`<sup>Required</sup> <a name="IdcInstanceArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcInstanceArn"></a>

```csharp
public string IdcInstanceArn { get; }
```

- *Type:* string

---

##### `IdentityNamespace`<sup>Required</sup> <a name="IdentityNamespace" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.identityNamespace"></a>

```csharp
public string IdentityNamespace { get; }
```

- *Type:* string

---

##### `RedshiftIdcApplicationName`<sup>Required</sup> <a name="RedshiftIdcApplicationName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.redshiftIdcApplicationName"></a>

```csharp
public string RedshiftIdcApplicationName { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftIdcApplicationAuthorizedTokenIssuer <a name="RedshiftIdcApplicationAuthorizedTokenIssuer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftIdcApplicationAuthorizedTokenIssuer {
    string[] AuthorizedAudiencesList = null,
    string TrustedTokenIssuerArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer.property.authorizedAudiencesList">AuthorizedAudiencesList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_idc_application#authorized_audiences_list RedshiftIdcApplication#authorized_audiences_list}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer.property.trustedTokenIssuerArn">TrustedTokenIssuerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_idc_application#trusted_token_issuer_arn RedshiftIdcApplication#trusted_token_issuer_arn}. |

---

##### `AuthorizedAudiencesList`<sup>Optional</sup> <a name="AuthorizedAudiencesList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer.property.authorizedAudiencesList"></a>

```csharp
public string[] AuthorizedAudiencesList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_idc_application#authorized_audiences_list RedshiftIdcApplication#authorized_audiences_list}.

---

##### `TrustedTokenIssuerArn`<sup>Optional</sup> <a name="TrustedTokenIssuerArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer.property.trustedTokenIssuerArn"></a>

```csharp
public string TrustedTokenIssuerArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_idc_application#trusted_token_issuer_arn RedshiftIdcApplication#trusted_token_issuer_arn}.

---

### RedshiftIdcApplicationConfig <a name="RedshiftIdcApplicationConfig" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftIdcApplicationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string IamRoleArn,
    string IdcDisplayName,
    string IdcInstanceArn,
    string RedshiftIdcApplicationName,
    string ApplicationType = null,
    IResolvable|RedshiftIdcApplicationAuthorizedTokenIssuer[] AuthorizedTokenIssuer = null,
    string IdentityNamespace = null,
    string Region = null,
    IResolvable|RedshiftIdcApplicationServiceIntegration[] ServiceIntegration = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_idc_application#iam_role_arn RedshiftIdcApplication#iam_role_arn}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.idcDisplayName">IdcDisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_idc_application#idc_display_name RedshiftIdcApplication#idc_display_name}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.idcInstanceArn">IdcInstanceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_idc_application#idc_instance_arn RedshiftIdcApplication#idc_instance_arn}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.redshiftIdcApplicationName">RedshiftIdcApplicationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_idc_application#redshift_idc_application_name RedshiftIdcApplication#redshift_idc_application_name}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.applicationType">ApplicationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_idc_application#application_type RedshiftIdcApplication#application_type}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.authorizedTokenIssuer">AuthorizedTokenIssuer</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a>[]</code> | authorized_token_issuer block. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.identityNamespace">IdentityNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_idc_application#identity_namespace RedshiftIdcApplication#identity_namespace}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.serviceIntegration">ServiceIntegration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a>[]</code> | service_integration block. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_idc_application#tags RedshiftIdcApplication#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_idc_application#iam_role_arn RedshiftIdcApplication#iam_role_arn}.

---

##### `IdcDisplayName`<sup>Required</sup> <a name="IdcDisplayName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.idcDisplayName"></a>

```csharp
public string IdcDisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_idc_application#idc_display_name RedshiftIdcApplication#idc_display_name}.

---

##### `IdcInstanceArn`<sup>Required</sup> <a name="IdcInstanceArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.idcInstanceArn"></a>

```csharp
public string IdcInstanceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_idc_application#idc_instance_arn RedshiftIdcApplication#idc_instance_arn}.

---

##### `RedshiftIdcApplicationName`<sup>Required</sup> <a name="RedshiftIdcApplicationName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.redshiftIdcApplicationName"></a>

```csharp
public string RedshiftIdcApplicationName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_idc_application#redshift_idc_application_name RedshiftIdcApplication#redshift_idc_application_name}.

---

##### `ApplicationType`<sup>Optional</sup> <a name="ApplicationType" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.applicationType"></a>

```csharp
public string ApplicationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_idc_application#application_type RedshiftIdcApplication#application_type}.

---

##### `AuthorizedTokenIssuer`<sup>Optional</sup> <a name="AuthorizedTokenIssuer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.authorizedTokenIssuer"></a>

```csharp
public IResolvable|RedshiftIdcApplicationAuthorizedTokenIssuer[] AuthorizedTokenIssuer { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a>[]

authorized_token_issuer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_idc_application#authorized_token_issuer RedshiftIdcApplication#authorized_token_issuer}

---

##### `IdentityNamespace`<sup>Optional</sup> <a name="IdentityNamespace" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.identityNamespace"></a>

```csharp
public string IdentityNamespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_idc_application#identity_namespace RedshiftIdcApplication#identity_namespace}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_idc_application#region RedshiftIdcApplication#region}

---

##### `ServiceIntegration`<sup>Optional</sup> <a name="ServiceIntegration" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.serviceIntegration"></a>

```csharp
public IResolvable|RedshiftIdcApplicationServiceIntegration[] ServiceIntegration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a>[]

service_integration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_idc_application#service_integration RedshiftIdcApplication#service_integration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_idc_application#tags RedshiftIdcApplication#tags}.

---

### RedshiftIdcApplicationServiceIntegration <a name="RedshiftIdcApplicationServiceIntegration" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftIdcApplicationServiceIntegration {
    IResolvable|RedshiftIdcApplicationServiceIntegrationLakeFormation[] LakeFormation = null,
    IResolvable|RedshiftIdcApplicationServiceIntegrationRedshift[] Redshift = null,
    IResolvable|RedshiftIdcApplicationServiceIntegrationS3AccessGrants[] S3AccessGrants = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration.property.lakeFormation">LakeFormation</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation">RedshiftIdcApplicationServiceIntegrationLakeFormation</a>[]</code> | lake_formation block. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration.property.redshift">Redshift</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift">RedshiftIdcApplicationServiceIntegrationRedshift</a>[]</code> | redshift block. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration.property.s3AccessGrants">S3AccessGrants</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants">RedshiftIdcApplicationServiceIntegrationS3AccessGrants</a>[]</code> | s3_access_grants block. |

---

##### `LakeFormation`<sup>Optional</sup> <a name="LakeFormation" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration.property.lakeFormation"></a>

```csharp
public IResolvable|RedshiftIdcApplicationServiceIntegrationLakeFormation[] LakeFormation { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation">RedshiftIdcApplicationServiceIntegrationLakeFormation</a>[]

lake_formation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_idc_application#lake_formation RedshiftIdcApplication#lake_formation}

---

##### `Redshift`<sup>Optional</sup> <a name="Redshift" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration.property.redshift"></a>

```csharp
public IResolvable|RedshiftIdcApplicationServiceIntegrationRedshift[] Redshift { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift">RedshiftIdcApplicationServiceIntegrationRedshift</a>[]

redshift block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_idc_application#redshift RedshiftIdcApplication#redshift}

---

##### `S3AccessGrants`<sup>Optional</sup> <a name="S3AccessGrants" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration.property.s3AccessGrants"></a>

```csharp
public IResolvable|RedshiftIdcApplicationServiceIntegrationS3AccessGrants[] S3AccessGrants { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants">RedshiftIdcApplicationServiceIntegrationS3AccessGrants</a>[]

s3_access_grants block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_idc_application#s3_access_grants RedshiftIdcApplication#s3_access_grants}

---

### RedshiftIdcApplicationServiceIntegrationLakeFormation <a name="RedshiftIdcApplicationServiceIntegrationLakeFormation" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftIdcApplicationServiceIntegrationLakeFormation {
    IResolvable|RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery[] LakeFormationQuery = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation.property.lakeFormationQuery">LakeFormationQuery</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery</a>[]</code> | lake_formation_query block. |

---

##### `LakeFormationQuery`<sup>Optional</sup> <a name="LakeFormationQuery" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation.property.lakeFormationQuery"></a>

```csharp
public IResolvable|RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery[] LakeFormationQuery { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery</a>[]

lake_formation_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_idc_application#lake_formation_query RedshiftIdcApplication#lake_formation_query}

---

### RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery <a name="RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery {
    string Authorization
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery.property.authorization">Authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_idc_application#authorization RedshiftIdcApplication#authorization}. |

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery.property.authorization"></a>

```csharp
public string Authorization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_idc_application#authorization RedshiftIdcApplication#authorization}.

---

### RedshiftIdcApplicationServiceIntegrationRedshift <a name="RedshiftIdcApplicationServiceIntegrationRedshift" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftIdcApplicationServiceIntegrationRedshift {
    IResolvable|RedshiftIdcApplicationServiceIntegrationRedshiftConnect[] Connect = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift.property.connect">Connect</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect">RedshiftIdcApplicationServiceIntegrationRedshiftConnect</a>[]</code> | connect block. |

---

##### `Connect`<sup>Optional</sup> <a name="Connect" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift.property.connect"></a>

```csharp
public IResolvable|RedshiftIdcApplicationServiceIntegrationRedshiftConnect[] Connect { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect">RedshiftIdcApplicationServiceIntegrationRedshiftConnect</a>[]

connect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_idc_application#connect RedshiftIdcApplication#connect}

---

### RedshiftIdcApplicationServiceIntegrationRedshiftConnect <a name="RedshiftIdcApplicationServiceIntegrationRedshiftConnect" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftIdcApplicationServiceIntegrationRedshiftConnect {
    string Authorization
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect.property.authorization">Authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_idc_application#authorization RedshiftIdcApplication#authorization}. |

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect.property.authorization"></a>

```csharp
public string Authorization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_idc_application#authorization RedshiftIdcApplication#authorization}.

---

### RedshiftIdcApplicationServiceIntegrationS3AccessGrants <a name="RedshiftIdcApplicationServiceIntegrationS3AccessGrants" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftIdcApplicationServiceIntegrationS3AccessGrants {
    IResolvable|RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess[] ReadWriteAccess = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants.property.readWriteAccess">ReadWriteAccess</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess</a>[]</code> | read_write_access block. |

---

##### `ReadWriteAccess`<sup>Optional</sup> <a name="ReadWriteAccess" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants.property.readWriteAccess"></a>

```csharp
public IResolvable|RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess[] ReadWriteAccess { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess</a>[]

read_write_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_idc_application#read_write_access RedshiftIdcApplication#read_write_access}

---

### RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess <a name="RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess {
    string Authorization
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess.property.authorization">Authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_idc_application#authorization RedshiftIdcApplication#authorization}. |

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess.property.authorization"></a>

```csharp
public string Authorization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/redshift_idc_application#authorization RedshiftIdcApplication#authorization}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftIdcApplicationAuthorizedTokenIssuerList <a name="RedshiftIdcApplicationAuthorizedTokenIssuerList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftIdcApplicationAuthorizedTokenIssuerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.get"></a>

```csharp
private RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.property.internalValue"></a>

```csharp
public IResolvable|RedshiftIdcApplicationAuthorizedTokenIssuer[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a>[]

---


### RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference <a name="RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.resetAuthorizedAudiencesList">ResetAuthorizedAudiencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.resetTrustedTokenIssuerArn">ResetTrustedTokenIssuerArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizedAudiencesList` <a name="ResetAuthorizedAudiencesList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.resetAuthorizedAudiencesList"></a>

```csharp
private void ResetAuthorizedAudiencesList()
```

##### `ResetTrustedTokenIssuerArn` <a name="ResetTrustedTokenIssuerArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.resetTrustedTokenIssuerArn"></a>

```csharp
private void ResetTrustedTokenIssuerArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.authorizedAudiencesListInput">AuthorizedAudiencesListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.trustedTokenIssuerArnInput">TrustedTokenIssuerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.authorizedAudiencesList">AuthorizedAudiencesList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.trustedTokenIssuerArn">TrustedTokenIssuerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizedAudiencesListInput`<sup>Optional</sup> <a name="AuthorizedAudiencesListInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.authorizedAudiencesListInput"></a>

```csharp
public string[] AuthorizedAudiencesListInput { get; }
```

- *Type:* string[]

---

##### `TrustedTokenIssuerArnInput`<sup>Optional</sup> <a name="TrustedTokenIssuerArnInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.trustedTokenIssuerArnInput"></a>

```csharp
public string TrustedTokenIssuerArnInput { get; }
```

- *Type:* string

---

##### `AuthorizedAudiencesList`<sup>Required</sup> <a name="AuthorizedAudiencesList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.authorizedAudiencesList"></a>

```csharp
public string[] AuthorizedAudiencesList { get; }
```

- *Type:* string[]

---

##### `TrustedTokenIssuerArn`<sup>Required</sup> <a name="TrustedTokenIssuerArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.trustedTokenIssuerArn"></a>

```csharp
public string TrustedTokenIssuerArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RedshiftIdcApplicationAuthorizedTokenIssuer InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a>

---


### RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList <a name="RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.get"></a>

```csharp
private RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.property.internalValue"></a>

```csharp
public IResolvable|RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery</a>[]

---


### RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference <a name="RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.authorizationInput">AuthorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.authorizationInput"></a>

```csharp
public string AuthorizationInput { get; }
```

- *Type:* string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery</a>

---


### RedshiftIdcApplicationServiceIntegrationLakeFormationList <a name="RedshiftIdcApplicationServiceIntegrationLakeFormationList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftIdcApplicationServiceIntegrationLakeFormationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.get"></a>

```csharp
private RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation">RedshiftIdcApplicationServiceIntegrationLakeFormation</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.property.internalValue"></a>

```csharp
public IResolvable|RedshiftIdcApplicationServiceIntegrationLakeFormation[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation">RedshiftIdcApplicationServiceIntegrationLakeFormation</a>[]

---


### RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference <a name="RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.putLakeFormationQuery">PutLakeFormationQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.resetLakeFormationQuery">ResetLakeFormationQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLakeFormationQuery` <a name="PutLakeFormationQuery" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.putLakeFormationQuery"></a>

```csharp
private void PutLakeFormationQuery(IResolvable|RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.putLakeFormationQuery.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery</a>[]

---

##### `ResetLakeFormationQuery` <a name="ResetLakeFormationQuery" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.resetLakeFormationQuery"></a>

```csharp
private void ResetLakeFormationQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.lakeFormationQuery">LakeFormationQuery</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.lakeFormationQueryInput">LakeFormationQueryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation">RedshiftIdcApplicationServiceIntegrationLakeFormation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LakeFormationQuery`<sup>Required</sup> <a name="LakeFormationQuery" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.lakeFormationQuery"></a>

```csharp
public RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList LakeFormationQuery { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList</a>

---

##### `LakeFormationQueryInput`<sup>Optional</sup> <a name="LakeFormationQueryInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.lakeFormationQueryInput"></a>

```csharp
public IResolvable|RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery[] LakeFormationQueryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RedshiftIdcApplicationServiceIntegrationLakeFormation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation">RedshiftIdcApplicationServiceIntegrationLakeFormation</a>

---


### RedshiftIdcApplicationServiceIntegrationList <a name="RedshiftIdcApplicationServiceIntegrationList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftIdcApplicationServiceIntegrationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.get"></a>

```csharp
private RedshiftIdcApplicationServiceIntegrationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.property.internalValue"></a>

```csharp
public IResolvable|RedshiftIdcApplicationServiceIntegration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a>[]

---


### RedshiftIdcApplicationServiceIntegrationOutputReference <a name="RedshiftIdcApplicationServiceIntegrationOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftIdcApplicationServiceIntegrationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putLakeFormation">PutLakeFormation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putRedshift">PutRedshift</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putS3AccessGrants">PutS3AccessGrants</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resetLakeFormation">ResetLakeFormation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resetRedshift">ResetRedshift</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resetS3AccessGrants">ResetS3AccessGrants</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLakeFormation` <a name="PutLakeFormation" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putLakeFormation"></a>

```csharp
private void PutLakeFormation(IResolvable|RedshiftIdcApplicationServiceIntegrationLakeFormation[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putLakeFormation.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation">RedshiftIdcApplicationServiceIntegrationLakeFormation</a>[]

---

##### `PutRedshift` <a name="PutRedshift" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putRedshift"></a>

```csharp
private void PutRedshift(IResolvable|RedshiftIdcApplicationServiceIntegrationRedshift[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putRedshift.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift">RedshiftIdcApplicationServiceIntegrationRedshift</a>[]

---

##### `PutS3AccessGrants` <a name="PutS3AccessGrants" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putS3AccessGrants"></a>

```csharp
private void PutS3AccessGrants(IResolvable|RedshiftIdcApplicationServiceIntegrationS3AccessGrants[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putS3AccessGrants.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants">RedshiftIdcApplicationServiceIntegrationS3AccessGrants</a>[]

---

##### `ResetLakeFormation` <a name="ResetLakeFormation" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resetLakeFormation"></a>

```csharp
private void ResetLakeFormation()
```

##### `ResetRedshift` <a name="ResetRedshift" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resetRedshift"></a>

```csharp
private void ResetRedshift()
```

##### `ResetS3AccessGrants` <a name="ResetS3AccessGrants" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resetS3AccessGrants"></a>

```csharp
private void ResetS3AccessGrants()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.lakeFormation">LakeFormation</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList">RedshiftIdcApplicationServiceIntegrationLakeFormationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.redshift">Redshift</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList">RedshiftIdcApplicationServiceIntegrationRedshiftList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.s3AccessGrants">S3AccessGrants</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.lakeFormationInput">LakeFormationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation">RedshiftIdcApplicationServiceIntegrationLakeFormation</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.redshiftInput">RedshiftInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift">RedshiftIdcApplicationServiceIntegrationRedshift</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.s3AccessGrantsInput">S3AccessGrantsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants">RedshiftIdcApplicationServiceIntegrationS3AccessGrants</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LakeFormation`<sup>Required</sup> <a name="LakeFormation" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.lakeFormation"></a>

```csharp
public RedshiftIdcApplicationServiceIntegrationLakeFormationList LakeFormation { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList">RedshiftIdcApplicationServiceIntegrationLakeFormationList</a>

---

##### `Redshift`<sup>Required</sup> <a name="Redshift" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.redshift"></a>

```csharp
public RedshiftIdcApplicationServiceIntegrationRedshiftList Redshift { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList">RedshiftIdcApplicationServiceIntegrationRedshiftList</a>

---

##### `S3AccessGrants`<sup>Required</sup> <a name="S3AccessGrants" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.s3AccessGrants"></a>

```csharp
public RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList S3AccessGrants { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList</a>

---

##### `LakeFormationInput`<sup>Optional</sup> <a name="LakeFormationInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.lakeFormationInput"></a>

```csharp
public IResolvable|RedshiftIdcApplicationServiceIntegrationLakeFormation[] LakeFormationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation">RedshiftIdcApplicationServiceIntegrationLakeFormation</a>[]

---

##### `RedshiftInput`<sup>Optional</sup> <a name="RedshiftInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.redshiftInput"></a>

```csharp
public IResolvable|RedshiftIdcApplicationServiceIntegrationRedshift[] RedshiftInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift">RedshiftIdcApplicationServiceIntegrationRedshift</a>[]

---

##### `S3AccessGrantsInput`<sup>Optional</sup> <a name="S3AccessGrantsInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.s3AccessGrantsInput"></a>

```csharp
public IResolvable|RedshiftIdcApplicationServiceIntegrationS3AccessGrants[] S3AccessGrantsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants">RedshiftIdcApplicationServiceIntegrationS3AccessGrants</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RedshiftIdcApplicationServiceIntegration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a>

---


### RedshiftIdcApplicationServiceIntegrationRedshiftConnectList <a name="RedshiftIdcApplicationServiceIntegrationRedshiftConnectList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftIdcApplicationServiceIntegrationRedshiftConnectList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.get"></a>

```csharp
private RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect">RedshiftIdcApplicationServiceIntegrationRedshiftConnect</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.property.internalValue"></a>

```csharp
public IResolvable|RedshiftIdcApplicationServiceIntegrationRedshiftConnect[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect">RedshiftIdcApplicationServiceIntegrationRedshiftConnect</a>[]

---


### RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference <a name="RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.authorizationInput">AuthorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect">RedshiftIdcApplicationServiceIntegrationRedshiftConnect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.authorizationInput"></a>

```csharp
public string AuthorizationInput { get; }
```

- *Type:* string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RedshiftIdcApplicationServiceIntegrationRedshiftConnect InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect">RedshiftIdcApplicationServiceIntegrationRedshiftConnect</a>

---


### RedshiftIdcApplicationServiceIntegrationRedshiftList <a name="RedshiftIdcApplicationServiceIntegrationRedshiftList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftIdcApplicationServiceIntegrationRedshiftList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.get"></a>

```csharp
private RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift">RedshiftIdcApplicationServiceIntegrationRedshift</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.property.internalValue"></a>

```csharp
public IResolvable|RedshiftIdcApplicationServiceIntegrationRedshift[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift">RedshiftIdcApplicationServiceIntegrationRedshift</a>[]

---


### RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference <a name="RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.putConnect">PutConnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.resetConnect">ResetConnect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConnect` <a name="PutConnect" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.putConnect"></a>

```csharp
private void PutConnect(IResolvable|RedshiftIdcApplicationServiceIntegrationRedshiftConnect[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.putConnect.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect">RedshiftIdcApplicationServiceIntegrationRedshiftConnect</a>[]

---

##### `ResetConnect` <a name="ResetConnect" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.resetConnect"></a>

```csharp
private void ResetConnect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.connect">Connect</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList">RedshiftIdcApplicationServiceIntegrationRedshiftConnectList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.connectInput">ConnectInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect">RedshiftIdcApplicationServiceIntegrationRedshiftConnect</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift">RedshiftIdcApplicationServiceIntegrationRedshift</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Connect`<sup>Required</sup> <a name="Connect" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.connect"></a>

```csharp
public RedshiftIdcApplicationServiceIntegrationRedshiftConnectList Connect { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList">RedshiftIdcApplicationServiceIntegrationRedshiftConnectList</a>

---

##### `ConnectInput`<sup>Optional</sup> <a name="ConnectInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.connectInput"></a>

```csharp
public IResolvable|RedshiftIdcApplicationServiceIntegrationRedshiftConnect[] ConnectInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect">RedshiftIdcApplicationServiceIntegrationRedshiftConnect</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RedshiftIdcApplicationServiceIntegrationRedshift InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift">RedshiftIdcApplicationServiceIntegrationRedshift</a>

---


### RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList <a name="RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.get"></a>

```csharp
private RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants">RedshiftIdcApplicationServiceIntegrationS3AccessGrants</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.property.internalValue"></a>

```csharp
public IResolvable|RedshiftIdcApplicationServiceIntegrationS3AccessGrants[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants">RedshiftIdcApplicationServiceIntegrationS3AccessGrants</a>[]

---


### RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference <a name="RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.putReadWriteAccess">PutReadWriteAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.resetReadWriteAccess">ResetReadWriteAccess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutReadWriteAccess` <a name="PutReadWriteAccess" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.putReadWriteAccess"></a>

```csharp
private void PutReadWriteAccess(IResolvable|RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.putReadWriteAccess.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess</a>[]

---

##### `ResetReadWriteAccess` <a name="ResetReadWriteAccess" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.resetReadWriteAccess"></a>

```csharp
private void ResetReadWriteAccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.readWriteAccess">ReadWriteAccess</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.readWriteAccessInput">ReadWriteAccessInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants">RedshiftIdcApplicationServiceIntegrationS3AccessGrants</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadWriteAccess`<sup>Required</sup> <a name="ReadWriteAccess" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.readWriteAccess"></a>

```csharp
public RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList ReadWriteAccess { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList</a>

---

##### `ReadWriteAccessInput`<sup>Optional</sup> <a name="ReadWriteAccessInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.readWriteAccessInput"></a>

```csharp
public IResolvable|RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess[] ReadWriteAccessInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RedshiftIdcApplicationServiceIntegrationS3AccessGrants InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants">RedshiftIdcApplicationServiceIntegrationS3AccessGrants</a>

---


### RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList <a name="RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.get"></a>

```csharp
private RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.property.internalValue"></a>

```csharp
public IResolvable|RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess</a>[]

---


### RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference <a name="RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.authorizationInput">AuthorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.authorizationInput"></a>

```csharp
public string AuthorizationInput { get; }
```

- *Type:* string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess</a>

---



