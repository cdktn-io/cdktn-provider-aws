# `lambdaPermission` Submodule <a name="`lambdaPermission` Submodule" id="@cdktn/provider-aws.lambdaPermission"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaPermission <a name="LambdaPermission" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission aws_lambda_permission}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer"></a>

```java
import io.cdktn.providers.aws.lambda_permission.LambdaPermission;

LambdaPermission.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .action(java.lang.String)
    .functionName(java.lang.String)
    .principal(java.lang.String)
//  .eventSourceToken(java.lang.String)
//  .functionUrlAuthType(java.lang.String)
//  .id(java.lang.String)
//  .invokedViaFunctionUrl(java.lang.Boolean|IResolvable)
//  .principalOrgId(java.lang.String)
//  .qualifier(java.lang.String)
//  .region(java.lang.String)
//  .sourceAccount(java.lang.String)
//  .sourceArn(java.lang.String)
//  .statementId(java.lang.String)
//  .statementIdPrefix(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#action LambdaPermission#action}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.functionName">functionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#function_name LambdaPermission#function_name}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.principal">principal</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#principal LambdaPermission#principal}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.eventSourceToken">eventSourceToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#event_source_token LambdaPermission#event_source_token}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.functionUrlAuthType">functionUrlAuthType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#function_url_auth_type LambdaPermission#function_url_auth_type}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#id LambdaPermission#id}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.invokedViaFunctionUrl">invokedViaFunctionUrl</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#invoked_via_function_url LambdaPermission#invoked_via_function_url}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.principalOrgId">principalOrgId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#principal_org_id LambdaPermission#principal_org_id}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.qualifier">qualifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#qualifier LambdaPermission#qualifier}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.sourceAccount">sourceAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#source_account LambdaPermission#source_account}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.sourceArn">sourceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#source_arn LambdaPermission#source_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.statementId">statementId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#statement_id LambdaPermission#statement_id}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.statementIdPrefix">statementIdPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#statement_id_prefix LambdaPermission#statement_id_prefix}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.action"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#action LambdaPermission#action}.

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.functionName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#function_name LambdaPermission#function_name}.

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.principal"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#principal LambdaPermission#principal}.

---

##### `eventSourceToken`<sup>Optional</sup> <a name="eventSourceToken" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.eventSourceToken"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#event_source_token LambdaPermission#event_source_token}.

---

##### `functionUrlAuthType`<sup>Optional</sup> <a name="functionUrlAuthType" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.functionUrlAuthType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#function_url_auth_type LambdaPermission#function_url_auth_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#id LambdaPermission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `invokedViaFunctionUrl`<sup>Optional</sup> <a name="invokedViaFunctionUrl" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.invokedViaFunctionUrl"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#invoked_via_function_url LambdaPermission#invoked_via_function_url}.

---

##### `principalOrgId`<sup>Optional</sup> <a name="principalOrgId" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.principalOrgId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#principal_org_id LambdaPermission#principal_org_id}.

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.qualifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#qualifier LambdaPermission#qualifier}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#region LambdaPermission#region}

---

##### `sourceAccount`<sup>Optional</sup> <a name="sourceAccount" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.sourceAccount"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#source_account LambdaPermission#source_account}.

---

##### `sourceArn`<sup>Optional</sup> <a name="sourceArn" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.sourceArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#source_arn LambdaPermission#source_arn}.

---

##### `statementId`<sup>Optional</sup> <a name="statementId" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.statementId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#statement_id LambdaPermission#statement_id}.

---

##### `statementIdPrefix`<sup>Optional</sup> <a name="statementIdPrefix" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.statementIdPrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#statement_id_prefix LambdaPermission#statement_id_prefix}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetEventSourceToken">resetEventSourceToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetFunctionUrlAuthType">resetFunctionUrlAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetInvokedViaFunctionUrl">resetInvokedViaFunctionUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetPrincipalOrgId">resetPrincipalOrgId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetQualifier">resetQualifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetSourceAccount">resetSourceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetSourceArn">resetSourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetStatementId">resetStatementId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetStatementIdPrefix">resetStatementIdPrefix</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetEventSourceToken` <a name="resetEventSourceToken" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetEventSourceToken"></a>

```java
public void resetEventSourceToken()
```

##### `resetFunctionUrlAuthType` <a name="resetFunctionUrlAuthType" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetFunctionUrlAuthType"></a>

