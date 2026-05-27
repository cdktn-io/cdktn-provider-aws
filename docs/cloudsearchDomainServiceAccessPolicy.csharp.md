# `cloudsearchDomainServiceAccessPolicy` Submodule <a name="`cloudsearchDomainServiceAccessPolicy` Submodule" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudsearchDomainServiceAccessPolicy <a name="CloudsearchDomainServiceAccessPolicy" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudsearch_domain_service_access_policy aws_cloudsearch_domain_service_access_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudsearchDomainServiceAccessPolicy(Construct Scope, string Id, CloudsearchDomainServiceAccessPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig">CloudsearchDomainServiceAccessPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig">CloudsearchDomainServiceAccessPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(CloudsearchDomainServiceAccessPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts">CloudsearchDomainServiceAccessPolicyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudsearchDomainServiceAccessPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudsearchDomainServiceAccessPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudsearchDomainServiceAccessPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudsearchDomainServiceAccessPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudsearchDomainServiceAccessPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CloudsearchDomainServiceAccessPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudsearchDomainServiceAccessPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudsearchDomainServiceAccessPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudsearch_domain_service_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CloudsearchDomainServiceAccessPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference">CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.accessPolicyInput">AccessPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts">CloudsearchDomainServiceAccessPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.accessPolicy">AccessPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.timeouts"></a>

```csharp
public CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference">CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference</a>

---

##### `AccessPolicyInput`<sup>Optional</sup> <a name="AccessPolicyInput" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.accessPolicyInput"></a>

```csharp
public string AccessPolicyInput { get; }
```

- *Type:* string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.timeoutsInput"></a>

```csharp
public IResolvable|CloudsearchDomainServiceAccessPolicyTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts">CloudsearchDomainServiceAccessPolicyTimeouts</a>

---

##### `AccessPolicy`<sup>Required</sup> <a name="AccessPolicy" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.accessPolicy"></a>

```csharp
public string AccessPolicy { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudsearchDomainServiceAccessPolicyConfig <a name="CloudsearchDomainServiceAccessPolicyConfig" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudsearchDomainServiceAccessPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccessPolicy,
    string DomainName,
    string Id = null,
    string Region = null,
    CloudsearchDomainServiceAccessPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.accessPolicy">AccessPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudsearch_domain_service_access_policy#access_policy CloudsearchDomainServiceAccessPolicy#access_policy}. |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudsearch_domain_service_access_policy#domain_name CloudsearchDomainServiceAccessPolicy#domain_name}. |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudsearch_domain_service_access_policy#id CloudsearchDomainServiceAccessPolicy#id}. |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts">CloudsearchDomainServiceAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessPolicy`<sup>Required</sup> <a name="AccessPolicy" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.accessPolicy"></a>

```csharp
public string AccessPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudsearch_domain_service_access_policy#access_policy CloudsearchDomainServiceAccessPolicy#access_policy}.

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudsearch_domain_service_access_policy#domain_name CloudsearchDomainServiceAccessPolicy#domain_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudsearch_domain_service_access_policy#id CloudsearchDomainServiceAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudsearch_domain_service_access_policy#region CloudsearchDomainServiceAccessPolicy#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.timeouts"></a>

```csharp
public CloudsearchDomainServiceAccessPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts">CloudsearchDomainServiceAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudsearch_domain_service_access_policy#timeouts CloudsearchDomainServiceAccessPolicy#timeouts}

---

### CloudsearchDomainServiceAccessPolicyTimeouts <a name="CloudsearchDomainServiceAccessPolicyTimeouts" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudsearchDomainServiceAccessPolicyTimeouts {
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudsearch_domain_service_access_policy#delete CloudsearchDomainServiceAccessPolicy#delete}. |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudsearch_domain_service_access_policy#update CloudsearchDomainServiceAccessPolicy#update}. |

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudsearch_domain_service_access_policy#delete CloudsearchDomainServiceAccessPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudsearch_domain_service_access_policy#update CloudsearchDomainServiceAccessPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference <a name="CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts">CloudsearchDomainServiceAccessPolicyTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudsearchDomainServiceAccessPolicyTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts">CloudsearchDomainServiceAccessPolicyTimeouts</a>

---



