# `lambdaFunctionUrl` Submodule <a name="`lambdaFunctionUrl` Submodule" id="@cdktn/provider-aws.lambdaFunctionUrl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaFunctionUrl <a name="LambdaFunctionUrl" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url aws_lambda_function_url}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer"></a>

```java
import io.cdktn.providers.aws.lambda_function_url.LambdaFunctionUrl;

LambdaFunctionUrl.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .authorizationType(java.lang.String)
    .functionName(java.lang.String)
//  .cors(LambdaFunctionUrlCors)
//  .id(java.lang.String)
//  .invokeMode(java.lang.String)
//  .qualifier(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(LambdaFunctionUrlTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.authorizationType">authorizationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#authorization_type LambdaFunctionUrl#authorization_type}. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.functionName">functionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#function_name LambdaFunctionUrl#function_name}. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.cors">cors</a></code> | <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors">LambdaFunctionUrlCors</a></code> | cors block. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#id LambdaFunctionUrl#id}. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.invokeMode">invokeMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#invoke_mode LambdaFunctionUrl#invoke_mode}. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.qualifier">qualifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#qualifier LambdaFunctionUrl#qualifier}. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts">LambdaFunctionUrlTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authorizationType`<sup>Required</sup> <a name="authorizationType" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.authorizationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#authorization_type LambdaFunctionUrl#authorization_type}.

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.functionName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#function_name LambdaFunctionUrl#function_name}.

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.cors"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors">LambdaFunctionUrlCors</a>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#cors LambdaFunctionUrl#cors}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#id LambdaFunctionUrl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `invokeMode`<sup>Optional</sup> <a name="invokeMode" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.invokeMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#invoke_mode LambdaFunctionUrl#invoke_mode}.

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.qualifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#qualifier LambdaFunctionUrl#qualifier}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#region LambdaFunctionUrl#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts">LambdaFunctionUrlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#timeouts LambdaFunctionUrl#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.putCors">putCors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.resetCors">resetCors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.resetInvokeMode">resetInvokeMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.resetQualifier">resetQualifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCors` <a name="putCors" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.putCors"></a>