```java
public void resetFunctionUrlAuthType()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetId"></a>

```java
public void resetId()
```

##### `resetInvokedViaFunctionUrl` <a name="resetInvokedViaFunctionUrl" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetInvokedViaFunctionUrl"></a>

```java
public void resetInvokedViaFunctionUrl()
```

##### `resetPrincipalOrgId` <a name="resetPrincipalOrgId" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetPrincipalOrgId"></a>

```java
public void resetPrincipalOrgId()
```

##### `resetQualifier` <a name="resetQualifier" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetQualifier"></a>

```java
public void resetQualifier()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSourceAccount` <a name="resetSourceAccount" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetSourceAccount"></a>

```java
public void resetSourceAccount()
```

##### `resetSourceArn` <a name="resetSourceArn" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetSourceArn"></a>

```java
public void resetSourceArn()
```

##### `resetStatementId` <a name="resetStatementId" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetStatementId"></a>

```java
public void resetStatementId()
```

##### `resetStatementIdPrefix` <a name="resetStatementIdPrefix" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetStatementIdPrefix"></a>

```java
public void resetStatementIdPrefix()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaPermission resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.isConstruct"></a>

```java
import io.cdktn.providers.aws.lambda_permission.LambdaPermission;

LambdaPermission.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.lambda_permission.LambdaPermission;

LambdaPermission.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.lambda_permission.LambdaPermission;

LambdaPermission.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.lambda_permission.LambdaPermission;

LambdaPermission.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LambdaPermission.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LambdaPermission resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LambdaPermission to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LambdaPermission that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LambdaPermission to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.eventSourceTokenInput">eventSourceTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.functionNameInput">functionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.functionUrlAuthTypeInput">functionUrlAuthTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.invokedViaFunctionUrlInput">invokedViaFunctionUrlInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.principalInput">principalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.principalOrgIdInput">principalOrgIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.qualifierInput">qualifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.sourceAccountInput">sourceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.sourceArnInput">sourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.statementIdInput">statementIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.statementIdPrefixInput">statementIdPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.eventSourceToken">eventSourceToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.functionName">functionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.functionUrlAuthType">functionUrlAuthType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.invokedViaFunctionUrl">invokedViaFunctionUrl</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.principal">principal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.principalOrgId">principalOrgId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.qualifier">qualifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.sourceAccount">sourceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.sourceArn">sourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.statementId">statementId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.statementIdPrefix">statementIdPrefix</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `eventSourceTokenInput`<sup>Optional</sup> <a name="eventSourceTokenInput" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.eventSourceTokenInput"></a>

```java
public java.lang.String getEventSourceTokenInput();
```

- *Type:* java.lang.String

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.functionNameInput"></a>

```java
public java.lang.String getFunctionNameInput();
```

- *Type:* java.lang.String

---

##### `functionUrlAuthTypeInput`<sup>Optional</sup> <a name="functionUrlAuthTypeInput" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.functionUrlAuthTypeInput"></a>

```java
public java.lang.String getFunctionUrlAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `invokedViaFunctionUrlInput`<sup>Optional</sup> <a name="invokedViaFunctionUrlInput" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.invokedViaFunctionUrlInput"></a>

```java
public java.lang.Boolean|IResolvable getInvokedViaFunctionUrlInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.principalInput"></a>

```java
public java.lang.String getPrincipalInput();
```

- *Type:* java.lang.String

---

##### `principalOrgIdInput`<sup>Optional</sup> <a name="principalOrgIdInput" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.principalOrgIdInput"></a>

```java
public java.lang.String getPrincipalOrgIdInput();
```

- *Type:* java.lang.String

---

##### `qualifierInput`<sup>Optional</sup> <a name="qualifierInput" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.qualifierInput"></a>

```java
public java.lang.String getQualifierInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `sourceAccountInput`<sup>Optional</sup> <a name="sourceAccountInput" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.sourceAccountInput"></a>

```java
public java.lang.String getSourceAccountInput();
```

- *Type:* java.lang.String

---

##### `sourceArnInput`<sup>Optional</sup> <a name="sourceArnInput" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.sourceArnInput"></a>

```java
public java.lang.String getSourceArnInput();
```

- *Type:* java.lang.String

---

##### `statementIdInput`<sup>Optional</sup> <a name="statementIdInput" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.statementIdInput"></a>

```java
public java.lang.String getStatementIdInput();
```

- *Type:* java.lang.String

---

##### `statementIdPrefixInput`<sup>Optional</sup> <a name="statementIdPrefixInput" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.statementIdPrefixInput"></a>

```java
public java.lang.String getStatementIdPrefixInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `eventSourceToken`<sup>Required</sup> <a name="eventSourceToken" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.eventSourceToken"></a>

```java
public java.lang.String getEventSourceToken();
```

- *Type:* java.lang.String

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

---

##### `functionUrlAuthType`<sup>Required</sup> <a name="functionUrlAuthType" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.functionUrlAuthType"></a>

```java
public java.lang.String getFunctionUrlAuthType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `invokedViaFunctionUrl`<sup>Required</sup> <a name="invokedViaFunctionUrl" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.invokedViaFunctionUrl"></a>