```java
public void putCors(LambdaFunctionUrlCors value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.putCors.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors">LambdaFunctionUrlCors</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.putTimeouts"></a>

```java
public void putTimeouts(LambdaFunctionUrlTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts">LambdaFunctionUrlTimeouts</a>

---

##### `resetCors` <a name="resetCors" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.resetCors"></a>

```java
public void resetCors()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.resetId"></a>

```java
public void resetId()
```

##### `resetInvokeMode` <a name="resetInvokeMode" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.resetInvokeMode"></a>

```java
public void resetInvokeMode()
```

##### `resetQualifier` <a name="resetQualifier" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.resetQualifier"></a>

```java
public void resetQualifier()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaFunctionUrl resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.isConstruct"></a>

```java
import io.cdktn.providers.aws.lambda_function_url.LambdaFunctionUrl;

LambdaFunctionUrl.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.lambda_function_url.LambdaFunctionUrl;

LambdaFunctionUrl.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.lambda_function_url.LambdaFunctionUrl;

LambdaFunctionUrl.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.lambda_function_url.LambdaFunctionUrl;

LambdaFunctionUrl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LambdaFunctionUrl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LambdaFunctionUrl resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LambdaFunctionUrl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LambdaFunctionUrl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LambdaFunctionUrl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.cors">cors</a></code> | <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference">LambdaFunctionUrlCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.functionArn">functionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.functionUrl">functionUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference">LambdaFunctionUrlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.urlId">urlId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.authorizationTypeInput">authorizationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.corsInput">corsInput</a></code> | <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors">LambdaFunctionUrlCors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.functionNameInput">functionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.invokeModeInput">invokeModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.qualifierInput">qualifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts">LambdaFunctionUrlTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.authorizationType">authorizationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.functionName">functionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.invokeMode">invokeMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.qualifier">qualifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.cors"></a>

```java
public LambdaFunctionUrlCorsOutputReference getCors();
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference">LambdaFunctionUrlCorsOutputReference</a>

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.functionArn"></a>

```java
public java.lang.String getFunctionArn();
```

- *Type:* java.lang.String

---

##### `functionUrl`<sup>Required</sup> <a name="functionUrl" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.functionUrl"></a>

```java
public java.lang.String getFunctionUrl();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.timeouts"></a>

```java
public LambdaFunctionUrlTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference">LambdaFunctionUrlTimeoutsOutputReference</a>

---

##### `urlId`<sup>Required</sup> <a name="urlId" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.urlId"></a>

```java
public java.lang.String getUrlId();
```

- *Type:* java.lang.String

---

##### `authorizationTypeInput`<sup>Optional</sup> <a name="authorizationTypeInput" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.authorizationTypeInput"></a>

```java
public java.lang.String getAuthorizationTypeInput();
```

- *Type:* java.lang.String

---

##### `corsInput`<sup>Optional</sup> <a name="corsInput" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.corsInput"></a>

```java
public LambdaFunctionUrlCors getCorsInput();
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors">LambdaFunctionUrlCors</a>

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.functionNameInput"></a>

```java
public java.lang.String getFunctionNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `invokeModeInput`<sup>Optional</sup> <a name="invokeModeInput" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.invokeModeInput"></a>

```java
public java.lang.String getInvokeModeInput();
```

- *Type:* java.lang.String

---

##### `qualifierInput`<sup>Optional</sup> <a name="qualifierInput" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.qualifierInput"></a>

```java
public java.lang.String getQualifierInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.timeoutsInput"></a>

```java
public IResolvable|LambdaFunctionUrlTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts">LambdaFunctionUrlTimeouts</a>

---

##### `authorizationType`<sup>Required</sup> <a name="authorizationType" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.authorizationType"></a>

```java
public java.lang.String getAuthorizationType();
```

- *Type:* java.lang.String

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `invokeMode`<sup>Required</sup> <a name="invokeMode" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.invokeMode"></a>

```java
public java.lang.String getInvokeMode();
```

- *Type:* java.lang.String

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.qualifier"></a>

```java
public java.lang.String getQualifier();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaFunctionUrlConfig <a name="LambdaFunctionUrlConfig" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.lambda_function_url.LambdaFunctionUrlConfig;

LambdaFunctionUrlConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .authorizationType(java.lang.String)
    .functionName(java.lang.String)
//  .cors(LambdaFunctionUrlCors)
//  .id(java.lang.String)
//  .invokeMode(java.lang.String)
//  .qualifier(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(LambdaFunctionUrlTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.authorizationType">authorizationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#authorization_type LambdaFunctionUrl#authorization_type}. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.functionName">functionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#function_name LambdaFunctionUrl#function_name}. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.cors">cors</a></code> | <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors">LambdaFunctionUrlCors</a></code> | cors block. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#id LambdaFunctionUrl#id}. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.invokeMode">invokeMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#invoke_mode LambdaFunctionUrl#invoke_mode}. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.qualifier">qualifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#qualifier LambdaFunctionUrl#qualifier}. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts">LambdaFunctionUrlTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authorizationType`<sup>Required</sup> <a name="authorizationType" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.authorizationType"></a>

```java
public java.lang.String getAuthorizationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#authorization_type LambdaFunctionUrl#authorization_type}.

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#function_name LambdaFunctionUrl#function_name}.

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.cors"></a>

```java
public LambdaFunctionUrlCors getCors();
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors">LambdaFunctionUrlCors</a>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#cors LambdaFunctionUrl#cors}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#id LambdaFunctionUrl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `invokeMode`<sup>Optional</sup> <a name="invokeMode" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.invokeMode"></a>

```java
public java.lang.String getInvokeMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#invoke_mode LambdaFunctionUrl#invoke_mode}.

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.qualifier"></a>

```java
public java.lang.String getQualifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#qualifier LambdaFunctionUrl#qualifier}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#region LambdaFunctionUrl#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.timeouts"></a>

```java
public LambdaFunctionUrlTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts">LambdaFunctionUrlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#timeouts LambdaFunctionUrl#timeouts}

---

### LambdaFunctionUrlCors <a name="LambdaFunctionUrlCors" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.Initializer"></a>

```java
import io.cdktn.providers.aws.lambda_function_url.LambdaFunctionUrlCors;

LambdaFunctionUrlCors.builder()
//  .allowCredentials(java.lang.Boolean|IResolvable)
//  .allowHeaders(java.util.List<java.lang.String>)
//  .allowMethods(java.util.List<java.lang.String>)
//  .allowOrigins(java.util.List<java.lang.String>)
//  .exposeHeaders(java.util.List<java.lang.String>)
//  .maxAge(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.property.allowCredentials">allowCredentials</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#allow_credentials LambdaFunctionUrl#allow_credentials}. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.property.allowHeaders">allowHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#allow_headers LambdaFunctionUrl#allow_headers}. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.property.allowMethods">allowMethods</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#allow_methods LambdaFunctionUrl#allow_methods}. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.property.allowOrigins">allowOrigins</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#allow_origins LambdaFunctionUrl#allow_origins}. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.property.exposeHeaders">exposeHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#expose_headers LambdaFunctionUrl#expose_headers}. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.property.maxAge">maxAge</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#max_age LambdaFunctionUrl#max_age}. |

---

##### `allowCredentials`<sup>Optional</sup> <a name="allowCredentials" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.property.allowCredentials"></a>

```java
public java.lang.Boolean|IResolvable getAllowCredentials();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#allow_credentials LambdaFunctionUrl#allow_credentials}.

---

##### `allowHeaders`<sup>Optional</sup> <a name="allowHeaders" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.property.allowHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowHeaders();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#allow_headers LambdaFunctionUrl#allow_headers}.

---

##### `allowMethods`<sup>Optional</sup> <a name="allowMethods" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.property.allowMethods"></a>

```java
public java.util.List<java.lang.String> getAllowMethods();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#allow_methods LambdaFunctionUrl#allow_methods}.

---

##### `allowOrigins`<sup>Optional</sup> <a name="allowOrigins" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.property.allowOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowOrigins();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#allow_origins LambdaFunctionUrl#allow_origins}.

---

##### `exposeHeaders`<sup>Optional</sup> <a name="exposeHeaders" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.property.exposeHeaders"></a>

```java
public java.util.List<java.lang.String> getExposeHeaders();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#expose_headers LambdaFunctionUrl#expose_headers}.

---

##### `maxAge`<sup>Optional</sup> <a name="maxAge" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.property.maxAge"></a>

```java
public java.lang.Number getMaxAge();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#max_age LambdaFunctionUrl#max_age}.

---

### LambdaFunctionUrlTimeouts <a name="LambdaFunctionUrlTimeouts" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.lambda_function_url.LambdaFunctionUrlTimeouts;

LambdaFunctionUrlTimeouts.builder()
//  .create(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#create LambdaFunctionUrl#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/lambda_function_url#create LambdaFunctionUrl#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaFunctionUrlCorsOutputReference <a name="LambdaFunctionUrlCorsOutputReference" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.lambda_function_url.LambdaFunctionUrlCorsOutputReference;

new LambdaFunctionUrlCorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resetAllowCredentials">resetAllowCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resetAllowHeaders">resetAllowHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resetAllowMethods">resetAllowMethods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resetAllowOrigins">resetAllowOrigins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resetExposeHeaders">resetExposeHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resetMaxAge">resetMaxAge</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowCredentials` <a name="resetAllowCredentials" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resetAllowCredentials"></a>

```java
public void resetAllowCredentials()
```

##### `resetAllowHeaders` <a name="resetAllowHeaders" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resetAllowHeaders"></a>

```java
public void resetAllowHeaders()
```

##### `resetAllowMethods` <a name="resetAllowMethods" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resetAllowMethods"></a>

```java
public void resetAllowMethods()
```

##### `resetAllowOrigins` <a name="resetAllowOrigins" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resetAllowOrigins"></a>

```java
public void resetAllowOrigins()
```

##### `resetExposeHeaders` <a name="resetExposeHeaders" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resetExposeHeaders"></a>

```java
public void resetExposeHeaders()
```

##### `resetMaxAge` <a name="resetMaxAge" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resetMaxAge"></a>

```java
public void resetMaxAge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowCredentialsInput">allowCredentialsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowHeadersInput">allowHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowMethodsInput">allowMethodsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowOriginsInput">allowOriginsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.exposeHeadersInput">exposeHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.maxAgeInput">maxAgeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowCredentials">allowCredentials</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowHeaders">allowHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowMethods">allowMethods</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowOrigins">allowOrigins</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.exposeHeaders">exposeHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.maxAge">maxAge</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors">LambdaFunctionUrlCors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowCredentialsInput`<sup>Optional</sup> <a name="allowCredentialsInput" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowCredentialsInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowCredentialsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowHeadersInput`<sup>Optional</sup> <a name="allowHeadersInput" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowHeadersInput"></a>

```java
public java.util.List<java.lang.String> getAllowHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowMethodsInput`<sup>Optional</sup> <a name="allowMethodsInput" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowMethodsInput"></a>

```java
public java.util.List<java.lang.String> getAllowMethodsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowOriginsInput`<sup>Optional</sup> <a name="allowOriginsInput" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowOriginsInput"></a>

```java
public java.util.List<java.lang.String> getAllowOriginsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exposeHeadersInput`<sup>Optional</sup> <a name="exposeHeadersInput" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.exposeHeadersInput"></a>

```java
public java.util.List<java.lang.String> getExposeHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxAgeInput`<sup>Optional</sup> <a name="maxAgeInput" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.maxAgeInput"></a>

```java
public java.lang.Number getMaxAgeInput();
```

- *Type:* java.lang.Number

---

##### `allowCredentials`<sup>Required</sup> <a name="allowCredentials" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowCredentials"></a>

```java
public java.lang.Boolean|IResolvable getAllowCredentials();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowHeaders`<sup>Required</sup> <a name="allowHeaders" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowMethods`<sup>Required</sup> <a name="allowMethods" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowMethods"></a>

```java
public java.util.List<java.lang.String> getAllowMethods();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowOrigins`<sup>Required</sup> <a name="allowOrigins" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowOrigins();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exposeHeaders`<sup>Required</sup> <a name="exposeHeaders" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.exposeHeaders"></a>

```java
public java.util.List<java.lang.String> getExposeHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.maxAge"></a>

```java
public java.lang.Number getMaxAge();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.internalValue"></a>

```java
public LambdaFunctionUrlCors getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors">LambdaFunctionUrlCors</a>

---


### LambdaFunctionUrlTimeoutsOutputReference <a name="LambdaFunctionUrlTimeoutsOutputReference" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.lambda_function_url.LambdaFunctionUrlTimeoutsOutputReference;

new LambdaFunctionUrlTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts">LambdaFunctionUrlTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaFunctionUrlTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts">LambdaFunctionUrlTimeouts</a>

---