```java
public java.lang.Boolean|IResolvable getInvokedViaFunctionUrl();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

---

##### `principalOrgId`<sup>Required</sup> <a name="principalOrgId" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.principalOrgId"></a>

```java
public java.lang.String getPrincipalOrgId();
```

- *Type:* java.lang.String

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.qualifier"></a>

```java
public java.lang.String getQualifier();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `sourceAccount`<sup>Required</sup> <a name="sourceAccount" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.sourceAccount"></a>

```java
public java.lang.String getSourceAccount();
```

- *Type:* java.lang.String

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.sourceArn"></a>

```java
public java.lang.String getSourceArn();
```

- *Type:* java.lang.String

---

##### `statementId`<sup>Required</sup> <a name="statementId" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.statementId"></a>

```java
public java.lang.String getStatementId();
```

- *Type:* java.lang.String

---

##### `statementIdPrefix`<sup>Required</sup> <a name="statementIdPrefix" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.statementIdPrefix"></a>

```java
public java.lang.String getStatementIdPrefix();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaPermissionConfig <a name="LambdaPermissionConfig" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.lambda_permission.LambdaPermissionConfig;

LambdaPermissionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .action(java.lang.String)
    .functionName(java.lang.String)
    .principal(java.lang.String)
//  .eventSourceToken(java.lang.String)
//  .functionUrlAuthType(java.lang.String)
//  .id(java.lang.String)
//  .invokedViaFunctionUrl(java.lang.Boolean|IResolvable)
//  .principalOrgId(java.lang.String)
//  .qualifier(java.lang.String)
//  .region(java.lang.String)
//  .sourceAccount(java.lang.String)
//  .sourceArn(java.lang.String)
//  .statementId(java.lang.String)
//  .statementIdPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#action LambdaPermission#action}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.functionName">functionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#function_name LambdaPermission#function_name}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.principal">principal</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#principal LambdaPermission#principal}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.eventSourceToken">eventSourceToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#event_source_token LambdaPermission#event_source_token}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.functionUrlAuthType">functionUrlAuthType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#function_url_auth_type LambdaPermission#function_url_auth_type}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#id LambdaPermission#id}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.invokedViaFunctionUrl">invokedViaFunctionUrl</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#invoked_via_function_url LambdaPermission#invoked_via_function_url}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.principalOrgId">principalOrgId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#principal_org_id LambdaPermission#principal_org_id}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.qualifier">qualifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#qualifier LambdaPermission#qualifier}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.sourceAccount">sourceAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#source_account LambdaPermission#source_account}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.sourceArn">sourceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#source_arn LambdaPermission#source_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.statementId">statementId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#statement_id LambdaPermission#statement_id}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.statementIdPrefix">statementIdPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#statement_id_prefix LambdaPermission#statement_id_prefix}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#action LambdaPermission#action}.

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#function_name LambdaPermission#function_name}.

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#principal LambdaPermission#principal}.

---

##### `eventSourceToken`<sup>Optional</sup> <a name="eventSourceToken" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.eventSourceToken"></a>

```java
public java.lang.String getEventSourceToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#event_source_token LambdaPermission#event_source_token}.

---

##### `functionUrlAuthType`<sup>Optional</sup> <a name="functionUrlAuthType" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.functionUrlAuthType"></a>

```java
public java.lang.String getFunctionUrlAuthType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#function_url_auth_type LambdaPermission#function_url_auth_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#id LambdaPermission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `invokedViaFunctionUrl`<sup>Optional</sup> <a name="invokedViaFunctionUrl" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.invokedViaFunctionUrl"></a>

```java
public java.lang.Boolean|IResolvable getInvokedViaFunctionUrl();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#invoked_via_function_url LambdaPermission#invoked_via_function_url}.

---

##### `principalOrgId`<sup>Optional</sup> <a name="principalOrgId" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.principalOrgId"></a>

```java
public java.lang.String getPrincipalOrgId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#principal_org_id LambdaPermission#principal_org_id}.

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.qualifier"></a>

```java
public java.lang.String getQualifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#qualifier LambdaPermission#qualifier}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#region LambdaPermission#region}

---

##### `sourceAccount`<sup>Optional</sup> <a name="sourceAccount" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.sourceAccount"></a>

```java
public java.lang.String getSourceAccount();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#source_account LambdaPermission#source_account}.

---

##### `sourceArn`<sup>Optional</sup> <a name="sourceArn" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.sourceArn"></a>

```java
public java.lang.String getSourceArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#source_arn LambdaPermission#source_arn}.

---

##### `statementId`<sup>Optional</sup> <a name="statementId" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.statementId"></a>

```java
public java.lang.String getStatementId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#statement_id LambdaPermission#statement_id}.

---

##### `statementIdPrefix`<sup>Optional</sup> <a name="statementIdPrefix" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.statementIdPrefix"></a>

```java
public java.lang.String getStatementIdPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/lambda_permission#statement_id_prefix LambdaPermission#statement_id_prefix}.

---



